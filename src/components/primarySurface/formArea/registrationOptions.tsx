import manha from "../../../assets/icons/sun-cloud-02.svg";
import tarde from "../../../assets/icons/sun-02.svg";
import futebol from "../../../assets/icons/football.svg";
import basquete from "../../../assets/icons/basketball-02.svg";
import natação from "../../../assets/icons/swimming.svg";
import yoga from "../../../assets/icons/yoga-02.svg";
import volleyball from "../../../assets/icons/volleyball.svg";
import boxing from "../../../assets/icons/boxing-glove-01.svg";

import radioCheck from "../../../assets/icons/radius-checked.svg";

import { useState } from "react";

export function RegistrationOptions() {
  const [selectedShift, setSelectedShift] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  return (
    <section className="w-full flex flex-col gap-[4rem]">
      <div className="flex flex-col">
        <h3 className="text-color-primary">Opções de matrícula</h3>
      </div>

      <fieldset className="flex flex-col gap-[16px]">
        <label className="text-text-tertiary">
          Selecione o turno de estudo
        </label>

        <div className="grid w-full gap-[1rem] [grid-template-columns:repeat(auto-fit,minmax(7.5rem,1fr))]">
          <div
            className={`radio-inner flex flex-col items-center w-full relative border rounded hover:border-[#F67841] ${
              selectedShift === "manha"
                ? "border-[#F67841] border-2"
                : "border-stroke-default"
            }`}
          >
            <input
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              type="radio"
              id="manha"
              name="study-shift"
              value="manha"
              onChange={(e) => setSelectedShift(e.target.value)}
            />

            <div
              className={`absolute top-2 left-2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                selectedShift === "manha"
                  ? "border-[#F67841] bg-[#F67841]"
                  : "border-stroke-default"
              }`}
            >
              {selectedShift === "manha" && (
                <img src={radioCheck} alt="Checked" />
              )}
            </div>

            <div className="flex items-center justify-center w-full">
              <img src={manha} alt="Manhã" className="max-h-32 max-w-32" />
            </div>

            <label htmlFor="manha" className="text-center w-full py-2">
              Manhã
            </label>
          </div>

          <div
            className={`radio-inner flex flex-col items-center w-full relative border rounded hover:border-[#F67841] ${
              selectedShift === "tarde"
                ? "border-[#F67841] border-2"
                : "border-stroke-default"
            }`}
          >
            <input
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              type="radio"
              id="tarde"
              name="study-shift"
              value="tarde"
              onChange={(e) => setSelectedShift(e.target.value)}
            />

            <div
              className={`absolute top-2 left-2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                selectedShift === "tarde"
                  ? "border-[#F67841] bg-[#F67841]"
                  : "border-stroke-default"
              }`}
            >
              {selectedShift === "tarde" && (
                <img src={radioCheck} alt="Checked" />
              )}
            </div>

            <div className="flex items-center justify-center w-full">
              <img src={tarde} alt="Tarde" className="max-h-32 max-w-32" />
            </div>

            <label htmlFor="tarde" className="text-center w-full py-2">
              Tarde
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-text-tertiary">
            Em qual esporte você gostaria de inscrever seu filho?
          </label>
        </div>
        <div className="grid w-full gap-[1rem] [grid-template-columns:repeat(auto-fit,minmax(7.5rem,1fr))]">
          <div
            className={`radio-inner flex flex-col items-center w-full relative border rounded hover:border-[#F67841] ${
             selectedSport === "futebol"
                ? "border-[#F67841] border-2"
                : "border-stroke-default"
            }`}
          >
            <input
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              type="radio"
              id="futebol"
              name="sport-choice"
              value="futebol"
              onChange={(e) => setSelectedSport(e.target.value)}
            />

            <div
              className={`absolute top-2 left-2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                selectedSport === "futebol"
                  ? "border-[#F67841] bg-[#F67841]"
                  : "border-stroke-default"
              }`}
            >
              {selectedSport === "futebol" && (
                <img src={radioCheck} alt="Checked" />
              )}
            </div>

            <div className="flex items-center justify-center w-full">
              <img src={futebol} alt="Futebol" className="max-h-32 max-w-32" />
            </div>

            <label htmlFor="futebol" className="text-center w-full py-2">
              Futebol
            </label>
          </div>
          <div
            className={`radio-inner flex flex-col items-center w-full relative border rounded hover:border-[#F67841] ${
              selectedSport === "Basquete"
                ? "border-[#F67841] border-2"
                : "border-stroke-default"
            }`}
          >
            <input
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              type="radio"
              id="basquete"
              name="sport-choice"
              value="Basquete"
              onChange={(e) => setSelectedSport(e.target.value)}
            />

            <div
              className={`absolute top-2 left-2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                selectedSport === "Basquete"
                  ? "border-[#F67841] bg-[#F67841]"
                  : "border-stroke-default"
              }`}
            >
              {selectedSport === "Basquete" && (
                <img src={radioCheck} alt="Checked" />
              )}
            </div>

            <div className="flex items-center justify-center w-full">
              <img
                src={basquete}
                alt="Basquete"
                className="max-h-32 max-w-32"
              />
            </div>

            <label htmlFor="basquete" className="text-center w-full py-2">
              Basquete
            </label>
          </div>
          <div
            className={`radio-inner flex flex-col items-center w-full relative border rounded hover:border-[#F67841] ${
              selectedSport === "natação"
                ? "border-[#F67841] border-2"
                : "border-stroke-default"
            }`}
          >
            <input
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              type="radio"
              id="natação"
              name="sport-choice"
              value="natação"
              onChange={(e) => setSelectedSport(e.target.value)}
            />

            <div
              className={`absolute top-2 left-2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                selectedSport === "natação"
                  ? "border-[#F67841] bg-[#F67841]"
                  : "border-stroke-default"
              }`}
            >
              {selectedSport === "natação" && (
                <img src={radioCheck} alt="Checked" />
              )}
            </div>

            <div className="flex items-center justify-center w-full">
              <img src={natação} alt="Natação" className="max-h-32 max-w-32" />
            </div>

            <label htmlFor="natação" className="text-center w-full py-2">
              Natação
            </label>
          </div>
          <div
            className={`radio-inner flex flex-col items-center w-full relative border rounded hover:border-[#F67841] ${
              selectedSport === "yoga"
                ? "border-[#F67841] border-2"
                : "border-stroke-default"
            }`}
          >
            <input
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              type="radio"
              id="yoga"
              name="sport-choice"
              value="yoga"
              onChange={(e) => setSelectedSport(e.target.value)}
            />

            <div
              className={`absolute top-2 left-2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                selectedSport === "yoga"
                  ? "border-[#F67841] bg-[#F67841]"
                  : "border-stroke-default"
              }`}
            >
              {selectedSport === "yoga" && (
                <img src={radioCheck} alt="Checked" />
              )}
            </div>

            <div className="flex items-center justify-center w-full">
              <img src={yoga} alt="Yoga" className="max-h-32 max-w-32" />
            </div>

            <label htmlFor="yoga" className="text-center w-full py-2">
              Yoga
            </label>
          </div>
          <div
            className={`radio-inner flex flex-col items-center w-full relative border rounded hover:border-[#F67841] ${
              selectedSport === "volleyball"
                ? "border-[#F67841] border-2"
                : "border-stroke-default"
            }`}
          >
            <input
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              type="radio"
              id="volleyball"
              name="sport-choice"
              value="volleyball"
              onChange={(e) => setSelectedSport(e.target.value)}
            />

            <div
              className={`absolute top-2 left-2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                selectedSport === "volleyball"
                  ? "border-[#F67841] bg-[#F67841]"
                  : "border-stroke-default"
              }`}
            >
              {selectedSport === "volleyball" && (
                <img src={radioCheck} alt="Checked" />
              )}
            </div>

            <div className="flex items-center justify-center w-full">
              <img
                src={volleyball}
                alt="Volleyball"
                className="max-h-32 max-w-32"
              />
            </div>

            <label htmlFor="volleyball" className="text-center w-full py-2">
              Volleyball
            </label>
          </div>
          <div
            className={`radio-inner flex flex-col items-center w-full relative border rounded hover:border-[#F67841] ${
              selectedSport === "boxing"
                ? "border-[#F67841] border-2"
                : "border-stroke-default"
            }`}
          >
            <input
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              type="radio"
              id="boxing"
              name="sport-choice"
              value="boxing"
              onChange={(e) => setSelectedSport(e.target.value)}
            />

            <div
              className={`absolute top-2 left-2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                selectedSport === "boxing"
                  ? "border-[#F67841] bg-[#F67841]"
                  : "border-stroke-default"
              }`}
            >
              {selectedSport === "boxing" && (
                <img src={radioCheck} alt="Checked" />
              )}
            </div>

            <div className="flex items-center justify-center w-full">
              <img src={boxing} alt="Boxing" className="max-h-32 max-w-32" />
            </div>

            <label htmlFor="boxing" className="text-center w-full py-2">
              Boxing
            </label>
          </div>
        </div>
      </fieldset>
    </section>
  );
}
