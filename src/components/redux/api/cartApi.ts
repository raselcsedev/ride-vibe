import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCart: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/cart/all",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: any) => {
        return {
          data: response,
          meta,
        };
      },
      providesTags: [tagTypes.cart],
    }),
    createCart: build.mutation({
      query: (data) => ({
        url: "/cart/store",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.cart],
    }),
    incrementCart: build.mutation({
      query: (id) => ({
        url: `/cart/increment/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.cart],
    }),
    decrementCart: build.mutation({
      query: (id) => ({
        url: `/cart/decrement/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.cart],
    }),
    deleteCart: build.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.cart],
    }),
  }),
});

export const {
  useGetCartQuery,
  useCreateCartMutation,
  useDeleteCartMutation,
  useIncrementCartMutation,
  useDecrementCartMutation,
} = cartApi;
