import RegistrationHero from "@/components/young-creators/RegistrationHero";
import ParentInfo from "@/components/young-creators/ParentInfo";
import StudentInfo from "@/components/young-creators/StudentInfo";
import TechnologyCheck from "@/components/young-creators/TechnologyCheck";
import TuitionSelection from "@/components/young-creators/TuitionSelection";
import ParentNotes from "@/components/young-creators/ParentNotes";
import Agreement from "@/components/young-creators/Agreements";
import SubmitRegistration from "@/components/young-creators/SubmitRegistration";

export default function EnrollPage() {
  return (
    <main className="bg-black text-white">

      <RegistrationHero />

      <ParentInfo />

      <StudentInfo />

      <TechnologyCheck />

      <TuitionSelection />

      <ParentNotes />

      <Agreement />

      <SubmitRegistration />

    </main>
  );
}