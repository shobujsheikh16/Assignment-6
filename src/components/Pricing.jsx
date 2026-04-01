const Pricing = () => {
  return (
    <section className="py-32 container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 font-medium">Choose the plan that fits your needs. Upgrade anytime.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {/* Starter Plan */}
         <div className="p-12 rounded-[45px] border border-gray-100 hover:border-purple-200 transition-all">
            <h4 className="text-xl font-black mb-2">Starter</h4>
            <p className="text-gray-400 font-bold mb-8">Perfect for getting started</p>
            <div className="text-5xl font-black mb-10 text-[#1E293B]">$0<span className="text-lg text-gray-400">/Month</span></div>
            <ul className="space-y-4 mb-12 text-gray-500 font-bold">
              <li>✓ Access to 10 free tools</li>
              <li>✓ Basic templates</li>
              <li>✓ Community support</li>
              <li>✓ 1 project per month</li>
              <li>       </li>
              <li>       </li>
            </ul>
            <button className="w-full py-4 rounded-2xl bg-[#7C3AED] text-white font-black hover:bg-[#6D28D9]">Get Started Free</button>
         </div>
         {/* Pro Plan */}
         <div className="p-12 rounded-[45px] bg-[#7C3AED] text-white scale-105 shadow-3xl relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-300 text-black px-6 py-1.5 rounded-full text-[10px] font-black uppercase">Most Popular</span>
            <h4 className="text-xl font-black mb-2">Pro</h4>
            <p className="opacity-80 font-bold mb-8">Best for professionals</p>
            <div className="text-5xl font-black mb-10">$29<span className="text-lg opacity-60">/Month</span></div>
            <ul className="space-y-4 mb-12 font-bold">
              <li>✓ Access to all premium tools</li>
              <li>✓ Unlimited templates</li>
              <li>✓ Advanced analytics</li>
              <li>✓ Cloud sync</li>
              <li>✓ Unlimited projects</li>
              <li>✓ Priority support</li>
            </ul>
            <button className="w-full py-4 rounded-2xl bg-white text-[#7C3AED] font-black hover:bg-gray-100 transition-colors">Start Pro Trial</button>
         </div>
         {/* Enterprise Plan */}
         <div className="p-12 rounded-[45px] border border-gray-100 hover:border-purple-200 transition-all">
            <h4 className="text-xl font-black mb-2">Enterprise</h4>
            <p className="text-gray-400 font-bold mb-8">For teams and businesses</p>
            <div className="text-5xl font-black mb-10 text-[#1E293B]">$99<span className="text-lg text-gray-400">/Month</span></div>
            <ul className="space-y-4 mb-12 text-gray-500 font-bold">
              <li>✓ Everything in Pro</li>
              <li>✓ Team collaboration</li>
              <li>✓ Dedicated support</li>
              <li>✓ SLA guarantee</li>
              <li>✓ Custom branding</li>
              <li>✓ Advanced analytics</li>
            </ul>
            <button className="w-full py-4 rounded-2xl bg-[#7C3AED] text-white font-black">Contact Sales</button>
         </div>
      </div>
    </section>
  );
};

export default Pricing;