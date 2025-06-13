'use client';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceTemplate from '@/components/ServiceTemplate';

export default function DigitalMarketingPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-white">
        <Breadcrumb 
          pageName="Digital Marketing"
          bgImage="/images/breadcrumb/services-banner.jpg"
        />
        <ServiceTemplate 
          title="Digital Marketing"
          description="Transform your online presence with our comprehensive digital marketing solutions tailored to your business goals. We help you reach your target audience, increase brand awareness, and drive measurable results."
          image="/images/services/digital-marketing.png"
          buttonLink="/book-consultation"
        />
      </div>
    </main>
  );
} 