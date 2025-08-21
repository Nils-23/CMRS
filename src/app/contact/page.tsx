'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const isValid = form.name && form.email && form.subject && form.message;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!isValid) return;
    setSubmitted(true);
    // TODO: connect form handler
  };

  return (
    <main className="min-h-screen flex flex-col bg-custom">
      <Navigation />

      {/* Page Header */}
      <section className="pt-24 pb-10 section-spacing bg-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            We welcome inquiries from investors, agencies, and strategic partners.
          </p>
        </div>
      </section>

      {/* Contact Form & Company Info */}
      <section className="section-spacing">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Us</h2>
              {submitted ? (
                <div className="text-green-600 font-semibold text-center py-8">
                  Thank you for reaching out! We’ll get back to you within 1–2 business days.
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#C27C2C] focus:border-transparent bg-custom ${
                        touched.name && !form.name ? 'border-red-400' : 'border-gray-200'
                      }`}
                      placeholder="Your name"
                    />
                    {touched.name && !form.name && (
                      <span className="text-red-500 text-xs">Name is required.</span>
                    )}
                  </div>
                  <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#C27C2C] focus:border-transparent bg-custom ${
                        touched.email && !form.email ? 'border-red-400' : 'border-gray-200'
                      }`}
                      placeholder="your@email.com"
                    />
                    {touched.email && !form.email && (
                      <span className="text-red-500 text-xs">Email is required.</span>
                    )}
                  </div>
                  <div className="mb-5">
                    <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#C27C2C] focus:border-transparent bg-custom ${
                        touched.subject && !form.subject ? 'border-red-400' : 'border-gray-200'
                      }`}
                      placeholder="Subject"
                    />
                    {touched.subject && !form.subject && (
                      <span className="text-red-500 text-xs">Subject is required.</span>
                    )}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#C27C2C] focus:border-transparent bg-custom resize-none ${
                        touched.message && !form.message ? 'border-red-400' : 'border-gray-200'
                      }`}
                      placeholder="How can we help you?"
                    />
                    {touched.message && !form.message && (
                      <span className="text-red-500 text-xs">Message is required.</span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
          {/* Company Info */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 border border-gray-100 flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-primary mb-2">Company Info</h2>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏢</span>
                <div>
                  <div className="font-semibold text-primary">Location</div>
                  <div className="text-secondary">C.IBANDA, Bukavu, Democratic Republic of Congo</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <div className="font-semibold text-primary">Email</div>
                  <div className="text-secondary break-all">info@risingstarminerals.com</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <div className="font-semibold text-primary">Phone</div>
                  <div className="text-secondary">+243 894 881 422</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🕘</span>
                <div>
                  <div className="font-semibold text-primary">Response Time</div>
                  <div className="text-secondary">within 1–2 business days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}