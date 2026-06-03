'use client';

import { useState } from 'react';

export default function Intake() {
  const [form, setForm] = useState({ name: '', email: '', company: '', automation: '' });
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

  if (status === 'success') {
    return (
      <main className="max-w-xl mx-auto px-6 py-20 text-center">
        <div className="text-sky-400 text-4xl mb-4">✓</div>
        <h1 className="text-3xl font-bold">You're on the list.</h1>
        <p className="text-slate-400 mt-3">We'll review your operations and reach out within 1 business day.</p>
      </main>
    );
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-bold">Get Automation Audit</h1>

      <p className="text-slate-400 mt-3">
        We review your operations and map automation opportunities.
      </p>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>

        <input
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 bg-black border border-slate-700 rounded-lg text-white placeholder-slate-500"
          placeholder="Name"
        />
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 bg-black border border-slate-700 rounded-lg text-white placeholder-slate-500"
          placeholder="Email"
        />
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full p-3 bg-black border border-slate-700 rounded-lg text-white placeholder-slate-500"
          placeholder="Company"
        />
        <textarea
          name="automation"
          value={form.automation}
          onChange={handleChange}
          rows={4}
          className="w-full p-3 bg-black border border-slate-700 rounded-lg text-white placeholder-slate-500"
          placeholder="What do you want to automate?"
        />

        {status === 'error' && (
          <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-sky-500 text-black py-3 rounded-xl font-semibold disabled:opacity-50"
        >
          {status === 'loading' ? 'Submitting...' : 'Submit & Get Audit'}
        </button>

      </form>

    </main>
  );
}
