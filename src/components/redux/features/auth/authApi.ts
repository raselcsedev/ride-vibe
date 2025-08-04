import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
    }),
    signUpCustomer: build.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        data,
      }),
    })
  }),
});

export const {
  useUserLoginMutation,
  useSignUpCustomerMutation
} =authApi 

