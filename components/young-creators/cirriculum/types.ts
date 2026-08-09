export interface Lesson {
  id: number;
  week: string;
  title: string;
  description: string;

  language: "html" | "css" | "javascript";

  html: string;
  css: string;
  javascript: string;
}