'use client';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceTemplate from '@/components/ServiceTemplate';

export default function SocialMediaManagementPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-white">
        <Breadcrumb 
          pageName="Social Media Management"
          bgImage="/images/breadcrumb/services-banner.jpg"
        />
        <ServiceTemplate 
          title="Social Media Management"
          description="Build and maintain a strong social media presence that engages your audience and drives business growth. Our expert team handles everything from content creation to community management."
          image="/images/about-left-img.png"
          buttonLink="/book-consultation"
        />
      </div>
    </main>
  );
} 