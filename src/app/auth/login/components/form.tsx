"use client";

import * as React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Api } from "@/lib/api";
import { useCookies } from "react-cookie";
import { useUser } from "@/components/user-provider";

const formSchema = z.object({
  username: z.string().min(6),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

export const LoginForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { setUser } = useUser();

  const [_, setCookie] = useCookies();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const res = await Api.token.tokenCreate({
        username: values.username,
        password: values.password,
      });

      setCookie("token", res.data.token);

      setUser({
        username: "matintohidi",
        email: "matin@gmail.com",
      });

      toast({
        title: "ورود موفقیت‌آمیز",
        description: "شما با موفقیت وارد حساب کاربری خود شدید.",
      });

      router.push("/account");
    } catch (err: unknown) {
      if (
        err &&
        typeof err === "object" &&
        "status" in err &&
        err.status === 401
      ) {
        toast({
          title: "خطا در ورود",
          description: "ایمیل یا رمز عبور اشتباه است.",
          variant: "destructive",
        });
      }

      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="username" className="text-slate-800 text-sm">
                ایمیل
              </FormLabel>
              <FormControl>
                <Input
                  id="username"
                  type="username"
                  required
                  className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition"
                  placeholder="example@username.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel
                  htmlFor="password"
                  className="text-slate-800 text-sm"
                >
                  رمز عبور
                </FormLabel>
                <Link
                  href="/auth/forgot-password"
                  className="text-xs text-primary hover:underline"
                >
                  فراموشی رمز عبور
                </Link>
              </div>
              <FormControl>
                <Input
                  id="password"
                  type="password"
                  required
                  className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition"
                  placeholder="رمز عبور خود را وارد کنید"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "در حال ورود..." : "ورود"}
        </Button>
      </form>
    </Form>
  );
};
