import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import invest from "../../assets/invest.png";
import invest2 from "../../assets/invest2.png";
import gpu from "../../assets/gpu.png";
import gpu2 from "../../assets/gpu2.png";
import insight from "../../assets/insight.png";
import insight2 from "../../assets/insight2.png";
import model from "../../assets/model.png";
import model2 from "../../assets/model2.png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Card from "../shared/Card";

type Product = {
  icon: string;
  title: string;
  desc: string;
  image: string;
};

type ArrowProps = {
  onClick?: () => void;
};

const Products: React.FC = () => {
  const productImages: Product[] = [
    {
      icon: invest,
      title: "Investing LLM Modal",
      desc:
        "The LLM model is designed to be a sophisticated investment assistant specifically tailored for investment strategies based on their risk tolerance, goals, and market conditions.",
      image: invest2,
    },
    {
      icon: gpu,
      title: "De-GPUs",
      desc:
        "AI Finders decentralized GPU network reduces costs by 80% compared to legacy providers. Without the expense of data centers or corporate overhead, it offers greater efficiency and resilience",
      image: gpu2,
    },
    {
      icon: insight,
      title: "AI Insight Generator",
      desc:
        "Generate custom reports, aggregate comprehensive data, provide in-depth analysis with real-time updates, and suggest similar projects for investment optimization.",
      image: insight2,
    },
    {
      icon: model,
      title: "AL Model Builder",
      desc:
        "Create personalized investment models with tailored data points, test them on historical data, and integrate automation tools for data collection, analysis, and trade execution, including risk management.",
      image: model2,
    },
  ];

  const CustomPrevArrow: React.FC<ArrowProps> = (props) => (
    <button
      {...props}
      className="absolute left-10 z-10 p-2 text-2xl bg-white bg-opacity-20 border border-gray-400 text-white rounded-lg bottom-4 -translate-y-1/2"
    >
      <FaArrowLeftLong />
    </button>
  );

  const CustomNextArrow: React.FC<ArrowProps> = (props) => (
    <button
      {...props}
      className="absolute left-24 z-10 p-2 text-2xl bg-white bg-opacity-20 border border-gray-400 text-white rounded-lg bottom-4 -translate-y-1/2"
    >
      <FaArrowRightLong />
    </button>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    fade: true, // Added fade effect
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="w-full text-white py-12" id="Products">
      <div className="flex flex-col w-full items-center gap-12 px-6 lg:px-20">
        <h2 className="text-4xl font-extrabold tracking-wide text-white">
          OUR PRODUCTS
        </h2>
        <Card className="min-h-[500px] flex justify-content-center items-center">
          <Slider {...settings} className="w-full max-w-6xl">
            {productImages.map((data, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-8 rounded-xl  shadow-2xl "
              >
                <div className="w-full flex flex-wrap  items-center">
                  <div className="md:w-1/2 w-full flex flex-col justify-center h-[300px]  ps-2">
                    <div className="flex items-center gap-3">
                      <img src={data.icon} alt="" className="w-12 h-12" />
                      <div className="text-2xl text-gradient">{data.title}</div>
                    </div>
                    <div className="text-gradient mt-2">{data.desc}</div>
                  </div>
                  <div className="md:w-1/2 w-full h-[300px]  ps-2">
                    <img
                      src={data.image}
                      alt=""
                      className="w-full rounded-md h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Card>
      </div>
    </div>
  );
};

export default Products;
