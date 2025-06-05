"use client";

import Review from "@/components/review";
import { Button } from "@/components/ui/button";
import { PublicReview } from "@/lib/services";
import * as React from "react";

interface ProductReviewsProps {
  reviews?: PublicReview[];
}

const ProductReviews = ({ reviews }: ProductReviewsProps) => {
  const [total, setTotal] = React.useState(4);

  return (
    <section dir="rtl">
      <div>
        {reviews ? (
          reviews
            .slice(0, total)
            .map((review, i) => <Review key={i} review={review} />)
        ) : (
          <h3>هیچ نظری برای این محصول وجود ندارد.</h3>
        )}
      </div>

      <div className="flex justify-center mt-4">
        {reviews && reviews.length > total && (
          <Button variant="outline" onClick={() => setTotal(total + 4)}>
            مشاهده بیشتر
          </Button>
        )}
      </div>
    </section>
  );
};

export default ProductReviews;
