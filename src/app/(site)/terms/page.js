export const metadata = {
  title: "Terms of Service | STL Automate",
  description: "Terms of Service for STL Automate LLC.",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <div className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">Legal</div>
        <h1 className="text-4xl font-extrabold mb-2">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: June 2026</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Agreement</h2>
            <p>By accessing stlautomate.com or engaging STL Automate LLC for services, you agree to these Terms of Service. If you do not agree, do not use our website or services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Services</h2>
            <p>STL Automate LLC provides automation consulting and implementation services including, but not limited to, automated phone receptionist systems, email automation, and sales outreach tools. Specific deliverables, timelines, and pricing are defined in individual service agreements with each client.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Payment</h2>
            <p>Payment terms are specified in your service agreement. All fees are non-refundable unless otherwise stated in writing. STL Automate LLC reserves the right to suspend services for accounts with outstanding balances.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h2>
            <p>Upon full payment, clients own the deliverables created specifically for them. STL Automate LLC retains ownership of any proprietary tools, templates, or frameworks used in delivering services. We reserve the right to use general knowledge and experience gained from client projects to improve our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Confidentiality</h2>
            <p>We treat all client information as confidential. We do not sell, share, or disclose client business information to third parties except as required to deliver services or comply with applicable law.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
            <p>STL Automate LLC is not liable for indirect, incidental, or consequential damages arising from use of our services. Our total liability for any claim is limited to the amount paid by the client in the 30 days prior to the event giving rise to the claim.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Third-Party Services</h2>
            <p>Our automation systems may integrate with third-party platforms (such as Twilio, n8n, Vapi, and others). We are not responsible for the availability, performance, or terms of those third-party services. Clients are responsible for maintaining any required accounts or subscriptions with third-party providers.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. SMS / Text Messaging</h2>
            <p className="mb-3">STL Automate LLC sends transactional text messages, including replies to missed calls, appointment reminders and confirmations, and booking-related scheduling messages. By providing your mobile number, or by calling a number that uses our service, you agree to receive these messages.</p>
            <p className="mb-3">Message frequency varies based on your interactions with us. Message and data rates may apply.</p>
            <p className="mb-3">You can cancel at any time by replying <strong className="text-white">STOP</strong>. After you reply STOP we will send one confirmation message and no further messages. For help, reply <strong className="text-white">HELP</strong> or email <a href="mailto:contact@stlautomate.com" className="text-sky-400 hover:text-sky-300 transition-colors">contact@stlautomate.com</a>.</p>
            <p className="mb-3">Carriers are not liable for delayed or undelivered messages.</p>
            <p>See our <a href="/privacy" className="text-sky-400 hover:text-sky-300 transition-colors">Privacy Policy</a> for how we handle your information.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Termination</h2>
            <p>Either party may terminate a service agreement with 30 days written notice. STL Automate LLC may terminate immediately for non-payment or violation of these terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Missouri. Any disputes shall be resolved in the courts of St. Louis County, Missouri.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Contact</h2>
            <p>Questions about these terms can be directed to <a href="mailto:contact@stlautomate.com" className="text-sky-400 hover:text-sky-300 transition-colors">contact@stlautomate.com</a>.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
