import React from "react";
import classNames from "classnames";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  selectCard: (mssg: string) => void;
  message: string;
};

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  selectCard,
  message,
}) => {
  const handleSelectcard = () => {
    selectCard(message);
  };
  return (
    <div
      className={classNames(
        "rounded-2xl shadow-sm bg-white border border-gray-200",
        className
      )}
      onClick={handleSelectcard}
    >
      {children}
    </div>
  );
};

export default Card;
