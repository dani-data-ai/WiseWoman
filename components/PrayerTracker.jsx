import React from "react";

const PRAYER_TARGETS = [
  { key: "lucas", label: "Lucas 🏇 (9, independent, atletic, observator)" },
  { key: "elias", label: "Elias 🦁 (7, timid, emoțional, iubește îmbrățișările)" },
  { key: "miriam", label: "Miriam 🌸 (3, iubitoare, învață să vorbească)" },
  { key: "husband", label: "Soț 💍 (sprijinitor, muncitor, bun)" },
];

export default function PrayerTracker({ status, onChange }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4">
      <h3 className="text-lg font-bold text-indigo-700 mb-2">Rugăciune pentru familie</h3>
      <div className="flex flex-col gap-2">
        {PRAYER_TARGETS.map((target) => (
          <label key={target.key} className="flex items-center gap-2 text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600 transition"
              checked={!!status[target.key]}
              onChange={(e) => onChange(target.key, e.target.checked)}
            />
            <span className="text-base">{target.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}