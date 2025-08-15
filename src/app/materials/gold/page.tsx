"use client";

import Navigation from '@/components/Navigation';
import { Flask, Handshake, Shield } from 'phosphor-react';

export default function Gold() {
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Hero */}
      <section className="pt-24 section-spacing mineral-hero bg-strata">
        <div className="container-custom max-w-4xl">
          <div className="section-kicker mb-2">Heritage & Value</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Gold</h1>
          <p className="text-gray-500 text-lg mb-8">
            A timeless store of value that also serves precise industrial applications—from electronics to aerospace.
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <div className="glass-surface p-5">
              <div className="icon-badge mb-3">
                <Flask size={24} weight="duotone" />
              </div>
              <div className="text-sm text-gray-500">Assay</div>
              <div className="text-lg font-semibold text-gray-300">On request</div>
            </div>
            <div className="glass-surface p-5">
              <div className="icon-badge mb-3">
                <Shield size={24} weight="duotone" />
              </div>
              <div className="text-sm text-gray-500">Compliance</div>
              <div className="text-lg font-semibold text-gray-300">Secured & compliant</div>
            </div>
            <div className="glass-surface p-5">
              <div className="icon-badge mb-3">
                <Handshake size={24} weight="duotone" />
              </div>
              <div className="text-sm text-gray-500">Partners</div>
              <div className="text-lg font-semibold text-gray-300">Vetted counterparts</div>
            </div>
          </div>

          {/* Story */}
          <div className="prose max-w-none text-gray-600">
            <p>
              Gold retains enduring demand as a financial hedge, while also enabling specialized industrial purposes
              thanks to its conductivity and corrosion resistance.
            </p>
            <p>
              We emphasize compliance, documentation integrity, and transparent movement of goods. Purity details and
              export terms are shared with qualified partners.
            </p>
          </div>

          {/* Congo presence + map */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-3">Presence in Eastern Congo</h2>
            <p className="text-gray-500 mb-4">
              Gold-bearing deposits are present across Eastern DRC. Our operations coordinate with authorities and
              community stakeholders to ensure responsible practices throughout the chain.
            </p>
            <div className="rounded-xl overflow-hidden border border-white/20 shadow-sm">
              <iframe
                title="Eastern Congo Map"
                src="https://www.google.com/maps?q=Bukavu,+DRC&z=7&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


