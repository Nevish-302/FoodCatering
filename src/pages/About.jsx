import founderImg from '../assets/founder.jpeg'; // Replace with actual founder image if available

const team = [
  { name: 'Chef Anjali', role: 'Head Chef', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Rohit Sharma', role: 'Sous Chef', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Meera Patel', role: 'Event Manager', img: 'https://randomuser.me/api/portraits/women/46.jpg' },
  { name: 'Amit Singh', role: 'Logistics', img: 'https://randomuser.me/api/portraits/men/47.jpg' },
];

const testimonials = [
  { name: 'Priya S.', text: 'Absolutely wonderful service and delicious food!' },
  { name: 'Rahul M.', text: 'Professional, punctual, and creative. Highly recommended.' },
];

function About() {
  return (
    <div className="min-h-screen bg-white text-body">
      {/* Hero Section */}
      <section className="py-20 text-center fade-in">
        <h1 className="text-5xl font-extrabold mb-4 text-primary">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto text-muted font-light mb-4">
          We are passionate caterers dedicated to making your events memorable with fresh, flavorful food and exceptional service. From intimate gatherings to grand celebrations, we bring warmth and taste to every table.
        </p>
        {/* Optionally add decorative icons or pattern here */}
      </section>
      <hr className="my-8 border border-border" />

      {/* Our Story Section */}
      <section className="py-16 section-bg fade-in">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="flex-shrink-0 mx-auto mb-8 md:mb-0">
            <img src={founderImg} alt="Founder" className="w-40 h-40 object-cover rounded-2xl shadow border border-border" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-primary mb-3">Our Story</h2>
            <p className="text-body text-lg mb-4">
              Founded in 2010, our journey began with a simple love for food and a desire to bring people together. Over the years, we've grown into a team of passionate chefs and event specialists, serving hundreds of happy clients across the city.
            </p>
            <blockquote className="italic text-secondary border-l-4 border-primary pl-4 text-lg">
              "Our passion is bringing people together through good food."
            </blockquote>
          </div>
        </div>
      </section>
      <hr className="my-8 border border-border" />

      {/* Our Values Section */}
      <section className="py-16 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-light rounded-2xl shadow p-8 flex flex-col items-center text-center border border-border hover:shadow-lg transition-all duration-300">
              <span className="text-4xl mb-4" role="img" aria-label="Fresh Ingredients">🥗</span>
              <h3 className="text-xl font-bold text-secondary mb-2">Fresh Ingredients</h3>
              <p className="text-muted">Locally sourced, organic produce.</p>
            </div>
            <div className="bg-light rounded-2xl shadow p-8 flex flex-col items-center text-center border border-border hover:shadow-lg transition-all duration-300">
              <span className="text-4xl mb-4" role="img" aria-label="Experienced Chefs">👨‍🍳</span>
              <h3 className="text-xl font-bold text-primary mb-2">Experienced Chefs</h3>
              <p className="text-muted">Crafting delicious meals with care.</p>
            </div>
            <div className="bg-light rounded-2xl shadow p-8 flex flex-col items-center text-center border border-border hover:shadow-lg transition-all duration-300">
              <span className="text-4xl mb-4" role="img" aria-label="Customizable Menus">🎉</span>
              <h3 className="text-xl font-bold text-accent mb-2">Customizable Menus</h3>
              <p className="text-muted">Tailored for every occasion.</p>
            </div>
            <div className="bg-light rounded-2xl shadow p-8 flex flex-col items-center text-center border border-border hover:shadow-lg transition-all duration-300">
              <span className="text-4xl mb-4" role="img" aria-label="On-Time Delivery">🚚</span>
              <h3 className="text-xl font-bold text-secondary mb-2">On-Time Delivery</h3>
              <p className="text-muted">Punctual service guaranteed.</p>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-8 border border-border" />

      {/* Team Section */}
      <section className="py-16 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-10">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-light rounded-2xl shadow p-6 flex flex-col items-center border border-border hover:shadow-lg transition-all duration-300">
                <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-primary" />
                <h4 className="text-lg font-bold text-body mb-1">{member.name}</h4>
                <div className="text-muted text-sm">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="my-8 border border-border" />

      {/* CTA Section */}
      <section className="py-20 text-center fade-in" style={{ background: 'linear-gradient(90deg, #FFF8F3 0%, #FAFAFA 100%)' }}>
        <h2 className="text-3xl font-bold mb-6 text-body">Let's Cater Your Next Event!</h2>
        <p className="text-lg text-muted mb-8">Contact us today to discuss your event and menu preferences.</p>
        <a href="/contact" className="inline-block px-8 py-4 rounded-full bg-accent text-white font-bold text-lg shadow hover:bg-primary transition-all duration-300">Contact Us</a>
      </section>
      <hr className="my-8 border border-border" />

      {/* Testimonials Preview */}
      <section className="py-16 fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-10">What Our Clients Say</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-light rounded-2xl shadow p-6 flex-1 border border-border text-center hover:shadow-lg transition-all duration-300">
                <p className="text-body text-lg mb-3">"{t.text}"</p>
                <div className="text-muted text-sm font-semibold">- {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .fade-in { opacity: 0; transform: translateY(24px); animation: fadeInUp 0.7s cubic-bezier(.4,0,.2,1) forwards; }
        @keyframes fadeInUp { to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}

export default About; 