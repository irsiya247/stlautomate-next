'use client';

import { useState } from 'react';

export default function Intake() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    industry: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors";

  if (status === 'success') {
    return (
      <main className="min-h-screen bg-[#030712] text-white flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="w-16 h-16 rounded-full bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400 text-2xl mx-auto mb-6">✓</div>
          <h1 className="text-3xl font-bold mb-3">We got it.</h1>
          <p className="text-slate-400 text-lg">Matthew will reach out within one business day to set up your free call. Check your email.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white relative overflow-hidden">

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: "linear-gradient(rgba(56,189,248,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>
      <div className="absolute top-[-250px] left-1/2 w-[700px] h-[700px] bg-sky-500/10 blur-[160px] rounded-full -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 pt-36 pb-24">
        <div className="max-w-2xl mx-auto px-6">

          <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">Book a Free Call</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Tell us about your business
          </h1>
          <p className="text-slate-400 text-lg mb-10">
            We will reach out within one business day to schedule a 30-minute call. No pitch, no pressure. Just a straight conversation about what we can build for you.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Your name</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@yourcompany.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="314-555-0100"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Business name</label>
                <input
                  name="business"
                  required
                  value={form.business}
                  onChange={handleChange}
                  placeholder="Smith Plumbing LLC"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-1">Industry</label>
              <select
                name="industry"
                value={form.industry}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select your industry</option>
                <option value="HVAC">HVAC</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Dental/Medical">Dental / Medical</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Law Firm">Law Firm</option>
                <option value="Home Services">Home Services</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-1">What are you trying to fix or automate?</label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="We miss a lot of after-hours calls and our follow-up is inconsistent..."
                className={inputClass}
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm">Something went wrong. Email us directly at contact@stlautomate.com</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-sky-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-sky-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Request My Free Call'}
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}
