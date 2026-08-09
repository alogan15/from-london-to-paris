import { Lesson } from "./types";

interface Props {
  lesson: Lesson;
  active: boolean;
  onClick: () => void;
}

export default function WeekCard({
  lesson,
  active,
  onClick,
}: Props) {
  return (
<button
  onClick={onClick}
className={`
  relative
  rounded-full
  px-10
  py-4
  text-lg
  font-semibold
  transition-all
  duration-300
  ease-out
  transform
  ${
    active
      ? "bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white shadow-xl scale-105 ring-4 ring-blue-200"
      : "bg-white text-[#2563EB] border-2 border-blue-200 shadow-sm hover:-translate-y-1 hover:scale-105 hover:border-[#2563EB] hover:shadow-xl hover:bg-gradient-to-r hover:from-[#EFF6FF] hover:to-white"
  }
`}
>
  {active && (
    <span className="absolute -top-2 -right-2 rounded-full bg-green-500 px-2 py-1 text-[10px] font-bold text-white shadow-lg">
      LIVE
    </span>
  )}

  <span>{lesson.title}</span>
</button>
  );
}