'use client'

import { useState } from "react";
import Card from "../components/Card";

const NAME = "Scott Alexander Thomson";
const EMAIL = "scottalexthoms@gmail.com";
const CV_HREF = encodeURI("/Scott Alexander Thomson - CV.pdf");

const cardClasses = "flex flex-col justify-between";
const labelClasses =
  "text-sm font-medium text-gray-500 dark:text-gray-400 mb-1";
const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (unsupported browser/permissions) — the
      // mailto link above still works as a fallback.
    }
  };

  return (
    <div className="px-6 sm:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Get in touch
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-10">
        Feel free to reach out, or grab a copy of my CV below.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className={cardClasses}>
          <div>
            <h2 className={labelClasses}>Name</h2>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {NAME}
            </p>
          </div>
        </Card>

        <Card className={cardClasses}>
          <div>
            <h2 className={labelClasses}>Email</h2>
            <a
              href={`mailto:${EMAIL}`}
              className={`text-lg font-semibold text-gray-900 dark:text-white hover:underline break-all rounded ${focusRing}`}
            >
              {EMAIL}
            </a>
          </div>
          <button
            type="button"
            onClick={copyEmail}
            className={`mt-4 self-start text-sm text-blue-600 dark:text-blue-400 hover:underline rounded ${focusRing}`}
          >
            {copied ? "Copied!" : "Copy email"}
          </button>
        </Card>

        <Card className={cardClasses}>
          <div>
            <h2 className={labelClasses}>CV</h2>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Download my resume
            </p>
          </div>
          <a
            href={CV_HREF}
            download
            className={`mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity ${focusRing}`}
          >
            Download CV
          </a>
        </Card>
      </div>
    </div>
  );
}
