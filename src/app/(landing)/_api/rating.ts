import { createData } from "@/core/http-service/http-service";
import { Review } from "@/lib/services";
import { useMutation } from "@tanstack/react-query";

type ReviewCreate = { model: Review; token: string };

const rating = ({ model, token }: ReviewCreate): Promise<Review> =>
  createData<Review, Review>("/review/", model, {
    Authorization: `Token ${token}`,
  } as any);

type RatingOptions = {
  onSuccess?: () => void;
};

export const useRating = ({ onSuccess }: RatingOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: rating,
    onSuccess: onSuccess,
  });

  return { submit, isPending };
};
