import { createApi} from '@reduxjs/toolkit/query/react'
import { tagTypesList } from '../tag-types'
import { axiosBaseQuery } from '@/components/helpers/axios/axiosBaseQuery'



export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl:import.meta.env.VITE_PUBLIC_API_URL}),
  endpoints: () => ({}),
  tagTypes:tagTypesList
})
