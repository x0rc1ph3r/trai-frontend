import Card from "../shared/Card";
import sysImg from "../../assets/aitrans.png";

const System = () => {
  return (
    <>
      {/* Section Title */}
     

      {/* Image Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full px-6 py-10">
        <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-teal-500 shadow-glow">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-teal-500 opacity-20 blur-2xl animate-pulse"></div>

          {/* Image */}
          <img
            src={sysImg}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            alt="System Operation"
          />
        </div>
      </div>

      {/* Optional: Add Cards or Descriptions Below */}
     
    </>
  );
};

export default System;