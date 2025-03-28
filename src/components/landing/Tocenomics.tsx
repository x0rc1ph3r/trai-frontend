import React, { useState } from "react";
import tokenImage1 from "../../assets/mining.png"; // Replace with actual images
import tokenImage2 from "../../assets/treasury.png";
import tokenImage3 from "../../assets/sale.png";
import tokenImage4 from "../../assets/seed.png";
import tokenImage5 from "../../assets/contributor.png";
import tokenImage6 from "../../assets/liquidity.png";

// 5eead4
// 2fadd4
// 4383d9
// 840aff
// bd8ffe
// 30daff
interface TokenomicsItem {
  name: string;
  percentage?: string;
  image: string;
  colorName: string;
}

const tokenomicsData: TokenomicsItem[] = [
  {
    name: "Mining",
    percentage: "40%",
    image: tokenImage1,
    colorName: "#5eead4",
  },
  {
    name: "Treasury",
    percentage: "40%",
    image: tokenImage2,
    colorName: "#2fadd4",
  },
  {
    name: "Public Sale",
    percentage: "40%",
    image: tokenImage3,
    colorName: "#4383d9",
  },
  { name: "Seed", percentage: "40%", image: tokenImage4, colorName: "#840aff" },
  {
    name: "Contributor",
    percentage: "40%",
    image: tokenImage5,
    colorName: "#bd8ffe",
  },
  {
    name: "Liquidity",
    percentage: "40%",
    image: tokenImage6,
    colorName: "#30daff",
  },
];

const Tokenomics: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<TokenomicsItem>(
    tokenomicsData[0]
  );

  return (
    <div id="Tokenomics">
      <h2 className="text-center text-white text-3xl font-bold">TOKENOMICS</h2>
      <p className="text-center text-gray-400 mt-2 px-5">
        A total supply of 10,000,000,000 $FAI token will be allocated as below:
      </p>
      <div id="Tocenomics" className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full px-6 py-10 ">
        <div className="bg-boxx bg-no-repeat bg-contain md:before:bg-boxRight relative lg:rounded-3xl rounded-2xl py-[90px] max-w-6xl w-full px-6 bg-[rgba(9,9,37,0.1)] backdrop-blur-[20px] shadow-product">
          <div className="flex flex-col lg:flex-row justify-center items-center mt-6">
            {/* Left Section: Tokenomics List */}
            <div className="w-full lg:w-1/3 z-2 space-y-2">
              {tokenomicsData.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setSelectedItem(item)}
                  className={`cursor-pointer p-2  rounded-lg text-lg md:text-[35px] font-semibold transition-all ${
                    selectedItem.name === item.name
                      ? `text-[${item.colorName}]`
                      : "text-white"
                  }`}
                >
                  {item.name}{" "}
                  {item.percentage && selectedItem.name === item.name && (
                    <span
                      className={`
                      ${
                        selectedItem.name === item.name
                          ? `text-[${item.colorName}]`
                          : "text-white"
                      }`}
                    >
                      {item.percentage}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Right Section: Image Display */}
            <div className="w-full lg:w-1/3 flex justify-center mt-6 lg:mt-0">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="max-w-[400px] w-[95%] transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
