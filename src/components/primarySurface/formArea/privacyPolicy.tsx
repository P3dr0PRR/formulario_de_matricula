import check from "../../../assets/icons/check.svg";

import { useState } from "react";

export function PrivacyPolicy() {
  const [checked, setChecked] = useState(false);
  return (
    <section className="p-3">
      <label
        htmlFor="privacy-policy"
        className="flex items-start gap-3 cursor-pointer"
      >
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            type="checkbox"
            id="privacy-policy"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="sr-only"
          />
          <div
            className={`w-4 h-4 border-2 flex items-center justify-center rounded-sm ${
              checked ? "bg-stroke-highlight" : "border-stroke-default"
            }`}
          >
            {checked && <img src={check} alt="Checked" className="w-3 h-3" />}
          </div>
        </div>

        <span className="text-sm text-text-default leading-snug">
          I declare read and agree to the{" "}
          <strong className="text-text-highlight font-semibold">
            Terms and Conditions
          </strong>{" "}
          and with the{" "}
          <strong className="text-text-highlight font-semibold">
            Privacy Policy
          </strong>{" "}
          of the Estrela do Amanhã school.
        </span>
      </label>
    </section>
  );
}
