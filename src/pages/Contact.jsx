import React, { useState } from 'react';
import { MapPin, Building, Mail, Phone, Send, User, Globe } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    website: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero Section */}
      <div className="relative bg-[var(--color-secondary)] text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get in touch with us for all your culinary needs. We're here to serve you the best.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="group bg-[var(--color-highlight)] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-[var(--color-accent)] hover:border-[var(--color-primary)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-primary)] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">OUR OFFICE</h3>
            <p className="text-[var(--color-accent)] leading-relaxed">
              24/5 Shakti Nagar Main Road, Delhi
            </p>
          </div>

          <div className="group bg-[var(--color-highlight)] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-[var(--color-accent)] hover:border-[var(--color-secondary)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-secondary)] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">OUR WORKS</h3>
            <p className="text-[var(--color-accent)] leading-relaxed">
              Street 7, Prahlad Vihar, Sector -25, Rohini, Delhi - 110007
            </p>
          </div>

          <div className="group bg-[var(--color-highlight)] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-[var(--color-accent)] hover:border-[var(--color-highlight)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-accent)] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">EMAIL US</h3>
            <div className="text-[var(--color-secondary)] leading-relaxed">
              <p className="mb-1">info@khomchaa.com</p>
              <p>sales@khomchaa.com</p>
            </div>
          </div>

          <div className="group bg-[var(--color-highlight)] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-[var(--color-accent)] hover:border-[var(--color-highlight)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-highlight)] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">CALL US</h3>
            <div className="text-[var(--color-secondary)] leading-relaxed">
              <p className="mb-1">+91 9911555166</p>
              <p>+91 9810130502</p>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="bg-[var(--color-highlight)] rounded-2xl shadow-lg overflow-hidden border border-[var(--color-accent)]">
            <div className="h-96 lg:h-[500px] relative">
              <iframe
                title="KHOMCHAA Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54447661442!2d76.82493905!3d28.644287449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1623000000000!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--color-highlight)] rounded-2xl shadow-lg p-8 border border-[var(--color-accent)]">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-3">Get In Touch</h2>
              <p className="text-[var(--color-secondary)]">
                Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <label className="block text-sm font-semibold text-[var(--color-secondary)] mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--color-accent)]" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-[var(--color-accent)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 bg-[var(--color-background)] focus:bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-[var(--color-secondary)] mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--color-accent)]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-[var(--color-accent)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 bg-[var(--color-background)] focus:bg-white"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-[var(--color-secondary)] mb-2">
                  Website (Optional)
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--color-accent)]" />
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-[var(--color-accent)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 bg-[var(--color-background)] focus:bg-white"
                    placeholder="Enter your website URL"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-[var(--color-secondary)] mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-[var(--color-accent)] rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 bg-[var(--color-background)] focus:bg-white resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[var(--color-secondary)] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[var(--color-primary)] transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-[var(--color-highlight)] rounded-2xl shadow-lg p-8 border border-[var(--color-accent)]">
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Reach Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[var(--color-secondary)]">Address:</p>
                  <p className="text-[var(--color-background)]">24/5 Shakti Nagar Main Road, Delhi</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Building className="w-5 h-5 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[var(--color-secondary)]">Works:</p>
                  <p className="text-[var(--color-background)]">Street 7, Prahlad Vihar, Sector -25, Rohini, Delhi - 110007</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-highlight)] rounded-2xl shadow-lg p-8 border border-[var(--color-accent)]">
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[var(--color-secondary)]">Phone:</p>
                  <p className="text-[var(--color-background)]">+91 9911555166 / 9810130502</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[var(--color-accent)] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[var(--color-secondary)]">Email:</p>
                  <p className="text-[var(--color-background)]">info@khomchaa.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;