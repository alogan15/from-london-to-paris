"use client";

interface CodeEditorProps {
  title: string;
  language: string;
  code: string;
  onChange: (value: string) => void;
}

export default function CodeEditor({
  title,
  language,
  code,
  onChange,
}: CodeEditorProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-[#1E1E1E] shadow-xl">

      {/* VS Code Title Bar */}
      <div className="flex items-center justify-between border-b border-zinc-700 bg-[#252526] px-4 py-2">

        {/* Window Buttons */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        {/* File Name */}
        <div className="text-sm font-medium text-gray-400">
          {title}.{language}
        </div>

        {/* Spacer */}
        <div className="w-14" />

      </div>

      <div className="flex h-[340px]">

        {/* Activity Bar */}
        <div className="flex w-14 flex-col items-center gap-6 border-r border-zinc-700 bg-[#252526] pt-5">

          <div className="h-6 w-6 rounded bg-zinc-600" />
          <div className="h-6 w-6 rounded bg-zinc-700" />
          <div className="h-6 w-6 rounded bg-zinc-700" />
          <div className="h-6 w-6 rounded bg-zinc-700" />

        </div>

        {/* Editor */}
        <div className="flex-1">

          {/* File Tab */}
          <div className="border-b border-zinc-700 bg-[#2D2D2D] px-5 py-3">

            <span className="rounded bg-[#1E1E1E] px-3 py-2 text-sm text-gray-300">
              {title}.{language}
            </span>

          </div>

          <textarea
            value={code}
            onChange={(e) => onChange(e.target.value)}
            spellCheck={false}
            className="
              h-[280px]
              w-full
              resize-none
              bg-[#1E1E1E]
              p-6
              font-mono
              text-[15px]
              leading-7
              text-gray-200
              outline-none
            "
          />

        </div>

      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between border-t border-zinc-700 bg-[#007ACC] px-4 py-1 text-xs text-white">

        <span>{language.toUpperCase()}</span>

        <span>UTF-8</span>

      </div>

    </div>
  );
}