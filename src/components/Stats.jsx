const Stats = () => {
  return (
    <section className="bg-[#7C3AED] py-20 text-white grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-24">
      <div className="space-y-2">
        <h2 className="text-6xl font-black">50K+</h2>
        <p className="opacity-80 font-bold uppercase tracking-widest text-xs">Active Users</p>
      </div>
      <div className="border-x-0 md:border-x border-white/20 space-y-2">
        <h2 className="text-6xl font-black">200+</h2>
        <p className="opacity-80 font-bold uppercase tracking-widest text-xs">Premium Tools</p>
      </div>
      <div className="space-y-2">
        <h2 className="text-6xl font-black">4.9</h2>
        <p className="opacity-80 font-bold uppercase tracking-widest text-xs">User Rating</p>
      </div>
    </section>
  );
};

export default Stats;