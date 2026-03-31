
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
              checked ? "bg-" : "border-stroke-default"
            }`}
          >
            {checked && <img src={check} alt="Checked" className="w-3 h-3" />}
          </div>
        </div>

        <span className="text-sm text-text-default leading-snug">
          Declaro que li e concordo com os{" "}
          <strong className="text-text-highlight font-semibold">
            Termos e Condições
          </strong>{" "}
          e com a{" "}
          <strong className="text-text-highlight font-semibold">
            Política de Privacidade
          </strong>{" "}
          da escola Estrela do Amanhã.
        </span>
      </label>
    </section>
  );
}
