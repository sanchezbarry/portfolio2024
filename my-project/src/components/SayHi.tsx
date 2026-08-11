"use client";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Tooltip } from "../components/ui/tooltip-card";
import { cn } from "@/utils/cn";
import React, { useRef, useState  } from 'react';
import emailjs from 'emailjs-com';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

// the action name is sent to Google and checked again server-side, so a token
// minted for some other action can't be replayed against this form
const RECAPTCHA_ACTION = "contact_form";

// the provider injects the reCAPTCHA script, so it has to sit above the form
// rather than inside it — scoped here so the script only loads on pages with the form
export function SayHi() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
      scriptProps={{ async: true, defer: true }}
    >
      <SayHiForm />
    </GoogleReCaptchaProvider>
  );
}

function SayHiForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!executeRecaptcha) {
    alert("Spam protection is still loading. Please try again in a moment.");
    return;
  }

  setIsLoading(true);

  try {
    // v3 tokens are single-use and expire after ~2 minutes, so mint one per submit
    const token = await executeRecaptcha(RECAPTCHA_ACTION);

    // Step 1: Verify reCAPTCHA token with YOUR API first
    const verifyRes = await fetch("/api/verify-recaptcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, action: RECAPTCHA_ACTION }),
    });

    const verifyJson = await verifyRes.json();

    if (!verifyJson.success) {
      console.error("reCAPTCHA verification failed:", verifyJson);
      alert("We couldn't verify that you're human. Please try again.");
      setIsLoading(false);
      return;
    }

    // Step 2: Only after verification succeeds, send to EmailJS
    if (form.current) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
        .then((result) => {
          console.log("EmailJS success:", result.text);
          alert('Message sent successfully!');
          form.current?.reset();
        }, (error) => {
          console.error("EmailJS error:", error.text);
          alert('Failed to send the message, please try again.');
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  } catch (err) {
    console.error("Error:", err);
    alert("An error occurred. Please try again.");
    setIsLoading(false);
  }
};

  return (
    <div id="anchor_form" className="md:mt-10 mt-28 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        <Tooltip content="This form uses EmailJS - a free easy to use service">
          <span className="cursor-help font-semibold text-neutral-900 dark:text-neutral-100">Let&apos;s</span>
        </Tooltip>{" "}
        work together.
      </h2>

      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Contact me in anyway - email, WhatsApp, or a good old fashioned form like the one below.
      </p>

      <form ref={form} className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" name="firstname" placeholder="Tyler" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" name="lastname" placeholder="Durden" type="text" required />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" name="email" placeholder="projectmayhem@fc.com" type="email" required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Hey, I'm interested in working with you on a project. Let's chat!"
            className="flex h-20 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] disabled:opacity-50"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>

        {/* required by Google when the reCAPTCHA badge is hidden — see globals.css */}
        <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};