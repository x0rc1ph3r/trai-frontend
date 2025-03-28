import React from "react";
import arrow from "../../assets/arrow.png";
import arrow2 from "../../assets/arrow2.png";

const Roadmap: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto" id="Roadmap">
      <div className="flex flex-col gap-6 px-10 lg:px-20">
        <div className="text-white text-4xl my-12 text-center">ROADMAP</div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 lg:gap-8">
          <div className="lg:col-span-3 col-span-1 bg-gradient-to-b from-gray-900 to-[#212136] rounded-[30px] p-6 max-w-lg shadow-lg border-opacity-25 backdrop-blur-xl bg-white/5 border h-full border-gray-300">
            <h2 className="text-[#9C88FF] text-4xl font-semibold mb-4">
              Q1 - 2023 → Q1 - 2024
            </h2>
            <ul className="text-white text-lg font-semibold">
              <li>- Market Analysis</li>
              <li>- User Experience Research</li>
              <li>- AI Finder feasibility analysis</li>
            </ul>
          </div>
          <div className="lg:flex justify-center hidden items-center">
            <img src={arrow2} alt="Arrow" />
          </div>
          <div className="col-span-1 lg:row-start-3 bg-gradient-to-b from-gray-900 to-[#212136] rounded-xl p-6 max-w-lg shadow-lg border-opacity-25 backdrop-blur-xl bg-white/5 border h-full border-gray-300">
            <h2 className="text-[#9C88FF] text-4xl font-semibold mb-4">Q2 - 2024</h2>
            <ul className="text-white text-lg font-semibold">
              <li>- Release of Docs and Website</li>
              <li>- Release Documentations and Whitepaper</li>
              <li>- Build and grow community</li>
            </ul>
          </div>
          <div className="row-start-3 hidden lg:flex justify-center items-center">
            <img src={arrow} className="scale-x-[-1]" alt="Arrow" />
          </div>
          <div className="col-span-1 lg:row-start-3 bg-gradient-to-b from-gray-900 to-[#212136] rounded-xl p-6 max-w-lg shadow-lg border-opacity-25 backdrop-blur-xl bg-white/5 border h-full border-gray-300">
            <h2 className="text-[#9C88FF] text-4xl font-semibold mb-4">Q3 - 2024</h2>
            <ul className="text-white text-lg font-semibold">
              <li>- Build Key Partnerships</li>
              <li>- Release AI Finder Testnet and blockchain explorer</li>
              <li>- Expand GPU Network</li>
            </ul>
          </div>
          <div className="lg:flex justify-center row-start-4 col-start-3 hidden items-center">
            <img src={arrow2} alt="Arrow" />
          </div>
          <div className="col-span-1 lg:row-start-5 bg-gradient-to-b from-gray-900 to-[#212136] rounded-xl p-6 max-w-lg shadow-lg border-opacity-25 backdrop-blur-xl bg-white/5 border h-full border-gray-300">
            <h2 className="text-[#9C88FF] text-4xl font-semibold mb-4">Q1 - 2025</h2>
            <ul className="text-white text-lg font-semibold">
              <li>- Commence Sale of Licenses</li>
              <li>- AI Insight Generators</li>
              <li>- GPU Performance Enhancement</li>
            </ul>
          </div>
          <div className="row-start-5 hidden lg:flex justify-center items-center">
            <img src={arrow} className="scale-x-[1]" alt="Arrow" />
          </div>
          <div className="col-span-1 lg:row-start-5 bg-gradient-to-b from-gray-900 to-[#212136] rounded-xl p-6 max-w-lg shadow-lg border-opacity-25 backdrop-blur-xl bg-white/5 border h-full border-gray-300">
            <h2 className="text-[#9C88FF] text-4xl font-semibold mb-4">Q4 - 2024</h2>
            <ul className="text-white text-lg font-semibold">
              <li>- Commence Sale of Licenses</li>
              <li>- Unified GPU Platform</li>
              <li>- Beta Testing</li>
              <li>- Release Investing LLM Model</li>
            </ul>
          </div>
          <div className="lg:flex justify-center row-start-6 hidden items-center">
            <img src={arrow2} alt="Arrow" />
          </div>
          <div className="col-span-1 lg:row-start-7 bg-gradient-to-b from-gray-900 to-[#212136] rounded-xl p-6 max-w-lg shadow-lg border-opacity-25 backdrop-blur-xl bg-white/5 border h-full border-gray-300">
            <h2 className="text-[#9C88FF] text-4xl font-semibold mb-4">Q2 - 2025</h2>
            <ul className="text-white text-lg font-semibold">
              <li>- AI Model Integration</li>
              <li>- Public Sale</li>
            </ul>
          </div>
          <div className="row-start-7 hidden lg:flex justify-center items-center">
            <img src={arrow} className="scale-x-[-1]" alt="Arrow" />
          </div>
          <div className="col-span-1 lg:row-start-7 bg-gradient-to-b from-gray-900 to-[#212136] rounded-xl p-6 max-w-lg shadow-lg border-opacity-25 backdrop-blur-xl bg-white/5 border h-full border-gray-300">
            <h2 className="text-[#9C88FF] text-4xl font-semibold mb-4">Q3+4 - 2025</h2>
            <ul className="text-white text-lg font-semibold">
              <li>- Listing Token $FIAI to CEX</li>
              <li>- Full Operational Capability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;