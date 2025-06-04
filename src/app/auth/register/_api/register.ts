import { createData } from "@/core/http-service/http-service";
import { User } from "@/lib/services";
import { useMutation } from "@tanstack/react-query";

const register = (model: User): Promise<User> =>
  createData<User, User>("/register", model);

type UserRegisterOptions = {
  onSuccess?: (data: User) => void;
};

export const useRegister = ({ onSuccess }: UserRegisterOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: register,
    onSuccess: onSuccess,
  });

  return { submit, isPending };
};
