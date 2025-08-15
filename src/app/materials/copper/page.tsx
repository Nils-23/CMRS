"use client";

import Navigation from '@/components/Navigation';
import { Wrench, TrendUp, Flask } from 'phosphor-react';

export default function Copper() {
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Hero */}
      <section className="pt-24 section-spacing mineral-hero bg-strata">
        <div className="container-custom max-w-4xl">
          <div className="section-kicker mb-2">Infrastructure Backbone</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Copper Ore</h1>
          <p className="text-gray-500 text-lg mb-8">
            The metal of electrification. Our copper underpins grids, motors, and renewable build-outs worldwide.
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
                <TrendUp size={24} weight="duotone" />
              </div>
              <div className="text-sm text-gray-500">Grade</div>
              <div className="text-lg font-semibold text-gray-300">28%</div>
            </div>
            <div className="glass-surface p-5">
              <div className="icon-badge mb-3">
                <Flask size={24} weight="duotone" />
              </div>
              <div className="text-sm text-gray-500">Precious Content</div>
              <div className="text-lg font-semibold text-gray-300">8 g/MT</div>
            </div>
          </div>

          {/* Story */}
          <div className="prose max-w-none text-gray-600">
            <p>
              Copper is indispensable for transmission lines, transformers, and EV motors thanks to its conductivity and
              durability. Our supply supports projects that expand energy access and accelerate the low‑carbon economy.
            </p>
            <p>
              We prioritize consistent quality, predictable scheduling, and compliant cross-border logistics. Our teams
              work hand-in-hand with partners to line up assays, export documentation, and delivery milestones.
            </p>
          </div>

          {/* Congo presence + map */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-3">Presence in Eastern Congo</h2>
            <p className="text-gray-500 mb-4">
              Eastern DRC is historically rich in copper-bearing formations. With warehousing in Bukavu and access to
              regional routes, we can stage and move shipments efficiently to regional ports.
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


