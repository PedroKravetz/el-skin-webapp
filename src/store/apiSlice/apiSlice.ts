import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_CONFIG } from "../../config/APIConfig";
import { Carrousel, Produto } from "../../types/types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Produto[], void>({
      query: () => API_CONFIG.ENDPOINTS.PRODUCTS,
    }),
    getProductById: builder.query<Produto, string>({
      query: (id) => `${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}`,
    }),
    getCarouselItems: builder.query<Carrousel[], void>({
      query: () => API_CONFIG.ENDPOINTS.CAROUSEL,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCarouselItemsQuery,
  useGetProductByIdQuery,
} = apiSlice;
