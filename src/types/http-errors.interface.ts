interface Problems {
  title: string;
  statusCode: number;
  detail?: string;
  errors?: Record<string, string[]>;
}

interface BadRequestError extends Problems {}
interface UnauthorizedError extends Problems {}
interface ValidationError extends Problems {}
interface NotFoundError extends Problems {}
interface UnHandledException extends Problems {}
interface NetworkError extends Problems {}

export type {
  BadRequestError,
  UnauthorizedError,
  ValidationError,
  NotFoundError,
  UnHandledException,
  NetworkError,
};
