import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { Problems } from "@/types/http-errors.interface";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: unknown) => {
      showToast(error as Problems);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: unknown) => {
      showToast(error as Problems);
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      throwOnError: true,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

const showToast = (problem: Problems) => {
  if (problem?.errors) {
    Object.entries(problem.errors).forEach(([_, values]) =>
      values.forEach((errorMessage) =>
        toast({
          description: errorMessage,
          variant: "destructive",
        })
      )
    );
  } else if (problem?.detail) {
    toast({
      description: problem.detail,
      variant: "destructive",
    });
  }
};
