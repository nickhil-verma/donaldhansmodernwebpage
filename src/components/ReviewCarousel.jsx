import React, { useRef, useEffect } from "react";

const reviews = [
  {
  name: "Jean-Michel JOYE",
  image: "https://i.postimg.cc/DZhYxqh4/1517681973167.jpg",
  rating: 5,
  text: "Donald Hans delivered exactly what we needed—fast, modern web solutions that truly fit our business goals. His expertise made a noticeable difference from day one.",
},
{
  name: "marshall",
  image: "https://randomuser.me/api/portraits/men/2.jpg",
  rating: 4,
  text: "The team was highly responsive and professional throughout our collaboration. Their technical know-how gave us confidence, and the results speak for themselves.",
},
{
  name: "Julien Beha",
  image: "https://randomuser.me/api/portraits/women/3.jpg",
  rating: 5,
  text: "Thanks to Donald Hans, our SEO rankings improved significantly, driving more traffic and leads than ever before. The process was smooth and transparent all the way through.",
},
{
  name: "Bryan Meyer",
  image: "https://randomuser.me/api/portraits/men/4.jpg",
  rating: 5,
  text: "Donald Hans consistently delivers creative, timely solutions. He’s become an invaluable technology partner we rely on for our key projects.",
},

];

const cardWidth = 280;

const ReviewCard = ({ review }) => (
  <div className="flex-shrink-0 w-[280px] bg-white border rounded-xl shadow-md p-6 mr-6 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <img
        src={review.image}
        alt={review.name}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h4 className="font-semibold text-gray-800 text-base">{review.name}</h4>
        <div className="flex mt-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`h-5 w-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-700 text-sm leading-relaxed">“{review.text}”</p>
  </div>
);

const ReviewCarousel = () => {
  const scrollRef = useRef(null);
  const totalCards = reviews.length;
  const allReviews = [...reviews, ...reviews];

  useEffect(() => {
    const scroll = scrollRef.current;
    if (scroll) {
      scroll.scrollLeft = scroll.scrollWidth / 2;
    }
  }, []);

  const handleScroll = (dir) => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    const maxScroll = scroll.scrollWidth;
    const visibleWidth = scroll.offsetWidth;

    if (dir === "left") {
      scroll.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      scroll.scrollBy({ left: cardWidth, behavior: "smooth" });
    }

    setTimeout(() => {
      if (scroll.scrollLeft <= cardWidth) {
        scroll.scrollLeft += cardWidth * totalCards;
      } else if (scroll.scrollLeft >= maxScroll - visibleWidth - cardWidth) {
        scroll.scrollLeft -= cardWidth * totalCards;
      }
    }, 300);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          What Our Clients Say
        </h2>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex h-auto overflow-x-auto no-scrollbar space-x-6 pb-4 scroll-smooth"
          >
            {allReviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-5">
            <button
              onClick={() => handleScroll("left")}
              className="p-3 bg-white border rounded-full shadow hover:bg-gray-100 transition"
              aria-label="Previous reviews"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-3 bg-white border rounded-full shadow hover:bg-gray-100 transition"
              aria-label="Next reviews"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
