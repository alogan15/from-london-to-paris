import ConsultationHero from "@/components/consultation/ConsultationHero";
import BasicInfo from "@/components/consultation/BasicInfo";
import ProjectDetails from "@/components/consultation/ProjectDetails";
import ServicesInterested from "@/components/consultation/ServicesInterested";
import BudgetTimeline from "@/components/consultation/BudgetTimeline";
import ContactMethod from "@/components/consultation/ContactMethod";
import SubmitConsultation from "@/components/consultation/SubmitConsultation";
import FAQ from "@/components/consultation/FAQ";

export default function ConsultationPage() {
  return (
    <main className="bg-black text-white">

      <ConsultationHero />

      <BasicInfo />

      <ProjectDetails />

      <ServicesInterested />

      <BudgetTimeline />

      <ContactMethod />

      <SubmitConsultation />

      <FAQ />

    </main>
  );
}