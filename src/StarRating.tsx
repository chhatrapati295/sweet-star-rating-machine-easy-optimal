import { useState } from "react";

const StarRating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleStarClick = (id: number) => {
    setRating(id);
  };
  const handleMouseEnter = (id: number) => {
    setHoverRating(id);
  };
  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold">StarRating</h1>
      <ul className="flex gap-2"  onMouseLeave={handleMouseLeave}>
        {new Array(maxRating)?.fill(0)?.map((_, index) => {
          return (
            <li
              onClick={() => handleStarClick(index+1)}
              onMouseEnter={() => handleMouseEnter(index+1)}
              key={index}
              className={`text-5xl cursor-pointer ${
                index + 1 <= (hoverRating || rating)
                  ? "text-orange-400"
                  : "text-gray-300"
              }`}
            >
              ★
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StarRating;
