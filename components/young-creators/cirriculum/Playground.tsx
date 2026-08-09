"use client";

import { useEffect, useState } from "react";

import BrowserPreview from "./BrowserPreview";
import CodeEditor from "./CodeEditor";
import type { Lesson } from "./types";

interface Props {
  lesson: Lesson;
}

export default function Playground({ lesson }: Props) {
  const [code, setCode] = useState("");

  useEffect(() => {
    switch (lesson.language) {
      case "html":
        setCode(lesson.html);
        break;

      case "css":
        setCode(lesson.css);
        break;

      case "javascript":
        setCode(lesson.javascript);
        break;

      default:
        setCode("");
    }
  }, [lesson]);

  const html =
    lesson.language === "html" ? code : lesson.html;

  const css =
    lesson.language === "css" ? code : lesson.css;

  const javascript =
    lesson.language === "javascript"
      ? code
      : lesson.javascript;

  return (
    <section className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">

      <CodeEditor
        title="main"
        language={lesson.language}
        code={code}
        onChange={setCode}
      />

      <BrowserPreview
        html={html}
        css={css}
        javascript={javascript}
      />

    </section>
  );
}