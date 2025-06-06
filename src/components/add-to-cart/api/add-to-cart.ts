import { createData } from "@/core/http-service/http-service";
import { CartCreate, CartList } from "@/lib/services";
import { useMutation } from "@tanstack/react-query";

type AddToCart = {
  model: CartCreate;
  token: string;
};

const addToCart = ({ model, token }: AddToCart) =>
  createData<CartCreate, CartList>("/cart/add/", model, {
    Authorization: `Token ${token}`,
  } as any);

type AddToCartOptions = {
  onSuccess?: (data: CartList) => void;
};

export const useAddToCart = ({ onSuccess }: AddToCartOptions) => {
  const { mutate: add, isPending } = useMutation({
    mutationFn: addToCart,
    onSuccess: onSuccess,
  });

  return { add, isPending };
};
