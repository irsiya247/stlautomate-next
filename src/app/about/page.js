export default function About() {
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
        <div className="max-w-4xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-[11px] tracking-[0.35em] text-sky-400 uppercase mb-4">About Us</div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-16">
            Built in St. Louis.<br />
            <span className="text-sky-400">Built for the long run.</span>
          </h1>

          {/* ORIGIN STORY */}
          <div className="prose prose-invert max-w-none mb-16 space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              STL Automate started with a job search.
            </p>
            <p>
              Our founder Matthew spent years in cybersecurity, a field that runs on precision, systems thinking, and knowing exactly where the vulnerabilities are. When he found himself in a job search, he noticed something: the process was almost entirely manual. Researching companies, tailoring applications, following up, tracking responses. Hours of repetitive work for every single opportunity.
            </p>
            <p>
              So he automated it. Not to cut corners. To free up time for the parts that actually required him. The personalized conversations. The relationship-building. The judgment calls that no spreadsheet could make.
            </p>
            <p>
              That experience turned into a question: how many small business owners are doing the same thing every day? Answering the same emails. Following up with the same leads. Playing phone tag with customers who just want a quick answer.
            </p>
            <p>
              A lot of them, it turns out.
            </p>
            <p>
              STL Automate exists to give small businesses the same leverage that large companies have, without the large company budget or the IT department to manage it. We build the systems, we run the setup, and we stay on as your partner as your business grows.
            </p>
          </div>

          <div className="border-t border-slate-800 my-16" />

          {/* THE TEAM */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10">The team</h2>
            <div className="grid md:grid-cols-2 gap-8">

              <div className="border border-slate-800 bg-slate-900/30 rounded-2xl p-8">
                <img src="/matthew.jpg" alt="Matthew" className="w-14 h-14 rounded-full object-cover mb-5" />
                <h3 className="text-xl font-bold mb-1">Matthew</h3>
                <div className="text-sky-400 text-xs tracking-widest uppercase mb-4">Founder</div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Cybersecurity background. Born and raised in St. Louis. Builds the systems, manages every client relationship, and is the person you&apos;ll actually talk to, before, during, and after your project goes live.
                </p>
              </div>

              <div className="border border-slate-800 bg-slate-900/30 rounded-2xl p-8">
                <img src="/akshay.jpeg" alt="Akshay" className="w-14 h-14 rounded-full object-cover mb-5" />
                <h3 className="text-xl font-bold mb-1">Akshay</h3>
                <div className="text-sky-400 text-xs tracking-widest uppercase mb-4">Partner</div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Technical partner and co-builder. Works alongside Matthew on system architecture and workflow design to make sure every product we ship actually works the way it should.
                </p>
              </div>

            </div>
          </div>

          <div className="border-t border-slate-800 my-16" />

          {/* THE HONEST PART */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Something worth saying directly</h2>
            <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
              <p>
                We know what you might be thinking: <span className="text-white italic">"If you automate everything, what happens to the relationship?"</span>
              </p>
              <p>
                It&apos;s a fair question. Here&apos;s our honest answer: automation doesn&apos;t replace the relationship. It protects it.
              </p>
              <p>
                When your phone gets answered automatically, your customer doesn&apos;t go to voicemail, and you don&apos;t spend your evening returning calls. When a lead gets followed up with automatically, you don&apos;t have to remember to do it. Neither does anyone else on your team.
              </p>
              <p>
                The result is that when you <em>do</em> talk to a customer, it&apos;s because the moment actually calls for a human. Not because the system missed them.
              </p>
              <p>
                We&apos;re a small team. We don&apos;t take on more clients than we can give real attention to. Every system we build gets tested, every client gets a direct line to the person who built it, and every question gets a real answer, not a ticket number.
              </p>
              <p>
                That&apos;s the part that doesn&apos;t get automated.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 my-16" />

          {/* WHY STL */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Why St. Louis</h2>
            <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
              <p>
                Matthew grew up here. St. Louis has a particular kind of business culture. People value relationships, they value straight talk, and they can tell pretty quickly when someone is trying to sell them something they don&apos;t need.
              </p>
              <p>
                We like that. It keeps us honest.
              </p>
              <p>
                We work with businesses in St. Louis and beyond, but local clients get something extra: a face-to-face conversation if you want one, and a partner who understands what it means to run a small business in this city.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="border border-slate-800 bg-slate-900/20 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-3">Want to talk to a real person?</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Book a free call with Matthew. No sales script, no pitch deck. Just a conversation about your business and whether we can help.
            </p>
            <a href="/intake" className="bg-sky-600 text-white px-8 py-4 rounded-full font-semibold text-lg inline-block hover:bg-sky-500 transition-colors">
              Book a Free Call
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}
