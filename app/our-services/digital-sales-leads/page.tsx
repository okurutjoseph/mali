'use client';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceTemplate from '@/components/ServiceTemplate';

export default function DigitalSalesLeadsPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-white">
        <Breadcrumb 
          pageName="Digital Sales & Leads"
          bgImage="/images/breadcrumb/services-banner.jpg"
        />
        <ServiceTemplate 
          title="Digital Sales & Leads"
          description="Generate more leads and convert them into customers with our proven digital sales strategies and techniques. Our comprehensive approach helps you optimize your sales funnel and increase revenue."
          image="/images/services/digital-Sales.png"
          buttonLink="/book-consultation"
        />
      </div>
    </main>
  );
} 