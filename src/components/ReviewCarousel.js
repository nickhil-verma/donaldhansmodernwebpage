import React, { useRef, useEffect } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
  {
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    text: "Donald Hans delivered excellent web solutions. Super fast and modern!",
  },
  {
    name: "Mark Patel",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
    text: "Very responsive and professional. Highly recommend their IT team.",
  },
  {
    name: "Emily Carter",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    text: "Great experience. They improved our SEO drastically.",
  },
  {
    name: "James Smith",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5,
    text: "Creative and timely. Donald Hans is our go-to IT partner.",
  },
  {
    name: "Sophia Lee",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 4,
    text: "They understand business needs and deliver high quality results.",
  },
];

const ReviewCard = ({ review }) => (
  <div className="min-w-[280px] md:min-w-[300px] bg-white border rounded-xl shadow-md p-4 mr-4 flex-shrink-0">
    <div className="flex items-center mb-3">
      <img
        src={review.image}
        alt={review.name}
        className="w-10 h-10 rounded-full mr-3"
      />
      <div>
        <h4 className="font-semibold text-gray-800 text-sm">{review.name}</h4>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`h-4 w-4 ${
                i < review.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-600 text-sm">“{review.text}”</p>
  </div>
);

const ReviewCarousel = () => {
  const scrollRef = useRef(null);
  const cardWidth = 320; // card width incl. margin
  const totalCards = reviews.length;

  // Duplicate reviews to simulate infinite loop
  const allReviews = [...reviews, ...reviews];

  // Reset scroll to middle on first render
  useEffect(() => {
    const scroll = scrollRef.current;
    if (scroll) {
      scroll.scrollLeft = scroll.scrollWidth / 2;
    }
  }, []);

  // Handle Next/Prev click
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

    // Reset scroll if reaching near end or start
    setTimeout(() => {
      if (scroll.scrollLeft <= cardWidth) {
        scroll.scrollLeft += cardWidth * totalCards;
      } else if (
        scroll.scrollLeft >= maxScroll - visibleWidth - cardWidth
      ) {
        scroll.scrollLeft -= cardWidth * totalCards;
      }
    }, 300); // delay after scroll completes
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
            className="flex h-72 overflow-x-auto no-scrollbar space-x-4 pb-2 scroll-smooth"
          >
            {allReviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={() => handleScroll("left")}
              className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 transition"
            >
              <FaArrowLeft className="text-gray-700" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 transition"
            >
              <FaArrowRight className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
