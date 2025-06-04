"use client";

import { Rating as RatingComponent } from "@/components/ui/rating";
import { useUser } from "@/components/user-provider";
import { useToast } from "@/hooks/use-toast";
import { Api } from "@/lib/api";
import { Product } from "@/lib/services";
import { useCookies } from "react-cookie";

interface RatingProps {
  product: Product;
}

export const Rating = ({ product }: RatingProps) => {
  const { token, reviews } = product;
  const { user } = useUser();
  const [cookies] = useCookies(["token"]);
  const { toast } = useToast();

  const avgReview =
    reviews && reviews.length > 0
      ? reviews.reduce((acc, review) => acc + review.star, 0) / reviews.length
      : 0;

  const handleStarClick = async (index: number) => {
    if (!token) return;

    // if (!user) {
    //   toast({
    //     title: "خطا",
    //     description: "برای ثبت نظر باید وارد حساب کاربری خود شوید.",
    //     variant: "destructive",
    //   });
    // }

    try {
      const res = await Api.review.reviewCreate(
        {
          product_token: token,
          review: "خالی",
          star: (index + 1) as 1 | 2 | 3 | 4 | 5,
        },
        {
          headers: {
            Authorization: `Token ${cookies.token}`,
          },
        }
      );

      toast({
        title: "موفق",
        description: "نظر شما با موفقیت ثبت شد.",
      });
    } catch (err) {
      if (
        err &&
        typeof err === "object" &&
        "status" in err &&
        err.status === 401
      ) {
        toast({
          title: "خطا",
          description: "برای ثبت نظر باید وارد حساب کاربری خود شوید.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <RatingComponent avgReview={avgReview} handleStarClick={handleStarClick} />
  );
};
