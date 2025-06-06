import { readData } from "@/core/http-service/http-service";
import { CartList } from "@/lib/services";
import { useQuery } from "@tanstack/react-query";

type GetCart = {
  token: string;
};

const getCart = ({ token }: GetCart) =>
  readData<CartList[]>("/cart/", {
    Authorization: `Token ${token}`,
  } as any);

type GetCartOptions = {
  token: string;
};

export const useGetCart = ({ token }: GetCartOptions) => {
  const { data, isPending } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart({ token }),
    enabled: !!token,
  });

  return { data, isPending };
};
