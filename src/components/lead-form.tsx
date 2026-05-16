"use client";

import { useRef, useState } from "react";

type LeadFormProps = {
  endpoint: string;
  propertyOptions: string[];
  siteDomain: string;
};

type SubmissionState = "idle" | "submitting" | "success" | "unconfigured";

export function LeadForm({ endpoint, propertyOptions, siteDomain }: LeadFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const hasSubmittedRef = useRef(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [pageUrl] = useState(() => (typeof window === "undefined" ? "" : window.location.href));
  const [userAgent] = useState(() => (typeof window === "undefined" ? "" : window.navigator.userAgent));

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (!endpoint) {
      event.preventDefault();
      setSubmissionState("unconfigured");
      return;
    }

    hasSubmittedRef.current = true;
    setSubmissionState("submitting");
  }

  function handleIframeLoad() {
    if (!hasSubmittedRef.current) {
      return;
    }

    hasSubmittedRef.current = false;
    formRef.current?.reset();
    setSubmissionState("success");
  }

  return (
    <>
      <form
        ref={formRef}
        action={endpoint || undefined}
        method="post"
        target="lead_capture_iframe"
        onSubmit={handleSubmit}
        className="mt-8 grid gap-5 sm:grid-cols-2"
      >
        <input type="hidden" name="site" value={siteDomain} />
        <input type="hidden" name="pageUrl" value={pageUrl} />
        <input type="hidden" name="userAgent" value={userAgent} />

        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className="font-display text-[0.92rem] uppercase tracking-[0.1em] text-[#5a4331]">
            Name
          </span>
          <input
            name="name"
            type="text"
            placeholder="Your full name"
            required
            className="h-14 rounded-[1rem] border border-[#ddc9ab] bg-white px-4 text-[1rem] text-[#2d241c] outline-none transition focus:border-[#b9851d]"
          />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className="font-display text-[0.92rem] uppercase tracking-[0.1em] text-[#5a4331]">
            Contact Number
          </span>
          <input
            name="contactNumber"
            type="tel"
            placeholder="+91 98XXXXXX"
            required
            className="h-14 rounded-[1rem] border border-[#ddc9ab] bg-white px-4 text-[1rem] text-[#2d241c] outline-none transition focus:border-[#b9851d]"
          />
        </label>

        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className="font-display text-[0.92rem] uppercase tracking-[0.1em] text-[#5a4331]">
            Looking For Property
          </span>
          <div className="relative">
            <select
              name="propertyType"
              required
              defaultValue=""
              className="h-14 w-full appearance-none rounded-[1rem] border border-[#ddc9ab] bg-white pl-4 pr-14 text-[1rem] text-[#2d241c] outline-none transition focus:border-[#b9851d]"
            >
              <option value="" disabled>
                Select property type
              </option>
              {propertyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-[#7b684f]">
              <svg viewBox="0 0 20 20" fill="none" className="h-[1.1rem] w-[1.1rem]" aria-hidden="true">
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </label>

        <label className="flex flex-col gap-2 sm:col-span-1">
          <span className="font-display text-[0.92rem] uppercase tracking-[0.1em] text-[#5a4331]">
            Where From
          </span>
          <input
            name="whereFrom"
            type="text"
            placeholder="City / State"
            required
            className="h-14 rounded-[1rem] border border-[#ddc9ab] bg-white px-4 text-[1rem] text-[#2d241c] outline-none transition focus:border-[#b9851d]"
          />
        </label>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="button-gold inline-flex h-14 min-w-[220px] items-center justify-center rounded-[1rem] border border-[#8f6116] px-8 font-display text-[1rem] uppercase tracking-[0.08em] text-[#fff5d8] disabled:cursor-not-allowed disabled:opacity-70"
            disabled={submissionState === "submitting"}
          >
            {submissionState === "submitting" ? "Submitting..." : "Submit"}
          </button>
        </div>

        <div className="sm:col-span-2">
          {submissionState === "success" ? (
            <p className="rounded-[1rem] border border-[#d8c2a1] bg-[#fff7ea] px-4 py-3 text-[0.98rem] text-[#5f4831]">
              Thank you. Your enquiry has been submitted and our team will reach out soon.
            </p>
          ) : null}

          {submissionState === "unconfigured" ? (
            <p className="rounded-[1rem] border border-[#e3c89d] bg-[#fff6e6] px-4 py-3 text-[0.98rem] text-[#6b4a24]">
              The Google Sheets form endpoint is not connected yet. Add the deployed Apps Script URL in the site config to activate submissions.
            </p>
          ) : null}
        </div>
      </form>

      <iframe
        name="lead_capture_iframe"
        title="Lead capture"
        onLoad={handleIframeLoad}
        className="hidden"
      />
    </>
  );
}
