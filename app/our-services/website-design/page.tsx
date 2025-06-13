'use client';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceTemplate from '@/components/ServiceTemplate';

export default function WebsiteDesignPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-white">
        <Breadcrumb 
          pageName="Website Design"
          bgImage="/images/breadcrumb/services-banner.jpg"
        />
        <ServiceTemplate 
          title="Website Design"
          description="Create a stunning and functional website that represents your brand. Our website design services focus on delivering user-friendly, responsive, and conversion-optimized websites that help you achieve your business goals."
          image="/images/services/website-design.png"
          buttonLink="/book-consultation"
        />
      </div>
    </main>
  );
} 