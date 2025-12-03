import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();

    if (data.success) {
      // Additional check for score (reCAPTCHA v3)
      if (data.score >= 0.5) {
        return NextResponse.json({ success: true });
      } else {
        return NextResponse.json({ success: false, message: "reCAPTCHA score too low" });
      }
    } else {
      return NextResponse.json({ success: false, message: "reCAPTCHA verification failed" });
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}