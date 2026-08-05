import DiscoveryHero from "@/components/discovery/DiscoveryHero";
import DiscoveryBenefits from "@/components/discovery/DiscoveryBenefits";
import DiscoveryCTA from "@/components/discovery/DiscoveryCTA";

export default function DiscoveryPage() {
  return (
    <main className="bg-black text-white">
      <DiscoveryHero />
      <DiscoveryBenefits />
      <DiscoveryCTA />
    </main>
  );
}