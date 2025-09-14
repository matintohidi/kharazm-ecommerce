import { createData } from "@/core/http-service/http-service";
import { TokenResponse, User } from "@/lib/services";
import { useMutation } from "@tanstack/react-query";

const login = (model: User): Promise<TokenResponse> =>
  createData<User, TokenResponse>("/token/", model);

type UserLoginOptions = {
  onSuccess?: (data: TokenResponse) => void;
};

export const useLogin = ({ onSuccess }: UserLoginOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: login,
    onSuccess: onSuccess,
  });

  return { submit, isPending };
};
