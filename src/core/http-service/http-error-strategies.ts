import {
  ApiError,
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnauthorizedError,
  UnHandledException,
  ValidationError,
} from "@/types/http-errors.interface";

export type ApiErrorHandler = (errorData: ApiError) => void;

export const badRequestErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "درخواست شما نامعتبر است. لطفا اطلاعات را بررسی کنید.",
  } as BadRequestError;
};

export const validationErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "خطا در اعتبارسنجی داده‌ها. لطفا اطلاعات را بررسی کنید.",
  } as ValidationError;
};

export const notFoundErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "سرویس مورد نظر یافت نشد",
  } as NotFoundError;
};

export const unHandledExceptionStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "خطای داخلی سرور. لطفا بعدا تلاش کنید",
  } as UnHandledException;
};

export const unauthorizedErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    detail: "دسترسی به این سرویس امکان‌پذیر نیست",
  } as UnauthorizedError;
};

export const networkErrorStrategy = () => {
  throw {
    detail: "خطای شبکه. لطفا اتصال اینترنت خود را بررسی کنید",
  } as NetworkError;
};

export const errorHandler: Record<number, ApiErrorHandler> = {
  400: (errorData) =>
    (errorData.errors ? validationErrorStrategy : badRequestErrorStrategy)(
      errorData
    ),
  403: unauthorizedErrorStrategy,
  404: notFoundErrorStrategy,
  500: unHandledExceptionStrategy,
};
