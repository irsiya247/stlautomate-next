"use client";

import Script from "next/script";
import { useCallback, useEffect, useState } from "react";
import {
  GOOGLE_ADS_CONSENT_STORAGE_KEY,
  GOOGLE_ADS_ID,
  GOOGLE_ADS_PRIVACY_CHOICES_EVENT,
  enableGoogleAdsMeasurement,
  initializeGoogleAdsTag,
  readGoogleAdsConsent,
  saveGoogleAdsConsent,
  updateGoogleAdsConsent
} from "./google-ads-conversion.mjs";

function getBrowserConsent(storage) {
  try {
    return readGoogleAdsConsent(storage);
  } catch {
    return null;
  }
}

export function GoogleAdsPrivacyChoicesButton() {
  const openChoices = () => {
    window.dispatchEvent(new Event(GOOGLE_ADS_PRIVACY_CHOICES_EVENT));
  };

  return (
    <button
      type="button"
      onClick={openChoices}
      className="text-slate-600 text-sm hover:text-slate-400 transition-colors"
      aria-label="Open Google Ads measurement choices"
    >
      Google Ads measurement choices
    </button>
  );
}

export default function GoogleAdsConsentManager() {
  const [decision, setDecision] = useState(null);
  const [hasResolvedChoice, setHasResolvedChoice] = useState(false);
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [storageError, setStorageError] = useState(false);

  useEffect(() => {
    const openChoices = () => setIsPromptOpen(true);
    window.addEventListener(GOOGLE_ADS_PRIVACY_CHOICES_EVENT, openChoices);
    const resolveTimer = window.setTimeout(() => {
      let storedDecision = null;
      try {
        storedDecision = getBrowserConsent(window.localStorage);
      } catch {
        storedDecision = null;
      }

      if (storedDecision === "granted" && !initializeGoogleAdsTag(window, true)) {
        storedDecision = null;
        setStorageError(true);
      }

      setDecision(storedDecision);
      setHasResolvedChoice(true);
    }, 0);

    return () => {
      window.clearTimeout(resolveTimer);
      window.removeEventListener(GOOGLE_ADS_PRIVACY_CHOICES_EVENT, openChoices);
    };
  }, []);

  const choose = useCallback((nextDecision) => {
    let storage;
    try {
      storage = window.localStorage;
    } catch {
      storage = null;
    }

    const saved = saveGoogleAdsConsent(storage, nextDecision);

    if (nextDecision === "denied") {
      updateGoogleAdsConsent(window, "denied");
      if (!saved) {
        try {
          storage?.removeItem(GOOGLE_ADS_CONSENT_STORAGE_KEY);
        } catch {
          // The in-memory denial still prevents conversions for this page view.
        }
      }
      setDecision("denied");
      setStorageError(!saved);
      setIsPromptOpen(false);
      return;
    }

    if (!saved) {
      setStorageError(true);
      return;
    }

    const updated = enableGoogleAdsMeasurement(window);
    if (!updated) {
      saveGoogleAdsConsent(storage, "denied");
      updateGoogleAdsConsent(window, "denied");
      setDecision("denied");
      setStorageError(true);
      return;
    }

    setDecision("granted");
    setStorageError(false);
    setIsPromptOpen(false);
  }, []);

  const showPrompt = hasResolvedChoice && (decision === null || isPromptOpen);

  return (
    <>
      {decision === "granted" && (
        <Script
          id="google-ads-gtag-loader"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
      )}
      {showPrompt && (
        <section
          className="fixed inset-x-0 bottom-0 z-[100] border-t border-slate-700 bg-slate-950/95 px-5 py-5 shadow-2xl backdrop-blur sm:px-8"
          role="region"
          aria-label="Google Ads measurement choice"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-base font-semibold text-white">Google Ads measurement</h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">
                Google Ads measurement may use cookies or similar identifiers to help us understand whether advertising visits result in project inquiries. The conversion event sent after a successful submission does not include form-field content such as your name, email, phone number, company, or project details. This choice only controls Google Ads measurement; PostHog site analytics remains separate. Read our <a href="/privacy" className="text-sky-300 underline underline-offset-2 hover:text-sky-200">privacy policy</a> or <a href="https://business.safety.google/privacy/" target="_blank" rel="noreferrer" className="text-sky-300 underline underline-offset-2 hover:text-sky-200">Google&apos;s Business Data Responsibility information</a>.
              </p>
              {decision && (
                <p className="mt-1 text-xs text-slate-400">
                  Current choice: {decision === "granted" ? "allowed" : "declined"}. You can update it here.
                </p>
              )}
              {storageError && (
                <p className="mt-2 text-sm text-amber-300" role="status">
                  We couldn&apos;t save your choice. Google Ads measurement will remain off unless your choice can be stored.
                </p>
              )}
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => choose("granted")}
                className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                Allow Google Ads measurement
              </button>
              <button
                type="button"
                onClick={() => choose("denied")}
                className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
              >
                Decline
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
