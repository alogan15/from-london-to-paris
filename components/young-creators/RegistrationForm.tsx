import ParentInfo from "./ParentInfo";
import StudentInfo from "./StudentInfo";

export default function RegistrationForm() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-32">

      <div className="space-y-10">

        <ParentInfo />

        <StudentInfo />

      </div>

    </section>
  );
}