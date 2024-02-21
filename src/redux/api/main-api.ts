import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users',
        }),
    }),
});

export const { useGetUsersQuery } = api;
export default api;