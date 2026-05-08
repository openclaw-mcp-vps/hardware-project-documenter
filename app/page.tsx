export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs uppercase tracking-widest">
          Hardware Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate documentation<br />for hardware projects
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your schematics, code, photos, and BOMs. Our AI pipeline produces complete build guides, component lists, and assembly instructions — ready to share or export as PDF.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Instant access after payment.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm">
          {["Schematic analysis","BOM extraction","Photo annotation","PDF export","Assembly instructions","Code documentation"].map(f => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#6e7681] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited project uploads",
              "AI-generated build guides",
              "Component list extraction",
              "Assembly instruction generation",
              "PDF & Markdown export",
              "Priority support"
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "What file types can I upload?",
              a: "You can upload schematics (KiCad, Eagle, PDF), source code files, photos (JPG, PNG), and BOM spreadsheets (CSV, XLSX). Our AI handles the rest."
            },
            {
              q: "How long does documentation generation take?",
              a: "Most projects are fully documented within 2–5 minutes depending on the number of files. You'll receive a notification when your docs are ready."
            },
            {
              q: "Can I edit the generated documentation?",
              a: "Yes. All generated docs are fully editable in our built-in editor before you export to PDF or Markdown."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Hardware Project Documenter. All rights reserved.
      </footer>
    </main>
  );
}
