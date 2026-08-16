"use client";

import { useState } from "react";

import { lessons } from "./weekData";
import Playground from "./Playground";

export default function Curriculum() {
  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);

return (
  <section className="mx-auto max-w-7xl px-6 py-32">

    <div className="text-center">

      <p className="uppercase tracking-[0.4em] text-slate-600">
        Learn By Building
      </p>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Try Coding Yourself
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
        Click a lesson, edit the code, and watch your website update instantly.
      </p>

    </div>

<div className="mt-16 flex flex-wrap justify-center gap-4">
  {lessons.map((lesson) => (
    <button
      key={lesson.id}
      onClick={() => setSelectedLesson(lesson)}
      className={`rounded-full bg-blue-600 px-10 py-5 text-lg font-semibold text-white transition duration-300 hover:scale-105"
 ${
        lesson.id === selectedLesson.id
          ? "bg-[#D4AF37] text-black"
          : "border border-zinc-700 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
      }`}
    >
      {lesson.title}
    </button>
  ))}
</div>

    <Playground lesson={selectedLesson} />

  </section>
);
}