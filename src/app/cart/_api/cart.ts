import { deleteData, updateData } from "@/core/http-service/http-service";
import { CartInput } from "@/lib/services";
import { useMutation } from "@tanstack/react-query";

type ClearCart = {
  token: string;
};

const clearCart = ({ token }: ClearCart) =>
  deleteData("/cart/clear/", {
    Authorization: `Token ${token}`,
  } as any);

type ClearCartOptions = {
  onSuccess?: () => void;
};

export const useClearCart = ({ onSuccess }: ClearCartOptions) => {
  const { mutate: clear, isPending } = useMutation({
    mutationFn: clearCart,
    onSuccess: onSuccess,
  });

  return { clear, isPending };
};

type DecreaseQuantity = {
  productToken: string;
  token: string;
};

const decreaseQuantity = ({ productToken, token }: DecreaseQuantity) =>
  deleteData(`/cart/decrease/${productToken}/`, {
    Authorization: `Token ${token}`,
  } as any);

type DecreaseQuantityOptions = {
  onSuccess?: () => void;
};

export const useDecreaseQuantity = ({ onSuccess }: DecreaseQuantityOptions) => {
  const { mutate: decrease, isPending } = useMutation({
    mutationFn: decreaseQuantity,
    onSuccess: onSuccess,
  });

  return { decrease, isPending };
};

type IncreaseQuantity = {
  productToken: string;
  token: string;
};

const increaseQuantity = ({ productToken, token }: IncreaseQuantity) =>
  updateData<CartInput, void>(
    "/cart/update/",
    { product_token: productToken },
    {
      Authorization: `Token ${token}`,
    } as any
  );

type IncreaseQuantityOptions = {
  onSuccess?: () => void;
};

export const useIncreaseQuantity = ({ onSuccess }: IncreaseQuantityOptions) => {
  const { mutate: increase, isPending } = useMutation({
    mutationFn: increaseQuantity,
    onSuccess: onSuccess,
  });

  return { increase, isPending };
};
