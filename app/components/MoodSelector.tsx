"use client";

import { useState } from "react";

export default function MoodSelector() {
  const [selected, setSelected] = useState<string | null>(null);

  const moods = {
    anxious: "It's okay to feel anxious. Together, we can build tools to calm your nervous system and regain balance.",
    overwhelmed: "When everything feels too much, therapy can help you slow down, organize your thoughts, and breathe again.",
    stuck: "Feeling stuck often means you're ready for change. Let's gently explore what’s holding you back.",
    healing: "Healing is not linear — and that’s okay. Growth happens in small, powerful steps."
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl sm:text-4xl font-serif text-[var(--color-primary)] mb-6">
          How Are You Feeling Today?
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(moods).map((mood) => (
            <button
              key={mood}
              onClick={() => setSelected(mood)}
              className={`px-6 py-3 rounded-full border transition-all duration-300
                ${
                  selected === mood
                    ? "bg-[var(--color-primary)] text-white shadow-lg"
                    : "bg-white text-[var(--color-primary)] hover:bg-[var(--color-secondary)]"
                }`}
            >
              {mood.charAt(0).toUpperCase() + mood.slice(1)}
            </button>
          ))}
        </div>

        {selected && (
          <div className="bg-[var(--color-secondary)] p-6 rounded-lg shadow-md transition-all duration-500">
            <p className="text-gray-700">{moods[selected as keyof typeof moods]}</p>
          </div>
        )}

      </div>
    </section>
  );
}
