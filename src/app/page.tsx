import Navigation from '@/components/Navigation';
import Image from 'next/image';
import HomeBg from '@/photos/homepage.jpg';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Full-width Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={HomeBg}
            alt="Mining operations background"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#1F2937]/70"></div>
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Empowering the Future Through{' '}
            <span className="text-accent">Ethical Mineral Extraction</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200">
          Coopérative Minière Rising Star (COMRS) is a licensed mining cooperative with over 15 years of operational experience in Eastern DRC,
           supplying high-value minerals to global industries.
          </p>
          
          <button className="btn-primary text-lg md:text-xl">
            Request Investor Briefing
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
          <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose COMRS?
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
            A trusted Congolese mining cooperative delivering ethically sourced, high-value minerals to global markets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Operational Readiness</h3>
              <p className="text-secondary">
              Active, licensed mining sites with established logistics for timely, large-scale exports.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Quality & Compliance</h3>
              <p className="text-secondary">
              Strict quality control, certified operations, and adherence to international mining standards.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Proven Expertise</h3>
              <p className="text-secondary">
              Led by experienced mining professionals with deep knowledge of Africa’s mineral sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Partner with COMRS?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Contact us today to explore investment opportunities and learn more about our mining operations and mineral offerings.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us Now
          </a>
        </div>
      </section>
    </main>
  );
}
