import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

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

    console.log("Google reCAPTCHA response:", data);

    // Check if verification was successful
    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error("reCAPTCHA failed:", data["error-codes"]);
      return NextResponse.json({ success: false, message: "reCAPTCHA verification failed" }, { status: 400 });
    }
  } catch (err) {
    console.error("reCAPTCHA verification error:", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}