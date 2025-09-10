import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { ArrowRight, Truck, Shield, Headphones } from 'lucide-react';
import hero from '../assets/hero.png';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Home = () => {
  const { products, getProducts,backendUrl } = useContext(CartContext);
  const [email, setEmail] = useState('');

  const handleSubmit = async(e) => {

  e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/api/subscribe/new`, { email });
      if (res.data.success) {
        toast.success(res.data.message);
        setEmail('');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  

  const featuredProducts = products.filter(p => p.bestSeller).slice(0, 4);
  const latestProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Find Your Perfect
                <span className="text-primary block">Style Today</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Discover our latest collection of premium fashion items crafted for your comfort and style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/collection" className="btn-primary inline-flex items-center">
                  Shop Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-secondary rounded-2xl flex items-center justify-center">
                <img src={hero} alt="hero-image" className='h-full w-full object-cover rounded-lg'/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-shop-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Free Shipping</h3>
              <p className="text-muted-foreground">Free shipping on orders over ₹50</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Secure Payment</h3>
              <p className="text-muted-foreground">100% secure payment processing</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Headphones className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">24/7 Support</h3>
              <p className="text-muted-foreground">Round-the-clock customer support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-muted-foreground">Discover our most popular items</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/collection" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Collection */}
      <section className="py-16 bg-shop-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Collection</h2>
            <p className="text-muted-foreground">Stay updated with our newest arrivals</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Subscribe to our newsletter and be the first to know about new collections and exclusive offers.
          </p>
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white border-0 focus:ring-2 focus:ring-primary-foreground/20 outline-none"
            />
            <button className="px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;