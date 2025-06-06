/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface PublicCategory {
  /**
   * Name
   * @minLength 1
   * @maxLength 100
   */
  name: string;
}

export interface PublicUser {
  /**
   * Username
   * @minLength 1
   * @maxLength 100
   */
  username?: string;
  /**
   * First name
   * @minLength 1
   * @maxLength 100
   */
  first_name?: string;
  /**
   * Last name
   * @minLength 1
   * @maxLength 100
   */
  last_name?: string;
  /**
   * Email
   * @minLength 1
   * @maxLength 100
   */
  email?: string;
}

export interface PublicReview {
  user: PublicUser;
  /**
   * Review
   * @minLength 1
   * @maxLength 100
   */
  review: string;
  /** Star */
  star: number;
}

export interface Product {
  /**
   * Token
   * @maxLength 10
   */
  token?: string | null;
  /**
   * Name
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * Price
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  price: number;
  /**
   * Discount
   * @min 0
   * @max 100
   */
  discount?: number;
  /** Sale price */
  sale_price?: number;
  /**
   * In stock
   * @min 0
   * @max 9223372036854776000
   */
  in_stock: number;
  category: PublicCategory;
  /** Description */
  description?: string | null;
  /**
   * Image
   * @format uri
   */
  image?: string | null;
  /** Extra details */
  extra_details?: string | null;
  reviews?: PublicReview[];
}

export interface CartList {
  product?: Product;
  /**
   * Quantity
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  quantity?: number;
}

export interface CartCreate {
  /**
   * Product token
   * @minLength 1
   * @maxLength 100
   */
  product_token: string;
  /**
   * Quantity
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  quantity?: number;
}

export interface CartInput {
  /**
   * Product token
   * @minLength 1
   */
  product_token: string;
}

export interface Category {
  /**
   * Name
   * @minLength 1
   * @maxLength 50
   */
  name: string;
}

export interface Order {
  user?: PublicUser;
  /**
   * Address
   * @minLength 1
   */
  address: string;
  /**
   * Number
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  number: number;
  /**
   * City
   * @minLength 1
   */
  city: string;
  /** Price */
  price?: number;
  /**
   * Status
   * @minLength 1
   * @maxLength 50
   */
  status?: string;
  /**
   * Postal code
   * @min -9223372036854776000
   * @max 9223372036854776000
   */
  postal_code?: number | null;
  /** Cart */
  cart?: string;
  /**
   * Date
   * @format date-time
   */
  date?: string;
}

export interface PublicToken {
  /**
   * Key
   * @minLength 1
   */
  key?: string;
}

export interface User {
  token?: PublicToken;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Password
   * @minLength 1
   */
  password: string;
  /**
   * First name
   * @maxLength 150
   */
  first_name?: string;
  /**
   * Last name
   * @maxLength 150
   */
  last_name?: string;
}

export interface Review {
  /**
   * Review
   * @minLength 1
   */
  review: string;
  /** Star */
  star: 1 | 2 | 3 | 4 | 5;
  /**
   * Product token
   * @minLength 1
   * @maxLength 100
   */
  product_token: string;
}

export interface AuthToken {
  /**
   * Username
   * @minLength 1
   */
  username: string;
  /**
   * Password
   * @minLength 1
   */
  password: string;
  /**
   * Token
   * @minLength 1
   */
  token?: string;
}

export interface TokenResponse {
  /**
   * Token
   * @minLength 1
   */
  token?: string;
  user?: PublicUser;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://127.0.0.1:8000";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title OnlineShop API
 * @version v1
 * @baseUrl http://127.0.0.1:8000
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  authMe = {
    /**
     * No description
     *
     * @tags auth_me
     * @name AuthMeList
     * @request GET:/auth_me/
     * @secure
     */
    authMeList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth_me/`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  cart = {
    /**
     * No description
     *
     * @tags cart
     * @name CartList
     * @request GET:/cart/
     * @secure
     */
    cartList: (params: RequestParams = {}) =>
      this.request<CartList[], any>({
        path: `/cart/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags cart
     * @name CartAddCreate
     * @request POST:/cart/add/
     * @secure
     */
    cartAddCreate: (data: CartCreate, params: RequestParams = {}) =>
      this.request<CartCreate, any>({
        path: `/cart/add/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags cart
     * @name CartClearDelete
     * @request DELETE:/cart/clear/
     * @secure
     */
    cartClearDelete: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/cart/clear/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cart
     * @name CartDecreaseDelete
     * @request DELETE:/cart/decrease/
     * @secure
     */
    cartDecreaseDelete: (data: CartInput, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/cart/decrease/`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cart
     * @name CartUpdatePartialUpdate
     * @request PATCH:/cart/update/
     * @secure
     */
    cartUpdatePartialUpdate: (data: CartInput, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/cart/update/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  categories = {
    /**
     * No description
     *
     * @tags categories
     * @name CategoriesList
     * @request GET:/categories/
     * @secure
     */
    categoriesList: (params: RequestParams = {}) =>
      this.request<Category[], any>({
        path: `/categories/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags categories
     * @name CategoriesRead
     * @request GET:/categories/{category}/
     * @secure
     */
    categoriesRead: (category: string, params: RequestParams = {}) =>
      this.request<Product[], any>({
        path: `/categories/${category}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  login = {
    /**
     * No description
     *
     * @tags login
     * @name LoginCreate
     * @request POST:/login/
     * @secure
     */
    loginCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/login/`,
        method: "POST",
        secure: true,
        ...params,
      }),
  };
  logout = {
    /**
     * No description
     *
     * @tags logout
     * @name LogoutList
     * @request GET:/logout/
     * @secure
     */
    logoutList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/logout/`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  order = {
    /**
     * No description
     *
     * @tags order
     * @name OrderList
     * @request GET:/order/
     * @secure
     */
    orderList: (params: RequestParams = {}) =>
      this.request<Order[], any>({
        path: `/order/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order
     * @name OrderCreate
     * @request POST:/order/
     * @secure
     */
    orderCreate: (data: Order, params: RequestParams = {}) =>
      this.request<Order, any>({
        path: `/order/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  products = {
    /**
     * No description
     *
     * @tags products
     * @name ProductsList
     * @request GET:/products/
     * @secure
     */
    productsList: (params: RequestParams = {}) =>
      this.request<Product[], any>({
        path: `/products/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductsRead
     * @request GET:/products/{token}/
     * @secure
     */
    productsRead: (token: string, params: RequestParams = {}) =>
      this.request<Product, any>({
        path: `/products/${token}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  register = {
    /**
     * No description
     *
     * @tags register
     * @name RegisterCreate
     * @request POST:/register/
     * @secure
     */
    registerCreate: (data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/register/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  review = {
    /**
     * No description
     *
     * @tags review
     * @name ReviewCreate
     * @request POST:/review/
     * @secure
     */
    reviewCreate: (data: Review, params: RequestParams = {}) =>
      this.request<Review, any>({
        path: `/review/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  search = {
    /**
     * No description
     *
     * @tags search
     * @name SearchList
     * @request GET:/search/
     * @secure
     */
    searchList: (params: RequestParams = {}) =>
      this.request<Product[], any>({
        path: `/search/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  token = {
    /**
     * No description
     *
     * @tags token
     * @name TokenCreate
     * @request POST:/token/
     * @secure
     */
    tokenCreate: (data: AuthToken, params: RequestParams = {}) =>
      this.request<TokenResponse, any>({
        path: `/token/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
