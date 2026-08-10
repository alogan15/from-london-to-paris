import ParentInfo from "./ParentInfo";
import StudentInfo from "./StudentInfo";
import TechnologyCheck from "./TechnologyCheck";
import TuitionSelection from "./TuitionSelection";
import Agreements from "./Agreements";
import SubmitRegistration from "./SubmitRegistration";
import RegistrationHero from "./RegistrationHero";

export default function RegistrationForm() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-32">
      <div className="space-y-10">
        <RegistrationHero />
        <ParentInfo />
        <StudentInfo />
        <TechnologyCheck />
        <TuitionSelection />
        <Agreements />
        <SubmitRegistration />
      </div>
    </section>
  );
}