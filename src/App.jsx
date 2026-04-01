import { useState } from 'react'
import { products } from "./index"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components Import
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('product');
  const [cart, setCart] = useState([]);
  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (product) => {
    setCart([...cart, { ...product, cartId: Date.now() }]); 
    toast.success(`${product.name} added to cart!`);
    setAddedId(product.id); 
  };

  const handleRemove = (cartId, name) => {
    setCart(cart.filter(item => item.cartId !== cartId));
    toast.error(`${name} removed from cart.`);
  };

  const handleProceedToCheckout = () => {
    setCart([]);
    setActiveTab('product');
    setAddedId(null);
    toast.info("Order successful!");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-manrope text-[#0F172A]">
      <ToastContainer position="top-right" autoClose={1500} />

      <Navbar cartCount={cart.length} setActiveTab={setActiveTab} />
      <div className={activeTab === 'cart' ? 'hidden' : 'block'}>
        <Hero setActiveTab={setActiveTab} />
        <Stats />
      </div>

      <main className="container mx-auto px-6 md:px-20 mb-32">
        {activeTab === 'product' ? (
          <>
            <div className="text-center mb-16 pt-10">
              <h2 className="text-5xl font-black text-[#1E293B] mb-4">Premium Digital Tools</h2>
              <div className="bg-gray-200 p-1.5 rounded-full inline-flex gap-2">
                <button onClick={() => setActiveTab('product')} className="bg-[#7C3AED] text-white px-10 py-3 rounded-full font-bold shadow-lg">Products</button>
                <button onClick={() => setActiveTab('cart')} className="text-gray-500 px-10 py-3 rounded-full font-bold">Cart ({cart.length})</button>
              </div>
            </div>

            {/* Product Cards Grid with Shadow */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map((item) => (
                <div key={item.id} className="bg-white border border-gray-50 rounded-[35px] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-12px_rgba(124,58,237,0.15)] transition-all duration-500 relative group border-t-2 border-transparent hover:border-[#7C3AED]/20">
                  
                  {/* Tag */}
                  <span className={`absolute top-8 right-8 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 border shadow-sm ${
                    item.tag === "Best Seller" ? "border-[#FB923C]/30 bg-[#FFF7ED] text-[#EA580C]" : "border-purple-200 bg-purple-50 text-[#7C3AED]"
                  }`}>
                    {item.tag === "Best Seller" && <span></span>} {item.tag}
                  </span>

                  {/* Icon */}
                  <div className="mb-3 bg-slate-50 w-15 h-15 flex items-center justify-center rounded-3xl group-hover:bg-purple-50 transition-colors p-3 shadow-inner">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black mb-3">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed h-12 overflow-hidden">{item.description}</p>
                  
                  <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#1E293B]">${item.price}</span>
                    <span className="text-gray-400 font-bold text-sm">/{item.period}</span>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {item.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-600"><span className="text-green-500 font-black">✓</span> {f}</li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => handleAddToCart(item)} 
                    className={`w-full py-4 rounded-2xl font-black transition-all duration-300 ${
                      addedId === item.id ? "bg-green-500 text-white shadow-lg" : "bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-purple-200 shadow-lg"
                    }`}
                  >
                    {addedId === item.id ? "✓ Added to Cart" : "Buy Now"}
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Cart View */
          <div className="max-w-4xl mx-auto py-20 min-h-[60vh]">
            <div className="text-center mb-12">
               <h2 className="text-4xl font-black mb-8 text-[#1E293B]">Your Cart</h2>
               <div className="bg-gray-200 p-1.5 rounded-full inline-flex gap-2">
                  <button onClick={() => setActiveTab('product')} className="text-gray-500 px-10 py-3 rounded-full font-bold">Products</button>
                  <button className="bg-[#7C3AED] text-white px-10 py-3 rounded-full font-bold shadow-lg">Cart ({cart.length})</button>
               </div>
            </div>
            
            <div className="bg-white rounded-[40px] p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-black mb-8">Order Summary</h3>
              {cart.length === 0 ? (
                <div className="text-center py-20 font-bold text-gray-400 italic text-xl">Your cart is empty!</div>
              ) : (
                <div className="space-y-6">
                  {cart.map(item => (
                    <div key={item.cartId} className="flex justify-between items-center bg-slate-50 p-6 rounded-3xl border border-gray-100 transition-all hover:bg-white hover:shadow-md">
                      <div className="flex gap-6 items-center">
                        <div className="bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm p-2">
                           <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <p className="font-black text-xl text-gray-800">{item.name}</p>
                          <p className="font-bold text-[#7C3AED] text-lg">${item.price}</p>
                        </div>
                      </div>
                      <button onClick={() => handleRemove(item.cartId, item.name)} className="text-red-500 font-bold px-4 hover:text-red-700">Remove</button>
                    </div>
                  ))}
                  <div className="pt-10 border-t border-gray-100">
                    <div className="flex justify-between text-3xl font-black mb-10 px-4">
                      <span>Total:</span><span>${cart.reduce((total, p) => total + p.price, 0)}</span>
                    </div>
                    <button onClick={handleProceedToCheckout} className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-5 rounded-3xl text-xl font-black shadow-2xl transition-all active:scale-95">Proceed To Checkout</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <div className={activeTab === 'cart' ? 'hidden' : 'block'}>
        <Steps />
        <Pricing />
        <Footer />
      </div>
    </div>
  )
}

export default App