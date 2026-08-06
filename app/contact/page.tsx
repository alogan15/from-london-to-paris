import {
  ContactHero,
  ContactInfo,
  ContactForm,
  ContactCTA,
  WhyWorkWithUs,
} from "@/components/contact";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </section>

      <WhyWorkWithUs />

      <ContactCTA />
    </main>
  );
}