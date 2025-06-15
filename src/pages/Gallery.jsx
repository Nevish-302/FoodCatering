import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

const images = [
    {
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      title: 'Fine Dining Experience',
      description: 'Elegant table setting for special occasions'
    },
    {
      src: 'https://images.pexels.com/photos/10670092/pexels-photo-10670092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Corporate Events',
      description: 'Professional catering for business gatherings'
    },
    {
      src: 'https://images.pexels.com/photos/12200848/pexels-photo-12200848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Wedding Catering',
      description: 'Romantic and sophisticated wedding feasts'
    },
    {
      src: 'https://images.pexels.com/photos/28976231/pexels-photo-28976231/free-photo-of-elegant-charcuterie-board-for-events-and-catering.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Charcuterie Boards',
      description: 'Artisanal food presentation'
    },
    {
      src: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=80',
      title: 'Outdoor Events',
      description: 'Al fresco dining experiences'
    },
    {
      src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
      title: 'Cocktail Parties',
      description: 'Sophisticated drink and appetizer service'
    },
    {
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      title: 'Restaurant Interior',
      description: 'Modern and inviting atmosphere'
    },
    {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      title: 'Chef\'s Special',
      description: 'Signature dishes prepared with passion'
    },
    {
      src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
      title: 'Gourmet Desserts',
      description: 'Delicious sweets to finish your meal'
    },
    {
      src: 'https://images.unsplash.com/photo-1532634896-26909d0d4b6b?auto=format&fit=crop&w=800&q=80',
      title: 'Seasonal Ingredients',
      description: 'Fresh and locally sourced produce'
    },
    {
      src: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80',
      title: 'Culinary Workshops',
      description: 'Hands-on cooking classes for enthusiasts'
    },
    {
      src: 'https://images.unsplash.com/photo-1612197529930-5e73e3e97b8c?auto=format&fit=crop&w=800&q=80',
      title: 'Private Dining',
      description: 'Exclusive dining experiences for small groups'
    }
  ];
  
function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleImages, setVisibleImages] = useState(6);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (idx) => {
    setCurrentIdx(idx);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const loadMore = () => {
    setVisibleImages((prev) => Math.min(prev + 6, images.length));
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero Section */}
      <div className="relative bg-[var(--color-secondary)] text-white py-20 mb-12">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">Our Gallery</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-6 font-light">
            Explore our culinary journey through carefully curated moments
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 pb-16">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <Loader2 className="w-12 h-12 text-[var(--color-primary)] animate-spin" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.slice(0, visibleImages).map((image, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <button
                    onClick={() => openModal(idx)}
                    className="w-full h-full focus:outline-none"
                    aria-label={`View ${image.title}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-white text-center p-4">
                            <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                            <p className="text-sm opacity-90">{image.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {visibleImages < images.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={loadMore}
                  className="px-8 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Modal/Lightbox */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 transition-all duration-300"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full mx-4" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-[var(--color-primary)] bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-100 transition z-10"
              onClick={closeModal}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative">
              <img
                src={images[currentIdx].src}
                alt={images[currentIdx].title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{images[currentIdx].title}</h3>
                <p className="text-lg opacity-90">{images[currentIdx].description}</p>
              </div>
            </div>

            {/* Navigation */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[var(--color-primary)] bg-opacity-80 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-100 transition z-10"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[var(--color-primary)] bg-opacity-80 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-100 transition z-10"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery; 