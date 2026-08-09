"use client";

import { useMemo } from "react";

interface BrowserPreviewProps {
  html: string;
  css: string;
  javascript: string;
}

export default function BrowserPreview({
  html,
  css,
  javascript,
}: BrowserPreviewProps) {
  const srcDoc = useMemo(
    () => `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body{
              font-family: Arial, Helvetica, sans-serif;
              padding:32px;
              margin:0;
            }

            ${css}
          </style>
        </head>

        <body>

          ${html}

          <script>
            ${javascript}
          </script>

        </body>
      </html>
    `,
    [html, css, javascript]
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-2xl ring-1 ring-blue-100">

      {/* Browser Header */}
      <div className="flex items-center gap-4 border-b border-slate-200 bg-slate-100 px-5 py-3">

        {/* Browser Buttons */}
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 rounded-full border border-slate-300 bg-white px-4 py-1 text-center text-xs text-slate-500 shadow-sm">
          🌐 localhost:3000
        </div>

      </div>

      {/* Browser Window */}
      <div className="bg-white">
        <iframe
          title="Live Preview"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          className="h-[520px] w-full bg-white"
        />
      </div>

    </div>
  );
}