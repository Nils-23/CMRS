import Navigation from '@/components/Navigation';

export default function Services() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-[#F1EAE0] to-[#E8DCC7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Our Operations
            </h1>
            <p className="text-xl text-secondary mb-8 max-w-4xl mx-auto leading-relaxed">
              From mineral-rich mountain ranges to international shipping routes, CMRS runs fully licensed operations built for scalable, ethical mineral extraction.
            </p>
          </div>
        </div>
      </section>

      {/* Mineral Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What We Extract
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Lithium Ore */}
  <a
    href="/materials/lithium"
    className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow"
  >
    <div
      className="w-16 h-16 rounded-full mx-auto mb-6 bg-cover bg-center shadow-md"
      style={{ backgroundImage: "url('/images/lithium-bg.jpg')" }}
    />
    <h3 className="text-xl font-bold text-primary mb-1">Lithium Ore</h3>
    <p className="text-sm text-secondary mb-2 font-semibold">Spodumene-rich</p>
    <p className="text-secondary">
      Critical for EV batteries and renewable energy storage solutions.
    </p>
  </a>

  {/* Copper Ore */}
  <a
    href="/materials/copper"
    className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow"
  >
    <div
      className="w-16 h-16 rounded-full mx-auto mb-6 bg-cover bg-center shadow-md"
      style={{ backgroundImage: "url('./copper.jpg')" }}
    />
    <h3 className="text-xl font-bold text-primary mb-1">Copper Ore</h3>
    <p className="text-sm text-secondary mb-2 font-semibold">High-grade</p>
    <p className="text-secondary">
      Essential for electrical infrastructure and green technology.
    </p>
  </a>

  {/* Beryllium Ore */}
  <a
    href="/materials/beryllium"
    className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow"
  >
    <div
      className="w-16 h-16 rounded-full mx-auto mb-6 bg-cover bg-center shadow-md"
      style={{ backgroundImage: "url('./beryllium.jpg')" }}
    />
    <h3 className="text-xl font-bold text-primary mb-1">Beryllium Ore</h3>
    <p className="text-sm text-secondary mb-2 font-semibold">
      Strategic mineral
    </p>
    <p className="text-secondary">
      Vital for aerospace, defense, and nuclear applications.
    </p>
  </a>

  {/* Gold */}
  <a
    href="/materials/gold"
    className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow"
  >
    <div
      className="w-16 h-16 rounded-full mx-auto mb-6 bg-cover bg-center shadow-md"
      style={{ backgroundImage: "url('../photos/beryllium.jpg')" }}
    />
    <h3 className="text-xl font-bold text-primary mb-1">Gold</h3>
    <p className="text-sm text-secondary mb-2 font-semibold">
      Investment grade
    </p>
    <p className="text-secondary">
      Traditional store of value and industrial applications.
    </p>
  </a>
</div>
        </div>
      </section>

      {/* Mining Sites */}
      <section className="py-20 bg-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Where We Operate
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Uvira / Kamaniola Mine */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Uvira / Kamaniola Mine</h3>
                  <p className="text-secondary mb-2">Accessible via N5 highway</p>
                  <p className="text-sm text-secondary/80">
                    Strategic location with excellent road connectivity for efficient mineral transport.
                  </p>
                </div>
              </div>
            </div>

            {/* Kaziba Mine */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Kaziba Mine</h3>
                  <p className="text-secondary mb-2">Part of the Uvira geological belt</p>
                  <p className="text-sm text-secondary/80">
                    Rich mineral deposits in surface-exposed mountain formations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Geological Features */}
          <div className="mt-8 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-1">Surface-Exposed Mineral-Rich Formations</h3>
                <p className="text-secondary">
                  Our mining sites feature accessible surface deposits, reducing extraction complexity and environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Logistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Logistics Advantage
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-lg text-secondary leading-relaxed">
                CMRS owns and operates secure warehouses in Bukavu, a fleet of 25MT trucks, and has access to regional road and port systems via Rwanda, Burundi, and Tanzania. We export via Dar es Salaam, with future plans for rail connections via Kigoma.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Warehouses */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Secure Warehouses</h3>
              <p className="text-secondary">Bukavu facilities</p>
            </div>

            {/* Fleet */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Owned Fleet</h3>
              <p className="text-secondary">25MT dump trucks</p>
            </div>

            {/* Port Access */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Port Access</h3>
              <p className="text-secondary">Dar es Salaam export</p>
            </div>

            {/* Future Rail */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Future Rail</h3>
              <p className="text-secondary">Kigoma connections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Built for Growth, Ready for the Future
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Connect with us for investor briefings or project walkthroughs.
          </p>
          <a 
            href="/contact" 
            className="btn-primary inline-block text-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}