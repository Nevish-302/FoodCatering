import { useState } from 'react';
import { Star, X } from 'lucide-react';

const reviews = [
  {
    name: 'Priya S.',
    title: 'Event Host',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    text: 'The food was absolutely delicious and the staff was so friendly! Highly recommend for any event.',
  },
  {
    name: 'Rahul M.',
    title: 'Corporate Client',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'Professional service and amazing presentation. Our guests were impressed!',
  },
  {
    name: 'Aisha K.',
    title: 'Bride',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 4,
    text: 'Booking was easy and the team made our wedding stress-free. Thank you!'
  },
  {
    name: 'Sandeep T.',
    title: 'Birthday Host',
    img: 'https://randomuser.me/api/portraits/men/44.jpg',
    rating: 5,
    text: 'Incredible variety and taste. The kids and adults both loved the food!'
  },
  {
    name: 'Meera D.',
    title: 'Event Planner',
    img: 'https://randomuser.me/api/portraits/women/72.jpg',
    rating: 5,
    text: 'Always reliable and creative. My go-to catering partner.'
  },
];

function Review() {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', rating: 5, text: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRating = (r) => setForm({ ...form, rating: r });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setModalOpen(false);
      setForm({ name: '', email: '', rating: 5, text: '' });
      // In real app, add review to list or send to backend
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-24 pb-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white mb-3 tracking-tight">Reviews</h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto font-light">
          What clients and colleagues say about our work.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-[var(--color-highlight)] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl fade-in"
              style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
            >
              <img
                src={review.img}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-[var(--color-primary)] shadow"
              />
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'} transition-colors`}
                    strokeWidth={i < review.rating ? 0 : 1.5}
                    fill={i < review.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{review.name}</h3>
              <div className="text-sm text-gray-400 mb-3">{review.title}</div>
              <p className="text-gray-200 font-light">"{review.text}"</p>
            </div>
          ))}
        </div>
        {/* Write a Review Button */}
        <div className="flex justify-center mt-16">
          <button
            className="px-8 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 shadow"
            onClick={() => setModalOpen(true)}
          >
            Write a Review
          </button>
        </div>
      </div>

      {/* Modal for Write a Review */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm transition-all duration-300" onClick={() => setModalOpen(false)}>
          <form
            className="bg-[var(--color-background)] bg-opacity-90 rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 relative"
            onClick={e => e.stopPropagation()}
            onSubmit={handleSubmit}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              type="button"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Write a Review</h2>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInput}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-white bg-opacity-10 text-white placeholder-gray-400 border border-[var(--color-highlight)] focus:outline-none focus:border-[var(--color-primary)] mb-3"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInput}
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded bg-white bg-opacity-10 text-white placeholder-gray-400 border border-[var(--color-highlight)] focus:outline-none focus:border-[var(--color-primary)] mb-3"
                required
              />
              <textarea
                name="text"
                value={form.text}
                onChange={handleInput}
                placeholder="Your Review"
                rows={3}
                className="w-full px-4 py-2 rounded bg-white bg-opacity-10 text-white placeholder-gray-400 border border-[var(--color-highlight)] focus:outline-none focus:border-[var(--color-primary)] mb-3"
                required
              />
            </div>
            <div className="flex items-center gap-2 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => handleRating(i + 1)}
                  className="focus:outline-none"
                  aria-label={`Rate ${i + 1} star${i === 0 ? '' : 's'}`}
                >
                  <Star
                    className={`w-7 h-7 ${i < form.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'} transition-colors`}
                    strokeWidth={i < form.rating ? 0 : 1.5}
                    fill={i < form.rating ? 'currentColor' : 'none'}
                  />
                </button>
              ))}
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg shadow hover:bg-opacity-90 transition-all duration-300 disabled:opacity-60"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>
      )}
      {/* Fade-in animation style */}
      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeInUp 0.7s cubic-bezier(.4,0,.2,1) forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Review; 