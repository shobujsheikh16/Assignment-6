const Footer = () => {
  return (
    <>
      <section className="bg-[#7C3AED] py-24 text-white text-center px-6">
        <h2 className="text-5xl font-black mb-6">Ready To Transform Your Workflow?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-12 font-medium">Join thousands of professionals who are already using Digitools to work smarter.</p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <button className="bg-white text-[#7C3AED] px-12 py-4 rounded-full font-black text-lg">Explore Products</button>
          <button className="border-2 border-white/40 text-white px-12 py-4 rounded-full font-black text-lg hover:bg-white/10 transition-all">View Pricing</button>
        </div>
        <p className="text-white/60 text-sm font-bold">14-day free trial • No credit card required • Cancel anytime</p>
      </section>

      <footer className="bg-[#0B0F19] text-white pt-24 pb-12 ">
        <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <h2 className="text-4xl font-black">DigiTools</h2>
            <p className="text-gray-500 font-medium leading-relaxed">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-8">Product</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li className="hover:text-white cursor-pointer transition-colors">Features</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Templates</li>
              <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-8">Company</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li className="hover:text-white cursor-pointer transition-colors">About</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Press</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-8">Social Links</h4>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black text-xl cursor-pointer hover:bg-gray-200 transition-all">📸</div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black text-xl cursor-pointer hover:bg-gray-200 transition-all">📘</div>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black text-xl cursor-pointer hover:bg-gray-200 transition-all">✖</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;