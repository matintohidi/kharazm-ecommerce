import { readData } from "@/core/http-service/http-service";
import { User } from "@/lib/services";
import { useQuery } from "@tanstack/react-query";

type AuthMe = {
  token: string;
};

const authMe = ({ token }: AuthMe) =>
  readData<User>("/auth_me", {
    Authorization: `Token ${token}`,
  } as any);

type AuthMeOption = {
  token: string;
};

export const useAuthMe = ({ token }: AuthMeOption) => {
  const { data, isPending } = useQuery({
    queryKey: ["auth_me"],
    queryFn: () => authMe({ token }),
    enabled: !!token,
  });

  return { data, isPending };
};
