"use client";

import Navigation from '@/components/Navigation';
import { BatteryCharging, Tag, TrendUp } from 'phosphor-react';

export default function Lithium() {
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* Hero */}
      <section className="pt-24 section-spacing mineral-hero bg-strata">
        <div className="container-custom max-w-4xl">
          <div className="section-kicker mb-2">Strategic Mineral</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Lithium Ore – Spodumene</h1>
          <p className="text-gray-500 text-lg mb-8">
            The backbone of the energy transition. Our spodumene-rich lithium ore supports reliable, scalable battery
            supply chains for transportation and stationary storage.
          </p>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <div className="glass-surface p-5">
              <div className="icon-badge mb-3">
                <BatteryCharging size={24} weight="duotone" />
              </div>
              <div className="text-sm text-gray-500">Product</div>
              <div className="text-lg font-semibold text-gray-300">Spodumene</div>
            </div>
            <div className="glass-surface p-5">
              <div className="icon-badge mb-3">
                <Tag size={24} weight="duotone" />
              </div>
              <div className="text-sm text-gray-500">Quality</div>
              <div className="text-lg font-semibold text-gray-300">High-quality</div>
            </div>
            <div className="glass-surface p-5">
              <div className="icon-badge mb-3">
                <TrendUp size={24} weight="duotone" />
              </div>
              <div className="text-sm text-gray-500">Grade</div>
              <div className="text-lg font-semibold text-gray-300">6% – 8.79%</div>
            </div>
          </div>

          {/* Story */}
          <div className="prose max-w-none text-gray-600">
            <p>
              Lithium is a light, highly reactive metal that powers modern life—from smartphones to electric vehicles.
              In mineral form, spodumene is one of the most economically significant sources of lithium.
            </p>
            <p>
              We focus on consistent grade, responsible extraction, and dependable logistics so downstream partners can
              plan with confidence. Our teams coordinate closely with regional authorities and communities to maintain
              compliance and transparency.
            </p>
          </div>

          {/* Use cases */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-3">Where it’s used</h2>
            <ul className="list-disc pl-6 text-gray-500 space-y-1">
              <li>EV battery cathodes and energy storage systems</li>
              <li>Consumer electronics and power tools</li>
              <li>Grid-scale storage to stabilize renewables</li>
            </ul>
          </div>

          {/* Congo presence + map */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-3">Presence in Eastern Congo</h2>
            <p className="text-gray-500 mb-4">
              Eastern DRC hosts significant pegmatite-bearing formations that contain lithium minerals. Our footprint
              focuses on accessible, surface-exposed zones with established road links to cross-border gateways.
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


