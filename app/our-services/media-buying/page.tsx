'use client';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceTemplate from '@/components/ServiceTemplate';

export default function MediaBuyingPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-white">
        <Breadcrumb 
          pageName="Media Buying"
          bgImage="/images/breadcrumb/services-banner.jpg"
        />
        <ServiceTemplate 
          title="Media Buying"
          description="Maximize your advertising ROI with our strategic media buying services. We help you identify and secure the most effective advertising placements across digital platforms to reach your target audience."
          image="/images/about-left-img.png"
          buttonLink="/book-consultation"
        />
      </div>
    </main>
  );
} 