import { PageShell } from '@/components/PageShell';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeWelcome } from '@/components/home/HomeWelcome';
import { HomeVisionMission } from '@/components/home/HomeVisionMission';
import { HomeBibleVerse } from '@/components/home/HomeBibleVerse';
import { HomeEvents } from '@/components/home/HomeEvents';
import { HomeGallery } from '@/components/home/HomeGallery';
import { CTASection } from '@/components/CTASection';

export default function Home() {
  return (
    <PageShell>
      <HomeHero />
      <HomeWelcome />
      <HomeVisionMission />
      <HomeBibleVerse />
      <HomeEvents />
      <HomeGallery />
      <CTASection />
    </PageShell>
  );
}
