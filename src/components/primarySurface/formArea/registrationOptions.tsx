import morning from "../../../assets/icons/sun-cloud-02.svg";
import afternoon from "../../../assets/icons/sun-02.svg";
import soccer from "../../../assets/icons/football.svg";
import basketball from "../../../assets/icons/basketball-02.svg";
import swimming from "../../../assets/icons/swimming.svg";
import yoga from "../../../assets/icons/yoga-02.svg";
import volleyball from "../../../assets/icons/volleyball.svg";
import boxing from "../../../assets/icons/boxing-glove-01.svg";
import radioCheck from "../../../assets/icons/radius-checked.svg";

import { useState } from "react";

const shifts = [
  { id: "morning", label: "Morning", icon: morning },
  { id: "afternoon", label: "Afternoon", icon: afternoon },
];

const sports = [
  { id: "soccer", label: "Soccer", icon: soccer },
  { id: "basketball", label: "Basketball", icon: basketball },
  { id: "swimming", label: "Swimming", icon: swimming },
  { id: "yoga", label: "Yoga", icon: yoga },
  { id: "volleyball", label: "Volleyball", icon: volleyball },
  { id: "boxing", label: "Boxing", icon: boxing },
];

interface RadioCardProps {
  id: string;
  label: string;
  icon: string;
  name: string;
  selected: string;
  onChange: (value: string) => void;
}

function RadioCard({
  id,
  label,
  icon,
  name,
  selected,
  onChange,
}: RadioCardProps) {
  const isSelected = selected === id;

  return (
    <div
      className={`radio-inner flex flex-col items-center w-full relative border rounded hover:border-[#F67841] ${
        isSelected ? "border-[#F67841] border-2" : "border-stroke-default"
      }`}
    >
      <input
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        type="radio"
        id={id}
        name={name}
        value={id}
        onChange={(e) => onChange(e.target.value)}
      />

      <div
        className={`absolute top-2 left-2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
          isSelected ? "border-[#F67841] bg-[#F67841]" : "border-stroke-default"
        }`}
      >
        {isSelected && <img src={radioCheck} alt="Checked" />}
      </div>

      <div className="flex items-center justify-center w-full">
        <img src={icon} alt={label} className="max-h-32 max-w-32" />
      </div>

      <label htmlFor={id} className="text-center w-full py-2">
        {label}
      </label>
    </div>
  );
}

export function RegistrationOptions() {
  const [selectedShift, setSelectedShift] = useState("");
  const [selectedSport, setSelectedSport] = useState("");

  return (
    <section className="w-full flex flex-col gap-16">
      <div className="flex flex-col">
        <h3 className="text-color-primary">Enrollment Options</h3>
      </div>

      <fieldset className="flex flex-col gap-4">
        <label className="text-text-tertiary">Select the study shift</label>

        <div className="grid w-full gap-4 grid-cols-[repeat(auto-fit,minmax(7.5rem,1fr))]">
          {shifts.map((shift) => (
            <RadioCard
              key={shift.id}
              {...shift}
              name="study-shift"
              selected={selectedShift}
              onChange={setSelectedShift}
            />
          ))}
        </div>

        <label className="text-text-tertiary">
          In which sport would you like to enroll your child?
        </label>

        <div className="grid w-full gap-4 grid-cols-[repeat(auto-fit,minmax(7.5rem,1fr))]">
          {sports.map((sport) => (
            <RadioCard
              key={sport.id}
              {...sport}
              name="sport-choice"
              selected={selectedSport}
              onChange={setSelectedSport}
            />
          ))}
        </div>
      </fieldset>
    </section>
  );
}
