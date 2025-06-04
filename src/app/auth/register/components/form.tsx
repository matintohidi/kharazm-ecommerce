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
import { useUser } from "@/components/user-provider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRegister } from "@/app/auth/register/_api/register";
import { User } from "@/lib/services";

const formSchema = z.object({
  username: z.string().min(1, "نام کاربری نمی‌تواند خالی باشد"),
  email: z.string().email("ایمیل نامعتبر است"),
  first_name: z.string().min(1, "نام نمی‌تواند خالی باشد"),
  last_name: z.string().min(1, "نام خانوادگی نمی‌تواند خالی باشد"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
});

export const RegisterForm = () => {
  const { setUser } = useUser();

  const [_, setCookie] = useCookies();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
    },
  });

  const register = useRegister({
    onSuccess: (data) => {
      const { username, email, first_name, last_name, token } = data;

      setCookie("token", token);

      setUser({
        email,
        username,
        first_name,
        last_name,
      });

      toast({
        description:
          "حساب کاربری شما با موفقیت ایجاد شد. به حساب کاربری خود خوش آمدید!",
      });

      router.push("/account");
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data: User = {
      username: values.username,
      email: values.email,
      first_name: values.first_name,
      last_name: values.last_name,
      password: values.password,
    };

    register.submit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel
                  htmlFor="username"
                  className="text-slate-800 text-sm"
                >
                  نام کاربری
                </FormLabel>
                <FormControl>
                  <Input
                    id="username"
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
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel htmlFor="email" className="text-slate-800 text-sm">
                  ایمیل
                </FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    required
                    className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition"
                    placeholder="ایمیل خود را وارد کنید"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel
                  htmlFor="first_name"
                  className="text-slate-800 text-sm"
                >
                  نام
                </FormLabel>
                <FormControl>
                  <Input
                    id="first_name"
                    required
                    className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition"
                    placeholder="نام خود را وارد کنید"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel
                  htmlFor="last_name"
                  className="text-slate-800 text-sm"
                >
                  نام خانوادگی
                </FormLabel>
                <FormControl>
                  <Input
                    id="last_name"
                    required
                    className="h-11 border-gray-200 focus:border-primary focus:ring-primary/20 transition"
                    placeholder="نام خانوادگی خود را وارد کنید"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel htmlFor="password" className="text-slate-800 text-sm">
                رمز عبور
              </FormLabel>
              <FormControl>
                <Input
                  id="password"
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
        <div className="flex items-center space-x-2 space-x-reverse pt-2 gap-1">
          <Checkbox id="terms" required />
          <Label
            htmlFor="terms"
            className="text-xs text-slate-800 flex items-center gap-0.5"
          >
            با
            <Link href="/terms" className="text-primary hover:underline">
              قوانین و مقررات
            </Link>
            موافقم
          </Label>
        </div>
        <Button
          type="submit"
          className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
          disabled={register.isPending}
        >
          {register.isPending ? "در حال ثبت‌نام..." : "ثبت‌نام"}
        </Button>
      </form>
    </Form>
  );
};
