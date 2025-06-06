"use client";

import { useRating } from "@/components/rating/api/rating";
import { Rating as RatingComponent } from "@/components/ui/rating";
import { useUser } from "@/providers/user-provider";
import { useToast } from "@/hooks/use-toast";
import { Product, Review } from "@/lib/services";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

interface RatingProps {
  product: Product;
}

export const Rating = ({ product }: RatingProps) => {
  const { token, reviews } = product;
  const { user } = useUser();
  const [cookies] = useCookies(["token"]);
  const { toast } = useToast();
  const [shouldToast, setShouldToast] = useState(false);

  let avgReview =
    reviews && reviews.length > 0
      ? reviews.reduce((acc, review) => acc + review.star, 0) / reviews.length
      : 0;

  const rating = useRating({
    onSuccess: () => {
      setShouldToast(true);
    },
  });

  useEffect(() => {
    if (shouldToast) {
      toast({
        title: "موفق",
        description: "نظر شما با موفقیت ثبت شد.",
      });
      setShouldToast(false);
    }
  }, [shouldToast]);

  const handleStarClick = async (index: number) => {
    if (!token) return;

    if (!user) {
      toast({
        title: "خطا",
        description: "برای ثبت نظر باید وارد حساب کاربری خود شوید.",
        variant: "destructive",
      });

      return;
    }

    const model: Review = {
      product_token: token,
      review: "خالی",
      star: (index + 1) as 1 | 2 | 3 | 4 | 5,
    };

    rating.submit({ model, token: cookies.token });
  };

  return (
    <RatingComponent
      avgReview={avgReview}
      handleStarClick={handleStarClick}
      isPending={rating.isPending}
    />
  );
};
