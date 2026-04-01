const Hero = ({ setActiveTab }) => {
  return (
    <header className="container mx-auto px-6 md:px-20 py-20 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2 space-y-8">
        <div className="inline-flex items-center gap-2 bg-[#F3E8FF] text-[#7C3AED] px-4 py-1.5 rounded-full text-xs font-black uppercase">
          🟣 New: AI-Powered Tools Available
        </div>
        <h1 className="text-6xl md:text-7xl font-black leading-[1.1] text-[#1E293B]">
          Supercharge Your <br/> Digital Workflow
        </h1>
        <p className="text-gray-500 text-lg max-w-lg font-medium">
          Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
        </p>
        <div className="flex gap-4">
          <button onClick={() => setActiveTab('product')} className="bg-[#7C3AED] text-white px-10 py-4 rounded-full font-black shadow-xl shadow-purple-100 hover:scale-105 transition-transform">Explore Products</button>
          <button className="border-2 border-[#7C3AED] text-[#7C3AED] px-10 py-4 rounded-full font-black flex items-center gap-2 hover:bg-purple-50">
            <span>▶</span> Watch Demo
          </button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src="src/assets/banner.png" className="rounded-[40px] shadow-2xl" alt="Hero" />
      </div>
    </header>
  );
};

export default Hero;