import React, { useState } from "react";

interface Product {
  icon: string;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    icon: "📈",
    title: "Investing LLM Model",
    description:
      "The LLM model is designed to be a sophisticated investment assistant specifically tailored for investment strategies based on their risk tolerance, goals, and market conditions.",
  },
  {
    icon: "🤖",
    title: "Trading Bot",
    description:
      "Advanced trading bot that helps you automate your trading strategies with real-time market analysis and execution.",
  },
  // Add more products as needed
];

const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="w-full min-h-screen bg-[#0B0F19] flex items-center justify-center px-4">
      <div className="max-w-7xl w-full mx-auto">
        <h1 className="text-white text-5xl font-bold text-center mb-20">
          OUR PRODUCTS
        </h1>

        <div className="relative flex items-center justify-between gap-8">
          {/* Product Info Section */}
          <div className="w-1/2">
            <div
              className={`transition-opacity duration-300 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1A2234] rounded-full flex items-center justify-center text-3xl">
                  {products[currentIndex].icon}
                </div>
                <h2 className="text-[#00A3FF] text-3xl font-semibold">
                  {products[currentIndex].title}
                </h2>
              </div>
              <p className="text-[#7B89A8] text-xl leading-relaxed">
                {products[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2 absolute bottom-0 left-0">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-[#1A2234] rounded-lg flex items-center justify-center hover:bg-[#2A3244] transition-colors"
              aria-label="Previous product"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-[#1A2234] rounded-lg flex items-center justify-center hover:bg-[#2A3244] transition-colors"
              aria-label="Next product"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Image/Screenshot Section */}
          <div className="w-1/2">
            <div
              className={`transition-opacity duration-300 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <img
                src="/path-to-your-product-image.png"
                alt={products[currentIndex].title}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
