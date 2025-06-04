import { createData } from "@/core/http-service/http-service";
import { User } from "@/lib/services";
import { useMutation } from "@tanstack/react-query";

const login = (model: User): Promise<User> =>
  createData<User, User>("/token/", model);

type UserLoginOptions = {
  onSuccess?: (data: User) => void;
};

export const useLogin = ({ onSuccess }: UserLoginOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: login,
    onSuccess: onSuccess,
  });

  return { submit, isPending };
};
