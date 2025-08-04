import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const wishApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getWish: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/wish/all",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: any) => {
        return {
          data: response,
          meta,
        };
      },
      providesTags: [tagTypes.wish],
    }),
    createWish: build.mutation({
      query: (data) => ({
        url: "/wish/store",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.wish],
    }),
    deleteWish: build.mutation({
      query: (id) => ({
        url: `/wish/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.wish],
    }),
  }),
});

export const { useGetWishQuery, useCreateWishMutation, useDeleteWishMutation } =
  wishApi;
