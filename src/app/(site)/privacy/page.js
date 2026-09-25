export const metadata = {
  title: "Privacy Policy | STL Automate",
  description: "Privacy Policy for STL Automate LLC.",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <div className="max-w-3xl mx-auto px-6 pt-36 pb-24">
        <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">Legal</div>
        <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: September 21, 2026</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Overview</h2>
            <p>STL Automate LLC (&quot;STL Automate,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides automation services and operates internal automation tools. This policy explains what information we access or collect, why we use it, what we may store, and the choices available to users.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information You Provide</h2>
            <p className="mb-3">We may collect information that you submit through our website or provide while working with us, including your name, work email, optional phone number, company, and descriptions of your automation needs. For project requests, this may include the problem, current and desired workflow, systems and tools involved, repair status, target timing, and budget range. We use that information to respond to inquiries, assess project fit, provide requested services, and communicate about those services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Google User Data We Access</h2>
            <p className="mb-3">When a user connects a Google account and grants permission, our job-search automation may access:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 ml-2">
              <li>Gmail messages and message metadata needed to identify and read job-alert emails from LinkedIn, Indeed, ZipRecruiter, and Glassdoor</li>
              <li>Gmail messages and message metadata needed to identify and read job-application confirmation emails</li>
              <li>The ability to send Daily Digest emails and application-preparation notification emails from the connected account</li>
              <li>Google Sheets data needed to add or update relevant job and application information in the user&apos;s tracker</li>
            </ul>
            <p className="mt-3">We access this data only after the user authorizes the Google permissions requested by the automation.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. How We Use Google User Data</h2>
            <p>Google user data is used to provide the connected job-search features: finding relevant job alerts and application confirmations, extracting job and application details, maintaining the user&apos;s Google Sheets tracker, preparing Daily Digests, and sending application-preparation notifications. The information is processed through STL Automate&apos;s n8n workflows for these purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Storage, Sharing, and Retention</h2>
            <p className="mb-3">Relevant parsed job and application information may be stored in the user&apos;s Google Sheets tracker and in limited n8n workflow or data-table state used to operate the automation. We retain information only while it is reasonably needed to provide and maintain the requested features, resolve operational issues, or meet applicable legal obligations.</p>
            <p className="mb-3">We do not sell Google user data or other personal information. We do not use Google user data for advertising. We do not transfer Google user data except as necessary to provide the user-authorized automation, maintain its security, comply with applicable law, or with the user&apos;s consent.</p>
            <p className="mb-3">Project intake submissions are sent to our server-side lead endpoint and forwarded through our n8n integration so we can review and respond. We may record project inquiries in our customer relationship management system. Information is shared with service providers only as needed to operate this process.</p>
            <p>To request deletion of stored information, contact us at <a href="mailto:contact@stlautomate.com" className="text-sky-400 hover:text-sky-300 transition-colors">contact@stlautomate.com</a>. We will evaluate and handle the request based on the information held and any applicable obligations.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Google API Limited Use</h2>
            <p>STL Automate&apos;s use and transfer of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-sky-400 hover:text-sky-300 transition-colors">Google API Services User Data Policy</a>, including the Limited Use requirements.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Security</h2>
            <p>We use reasonable technical and organizational safeguards intended to limit unauthorized access to the systems and accounts that process user information. Access is limited to what is needed to operate and maintain the automation. No system can be guaranteed to be completely secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Revoking Google Access</h2>
            <p>You can revoke STL Automate&apos;s access to your Google account at any time from your <a href="https://myaccount.google.com/connections" className="text-sky-400 hover:text-sky-300 transition-colors">Google Account third-party connections settings</a>. Revoking access stops future access through that authorization, but it does not automatically delete information already stored. Contact us if you also want to request deletion of stored information.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Website Analytics and Cookies</h2>
            <p>Our website may collect standard technical and analytics information, such as pages visited, browser type, and referring URLs, and may use cookies for basic functionality and analytics. You can manage cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. SMS and Mobile Messaging</h2>
            <p>We do not share, sell, or rent mobile phone numbers or SMS opt-in information to third parties or affiliates for marketing or promotional purposes. Phone numbers collected for text messaging are used only to deliver requested or service-related messages. Message and data rates may apply. Reply <strong className="text-white">STOP</strong> to opt out or <strong className="text-white">HELP</strong> for help.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Changes to This Policy</h2>
            <p>We may update this policy as our services or data practices change. The revised policy will be posted on this page with a new last-updated date.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Contact</h2>
            <p>For privacy questions or requests, contact <a href="mailto:contact@stlautomate.com" className="text-sky-400 hover:text-sky-300 transition-colors">contact@stlautomate.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
