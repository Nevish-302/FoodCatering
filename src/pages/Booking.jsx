function Booking() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero Section */}
      <div className="relative bg-[var(--color-primary)] text-white py-20 mb-12">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">Book Your Event</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-6">
            Reserve your date and let us make your event unforgettable.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-16 flex justify-center">
        <form className="bg-[var(--color-highlight)] rounded-2xl shadow-lg p-8 w-full max-w-lg border border-[var(--color-accent)] flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 text-center">Booking Form</h2>
          <div>
            <label className="block mb-1 font-semibold text-[var(--color-secondary)]">Date</label>
            <input type="date" className="w-full border rounded px-3 py-2 bg-[var(--color-background)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200" required />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-[var(--color-secondary)]">Time</label>
            <input type="time" className="w-full border rounded px-3 py-2 bg-[var(--color-background)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200" required />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-[var(--color-secondary)]">Number of Guests</label>
            <input type="number" min="1" className="w-full border rounded px-3 py-2 bg-[var(--color-background)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200" required />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-[var(--color-secondary)]">Additional Notes</label>
            <textarea className="w-full border rounded px-3 py-2 bg-[var(--color-background)] focus:bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200" rows="3" placeholder="Let us know any special requests..."></textarea>
          </div>
          <button type="submit" className="bg-[var(--color-secondary)] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary)] transition-all duration-200 shadow-lg hover:shadow-xl">Submit Booking</button>
        </form>
      </div>
    </div>
  );
}

export default Booking; 