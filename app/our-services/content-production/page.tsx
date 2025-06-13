'use client';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceTemplate from '@/components/ServiceTemplate';

export default function ContentProductionPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-white">
        <Breadcrumb 
          pageName="Content Production"
          bgImage="/images/breadcrumb/services-banner.jpg"
        />
        <ServiceTemplate 
          title="Content Production"
          description="Create engaging and high-quality content that resonates with your target audience. Our content production services help you tell your brand story effectively and drive meaningful engagement."
          image="/images/services/content-production.png"
          buttonLink="/book-consultation"
        />
      </div>
    </main>
  );
} 