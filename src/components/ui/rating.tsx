"use client";

import { Star } from "lucide-react";
import * as React from "react";

interface StarProps {
  avgReview: number;
  handleStarClick: (index: number) => Promise<void>;
}

const Rating = React.forwardRef<HTMLDivElement, StarProps>(
  ({ ...props }, ref) => {
    const { avgReview, handleStarClick } = props;
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    return (
      <div className="flex items-center" ref={ref}>
        {Array.from({ length: 5 }, (_, index) => {
          const starNumber = index + 1;
          const isFullStar = starNumber <= Math.floor(avgReview);
          const isHalfStar =
            starNumber === Math.ceil(avgReview) && avgReview % 1 > 0;

          const isHovered = hoveredIndex !== null && index <= hoveredIndex;

          return (
            <button
              key={index}
              className="relative transition-transform duration-300 hover:scale-120"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={(e) => {
                e.preventDefault();
                handleStarClick(index);
              }}
            >
              <Star
                className={`h-4 w-4 transition-colors duration-400 ${
                  isHovered || (!isHovered && (isFullStar || isHalfStar))
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />

              {(isHovered || (!isHovered && isFullStar)) && (
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 absolute top-0 left-0 transition-opacity duration-400" />
              )}

              {!isHovered && isHalfStar && (
                <Star
                  className="h-4 w-4 text-yellow-400 fill-yellow-400 absolute top-0 left-0 transition-opacity duration-300"
                  style={{
                    clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    );
  }
);

Rating.displayName = "Rating";
export { Rating };
