'use client';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceTemplate from '@/components/ServiceTemplate';

export default function DigitalSkillsTrainingPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-white">
        <Breadcrumb 
          pageName="Digital Skills Training"
          bgImage="/images/breadcrumb/services-banner.jpg"
        />
        <ServiceTemplate 
          title="Digital Skills Training"
          description="Empower your team with essential digital marketing skills. Our comprehensive training programs cover everything from social media management to SEO, ensuring your team stays ahead in the digital landscape."
          image="/images/services/digital-skills.png"
          buttonLink="/book-consultation"
        />
      </div>
    </main>
  );
} 