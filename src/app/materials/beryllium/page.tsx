"use client";

import Navigation from '@/components/Navigation';
import { Wrench, Flask, CheckCircle } from 'phosphor-react';

export default function Beryllium() {
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Hero */}
      <section className="pt-24 section-spacing mineral-hero bg-strata">
        <div className="container-custom max-w-4xl">
          <div className="section-kicker mb-2">Strategic Material</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Beryllium Ore</h1>
          <p className="text-gray-500 text-lg mb-8">
            Lightweight strength for extreme environments. Our beryllium supports aerospace, defense, and advanced
            nuclear applications.
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <div className="glass-surface p-5">
              <div className="icon-badge mb-3">
                <Wrench size={24} weight="duotone" />
              </div>
              <div className="text-sm text-gray-500">Capacity</div>
              <div className="text-lg font-semibold text-gray-300">20,000 MT/month</div>
            </div>
            <div className="glass-surface p-5">
              <div className="icon-badge mb-3">
                <Flask size={24} weight="duotone" />
              </div>
              <div className="text-sm text-gray-500">Product</div>
              <div className="text-lg font-semibold text-gray-300">Beryllium ore</div>
            </div>
            <div className="glass-surface p-5">
              <div className="icon-badge mb-3">
                <CheckCircle size={24} weight="duotone" />
              </div>
              <div className="text-sm text-gray-500">Certification</div>
              <div className="text-lg font-semibold text-gray-300">Assays/Docs on request</div>
            </div>
          </div>

          {/* Story */}
          <div className="prose max-w-none text-gray-600">
            <p>
              Beryllium is a rare, high-performance material valued for its stiffness-to-weight ratio and thermal
              stability. It is used in satellite components, precision instruments, and nuclear reactors.
            </p>
            <p>
              We emphasize traceability and responsible handling throughout extraction and transport. Partners can
              obtain technical documentation and safety data under appropriate confidentiality.
            </p>
          </div>

          {/* Congo presence + map */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-3">Presence in Eastern Congo</h2>
            <p className="text-gray-500 mb-4">
              In Eastern DRC, mineral-rich mountain formations include rare-element deposits. Our teams work near
              established corridors to move materials securely to regional ports.
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


