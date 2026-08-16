import { NextResponse } from "next/server";

// v3 returns a 0.0–1.0 likelihood that the request is human rather than a pass/fail.
// 0.5 is Google's suggested starting point; raise it if spam gets through, lower it
// if real submissions get rejected.
const SCORE_THRESHOLD = 0.5;

export async function POST(request: Request) {
  try {
    const { token, action } = await request.json();

    if (!token) {
      return NextResponse.json({ success: false, message: "No token provided" }, { status: 400 });
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      return NextResponse.json({ success: false, message: "Missing RECAPTCHA_SECRET_KEY on server" }, { status: 500 });
    }

    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", token);

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await res.json();

    if (!data.success) {
      console.error("reCAPTCHA failed with error codes:", data["error-codes"]);
      return NextResponse.json({
        success: false,
        message: "reCAPTCHA verification failed",
        errors: data["error-codes"]
      }, { status: 400 });
    }

    // Under v3, `success` only means the token was well-formed and unused — bots get
    // that too. The action and score are what actually carry the signal.
    if (action && data.action !== action) {
      console.error(`reCAPTCHA action mismatch: expected "${action}", got "${data.action}"`);
      return NextResponse.json({ success: false, message: "reCAPTCHA action mismatch" }, { status: 400 });
    }

    // A v2 key returns no score, so this also fails closed if the keys were never
    // swapped over, rather than silently accepting everything.
    if (typeof data.score !== "number") {
      console.error("reCAPTCHA response had no score — is RECAPTCHA_SECRET_KEY a v3 key?");
      return NextResponse.json({ success: false, message: "reCAPTCHA misconfigured" }, { status: 500 });
    }

    if (data.score < SCORE_THRESHOLD) {
      console.warn(`reCAPTCHA score ${data.score} below threshold ${SCORE_THRESHOLD}`);
      return NextResponse.json({ success: false, message: "reCAPTCHA score too low" }, { status: 400 });
    }

    return NextResponse.json({ success: true, score: data.score });
  } catch (err) {
    console.error("reCAPTCHA verification error:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}