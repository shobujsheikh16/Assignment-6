const Steps = () => {
  const steps = [
    { id: "01", t: "Create Account", d: "Sign up for free in seconds. No credit card required.", i: "👤" },
    { id: "02", t: "Choose Products", d: "Browse our catalog and select tools that fit your needs.", i: "📦" },
    { id: "03", t: "Start Creating", d: "Download and start using your tools immediately.", i: "🚀" }
  ];

  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-black mb-4">Get Started In 3 Steps</h2>
        <p className="text-gray-500 font-medium mb-20">Start using premium digital tools in minutes, not hours.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map(s => (
            <div key={s.id} className="p-12 rounded-[40px] bg-white shadow-sm relative hover:shadow-xl transition-all">
              <span className="absolute top-6 right-6 bg-[#7C3AED] text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-xs">{s.id}</span>
              <div className="text-6xl mb-8 bg-purple-50 w-24 h-24 mx-auto flex items-center justify-center rounded-full text-[#7C3AED]">{s.i}</div>
              <h4 className="text-2xl font-black mb-4 text-[#1E293B]">{s.t}</h4>
              <p className="text-gray-500 font-medium leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;