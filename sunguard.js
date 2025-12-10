import React from 'react';
import { Shield, Droplets, Leaf, Star, ChevronRight, Sun, Wind, Waves } from 'lucide-react';

const App = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Broad Spectrum SPF 50+",
      description: "Superior protection against both UVA and UVB rays for complete sun defense."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Resistant",
      description: "Maintains effectiveness for up to 80 minutes in water or during sweating."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly Formula",
      description: "Reef-safe ingredients that protect marine life while protecting your skin."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      comment: "This sunscreen doesn't leave a white cast and feels amazing on my sensitive skin!"
    },
    {
      name: "Michael R.",
      rating: 5,
      comment: "Perfect for my daily routine - lightweight, non-greasy, and actually works!"
    },
    {
      name: "Emma L.",
      rating: 5,
      comment: "Finally found a sunscreen that my kids will actually wear. No more battles!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Sun className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-900">SunGuard</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-orange-500 transition-colors">Features</a>
              <a href="#ingredients" className="text-gray-700 hover:text-orange-500 transition-colors">Ingredients</a>
              <a href="#reviews" className="text-gray-700 hover:text-orange-500 transition-colors">Reviews</a>
              <a href="#faq" className="text-gray-700 hover:text-orange-500 transition-colors">FAQ</a>
            </nav>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Ultimate Sun
                <span className="text-orange-500"> Protection</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience lightweight, invisible sun protection that nourishes your skin while defending against harmful UV rays. 
                Perfect for all skin types, including sensitive and acne-prone skin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center">
                  Get Started <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                  Learn More
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">SPF 50+</div>
                  <div className="text-sm text-gray-600">Maximum Protection</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">80 min</div>
                  <div className="text-sm text-gray-600">Water Resistant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">Reef Safe</div>
                  <div className="text-sm text-gray-600">Eco-Friendly</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-95 transition-transform duration-300 hover:rotate-0">
                <img 
                  src="https://placehold.co/400x500/fdf6e3/1f2937?text=SunGuard+Sunscreen" 
                  alt="SunGuard Sunscreen Bottle"
                  className="w-full h-auto rounded-2xl transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200 rounded-full opacity-50"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Protection Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our revolutionary formula combines cutting-edge sun protection with skin-nourishing ingredients for the ultimate daily defense.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-orange-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Clean, Conscious Ingredients</h2>
              <p className="text-lg text-gray-600 mb-8">
                We believe in transparency and effectiveness. Our formula is free from harmful chemicals, 
                parabens, and synthetic fragrances that can irritate your skin.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Zinc Oxide (Non-nano): Natural mineral sun protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Hyaluronic Acid: Deep hydration and moisture retention</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Vitamin E: Powerful antioxidant protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Aloe Vera: Soothes and calms sensitive skin</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <img 
                  src="https://placehold.co/400x400/fdf6e3/1f2937?text=Clean+Ingredients" 
                  alt="Natural Ingredients"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied customers who trust SunGuard for their daily sun protection.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-md transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Perfect Sun Protection?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join the SunGuard family today and experience the difference of premium, skin-loving sun defense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors">
              Shop Now - 20% Off
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-full font-bold text-lg transition-colors">
              Get Free Sample
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "Is this sunscreen suitable for sensitive skin?",
                answer: "Absolutely! Our formula is dermatologist-tested and specifically designed for sensitive skin. It's free from common irritants like parabens, synthetic fragrances, and harsh chemicals."
              },
              {
                question: "How often should I reapply?",
                answer: "For optimal protection, reapply every 2 hours when exposed to direct sunlight, and immediately after swimming, sweating heavily, or towel drying."
              },
              {
                question: "Is it really reef-safe?",
                answer: "Yes! We use non-nano zinc oxide as our active ingredient, which is recognized as reef-safe by marine conservation organizations. Our formula contains no oxybenzone or octinoxate."
              },
              {
                question: "Can I use it under makeup?",
                answer: "Definitely! Our lightweight, fast-absorbing formula creates the perfect base for makeup. It won't pill or interfere with your foundation or concealer."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sun className="w-6 h-6 text-orange-500" />
                <span className="text-xl font-bold">SunGuard</span>
              </div>
              <p className="text-gray-400">Premium sun protection for every skin type.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Daily Face SPF 50+</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sport Sunscreen SPF 50+</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kids SPF 50+</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lip Balm SPF 30</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for sun protection tips and exclusive offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none w-full"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-lg transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SunGuard. All rights reserved. Protect your skin, protect our planet.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
