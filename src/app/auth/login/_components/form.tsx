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
import { useCookies } from "react-cookie";
import { useUser } from "@/providers/user-provider";
import { useLogin } from "@/app/auth/login/_api/login";
import { User } from "@/lib/services";

const formSchema = z.object({
  username: z.string().min(1, "نام کاربری نمی‌تواند خالی باشد"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

export const LoginForm = () => {
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

  const login = useLogin({
    onSuccess: (data) => {
      const { username, email, first_name, last_name, token } = data;
      setCookie("token", token);

      setUser({
        username,
        email,
        first_name,
        last_name,
      });

      toast({
        description: "شما با موفقیت وارد حساب کاربری خود شدید.",
      });

      // router.push("/account");
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const model: User = {
      password: values.password,
      username: values.username,
    };

    login.submit(model);
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
                نام کاربری
              </FormLabel>
              <FormControl>
                <Input
                  id="username"
                  type="username"
                  required
                  className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition"
                  placeholder="نام کاربری خود را وارد کنید"
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
          disabled={login.isPending}
        >
          {login.isPending ? "در حال ورود..." : "ورود"}
        </Button>
      </form>
    </Form>
  );
};
