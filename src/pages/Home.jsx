import { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react';

const carouselImages = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
  'https://images.pexels.com/photos/10670092/pexels-photo-10670092.jpeg',
  'https://images.pexels.com/photos/12200848/pexels-photo-12200848.jpeg',
  'https://images.pexels.com/photos/28976231/pexels-photo-28976231/free-photo-of-elegant-charcuterie-board-for-events-and-catering.jpeg',
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          {carouselImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                idx === current ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
              }`}
              style={{ zIndex: idx === current ? 1 : 0 }}
            />
          ))}
        </div>
        <div className="relative z-10 container bg-black/50 mx-auto px-4 py-3 text-center">
            <p className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-white  drop-shadow-lg">
            Crafting Culinary Excellence
          </p>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 font-light">
            Experience the art of fine dining and exceptional catering services for your special occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[var(--color-primary)] rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              View Our Work <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[var(--color-primary)]">About Our Service</h2>
              <p className="text-[var(--color-secondary)] text-lg leading-relaxed">
                Founded in 2010, we've been crafting unforgettable culinary experiences for over a decade. Our team of passionate chefs and event planners work tirelessly to bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-[var(--color-highlight)] rounded-full text-[var(--color-accent)] text-sm">
                  Fine Dining
                </div>
                <div className="px-4 py-2 bg-[var(--color-highlight)] rounded-full text-[var(--color-accent)] text-sm">
                  Event Planning
                </div>
                <div className="px-4 py-2 bg-[var(--color-highlight)] rounded-full text-[var(--color-accent)] text-sm">
                  Custom Menus
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--color-primary)] opacity-10 rounded-2xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                alt="Catering Service"
                className="rounded-2xl shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[var(--color-highlight)] bg-opacity-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[var(--color-primary)] text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-[var(--color-background)] bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-accent)] hover:border-[var(--color-primary)] transition-all duration-300">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">Custom Menus</h3>
              <p className="text-[var(--color-accent)]">Tailored culinary experiences designed to match your event's theme and preferences.</p>
            </div>
            <div className="group bg-[var(--color-background)] bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-accent)] hover:border-[var(--color-secondary)] transition-all duration-300">
              <div className="w-16 h-16 bg-[var(--color-secondary)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">Professional Staff</h3>
              <p className="text-[var(--color-accent)]">Experienced and attentive service team ensuring a seamless event experience.</p>
            </div>
            <div className="group bg-[var(--color-background)] bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-accent)] hover:border-[var(--color-highlight)] transition-all duration-300">
              <div className="w-16 h-16 bg-[var(--color-accent)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">Event Planning</h3>
              <p className="text-[var(--color-secondary)]">Comprehensive event coordination to make your special day stress-free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[var(--color-background)]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Get In Touch</h2>
            <p className="text-[var(--color-secondary)]">Let's discuss how we can make your event special.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-[var(--color-highlight)] bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 border border-[var(--color-accent)] text-center">
              <Phone className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[var(--color-secondary)] mb-2">Call Us</h3>
              <p className="text-[var(--color-accent)]">+91 9911555166</p>
            </div>
            <div className="bg-[var(--color-highlight)] bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 border border-[var(--color-accent)] text-center">
              <Mail className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[var(--color-secondary)] mb-2">Email Us</h3>
              <p className="text-[var(--color-accent)]">info@deepak.com</p>
            </div>
            <div className="bg-[var(--color-highlight)] bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 border border-[var(--color-accent)] text-center">
              <div className="flex justify-center gap-4 mb-4">
                <Github className="w-8 h-8 text-[var(--color-primary)]" />
                <Linkedin className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-secondary)] mb-2">Follow Us</h3>
              <p className="text-[var(--color-accent)]">@deepak</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 