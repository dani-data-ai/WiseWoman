import React from "react";

function Section({ label, text }) {
  return (
    <div className="mb-2">
      <h3 className="text-sm font-semibold text-indigo-700">{label}</h3>
      <p className="text-gray-800 text-base">{text}</p>
    </div>
  );
}

export default function DayCard({ day }) {
  const content = day;
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4">
      <h2 className="text-xl font-bold text-indigo-600 mb-2">{content.title.ro}</h2>
      <Section label="Scriptură" text={content.scripture.ro} />
      <Section label="Gând" text={content.thought.ro} />
      <Section label="Principiu" text={content.principle.ro} />
      <Section label="Reflecție" text={content.reflection.ro} />
      <Section label="Rugăciune" text={content.prayer.ro} />
      <Section label="Aplicare" text={content.application.ro} />
    </div>
  );
}