const Navbar = ({ cartCount, setActiveTab }) => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-20 py-6 sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-50">
      <div className="text-3xl font-black text-[#7C3AED]">DigiTools</div>
      <div className="hidden lg:flex gap-8 font-bold text-gray-600">
        <a href="#" className="hover:text-[#7C3AED]">Products</a>
        <a href="#" className="hover:text-[#7C3AED]">Features</a>
        <a href="#" className="hover:text-[#7C3AED]">Pricing</a>
        <a href="#" className="hover:text-[#7C3AED]">Testimonials</a>
        <a href="#" className="hover:text-[#7C3AED]">FAQ</a>
      </div>
      <div className="flex items-center gap-6">
        <div className="indicator cursor-pointer" onClick={() => setActiveTab('cart')}>
          <span className="indicator-item badge bg-[#7C3AED] text-white border-none font-bold">{cartCount}</span>
          <span className="text-xl">🛒</span>
        </div>
        <button className="font-bold text-gray-700">Login</button>
        <button className="bg-[#7C3AED] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#6D28D9] transition-all">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;