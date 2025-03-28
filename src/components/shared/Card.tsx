import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-boxx bg-no-repeat bg-contain md:before:bg-boxRight relative lg:rounded-3xl rounded-2xl py-[30px] max-w-6xl w-full px-6 bg-[rgba(9,9,37,0.1)] backdrop-blur-[20px] shadow-product ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
