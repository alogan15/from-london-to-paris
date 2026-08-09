import { Lesson } from "./types";

export const lessons: Lesson[] = [
  {
    id: 1,
    week: "Week 1",
    title: "HTML Foundations",
    language: "html",
    description:
      "Learn how websites are structured and build your first web page.",

    html: `<h1>Hello World!</h1>

<p>I built my first webpage.</p>

<button>Click Me</button>`,

    css: "",

    javascript: "",
  },

  {
    id: 2,
    week: "Week 2",
    title: "CSS Styling",
    language: "css",
    description:
      "Bring your webpage to life using colors and fonts.",

    html: `<h1>Hello World!</h1>

<p>I built my first webpage.</p>

<button>Click Me</button>`,

    css: `body {
  background: linear-gradient(135deg, #EFF6FF, #DBEAFE);
  color: #1E293B;
  font-family: Arial, sans-serif;
  padding: 40px;
}

h1 {
  color: #2563EB;
  font-size: 52px;
  margin-bottom: 12px;
}

p {
  color: #475569;
  font-size: 22px;
  line-height: 1.7;
}

button {
  background: #2563EB;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 24px;
  transition: all .25s ease;
}

button:hover {
  background: #1D4ED8;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37,99,235,.25);
}`,

    javascript: "",
  },

  {
    id: 3,
    week: "Week 3",
    title: "JavaScript Basics",
    language: "javascript",
    description:
      "Add interactivity with buttons and user actions.",

    html: `<h1>Hello World!</h1>

          <p>I built my first webpage.</p>

          <button id="btn">Click Me</button>`,
    css: `body {
  background: linear-gradient(135deg, #EFF6FF, #DBEAFE);
  color: #1E293B;
  font-family: Arial, sans-serif;
  padding: 40px;
}

h1 {
  color: #2563EB;
  font-size: 52px;
  margin-bottom: 12px;
}

p {
  color: #475569;
  font-size: 22px;
  line-height: 1.7;
}

button {
  background: #2563EB;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 24px;
  transition: all .25s ease;
}

button:hover {
  background: #1D4ED8;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37,99,235,.25);
}`,

    javascript: `const button = document.querySelector("button");

button.addEventListener("click", () => {
  button.innerText = "🚀 Awesome!";
  button.style.color= "white";
  button.style.background = "blue";
});`,
  },
];