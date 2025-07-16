import React, { useState, useEffect } from "react";
import devotionalData from "./devotional.json";
import DayCard from "./components/DayCard.jsx";
import PrayerTracker from "./components/PrayerTracker.jsx";

const totalDays = devotionalData.devotional.days.length;

function App() {
  const [currentDay, setCurrentDay] = useState(0);
  const [prayerStatus, setPrayerStatus] = useState({});

  useEffect(() => {
    const stored = localStorage.getItem("prayerStatus");
    setPrayerStatus(stored ? JSON.parse(stored) : {});
  }, []);

  useEffect(() => {
    localStorage.setItem("prayerStatus", JSON.stringify(prayerStatus));
  }, [prayerStatus]);

  const day = devotionalData.devotional.days[currentDay];
  const title = devotionalData.devotional.title.ro;
  const introduction = devotionalData.devotional.introduction.ro;

  const handlePrayerChange = (target, checked) => {
    setPrayerStatus((prev) => ({
      ...prev,
      [currentDay]: { ...prev[currentDay], [target]: checked },
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto py-4 px-2">
      <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
        <h1 className="text-2xl font-bold text-center text-indigo-700 mb-2">{title}</h1>
        {currentDay === 0 && (
          <p className="text-gray-600 text-base text-center mb-2">{introduction}</p>
        )}
      </div>
      <DayCard day={day} />
      <PrayerTracker
        status={prayerStatus[currentDay] || {}}
        onChange={handlePrayerChange}
      />
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-indigo-500 text-white rounded-full px-6 py-2 font-semibold disabled:opacity-50"
          onClick={() => setCurrentDay((d) => Math.max(d - 1, 0))}
          disabled={currentDay === 0}
        >
          &#8592; Anterior
        </button>
        <span className="text-gray-500 font-medium">{`Ziua ${currentDay + 1} / ${totalDays}`}</span>
        <button
          className="bg-indigo-500 text-white rounded-full px-6 py-2 font-semibold disabled:opacity-50"
          onClick={() => setCurrentDay((d) => Math.min(d + 1, totalDays - 1))}
          disabled={currentDay === totalDays - 1}
        >
          Următor &#8594;
        </button>
      </div>
    </div>
  );
}

export default App;