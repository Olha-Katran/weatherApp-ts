import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from "./routes";
import {MessageType, setBannerData} from "./banner";

const mainBaseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
});

const mainQuery: BaseQueryFn<string | FetchArgs,
    unknown,
    FetchBaseQueryError> = async (args, api, extraOptions) => {
    const result = await mainBaseQuery(args, api, extraOptions);

    if(!navigator.onLine) {
        api.dispatch(
            setBannerData({type: MessageType.error, message: 'Network os offline' }),
        );
        return result;
    }

    if (result.error && result.error.status === 403) {
        api.dispatch(
            setBannerData({type: MessageType.error, message: 'Access forbidden' }),
        );
        return result;
    }

    if (result.error && result.error.status === 404) {
        api.dispatch(
            setBannerData({type: MessageType.error, message: 'Server Error'}),
        );
        return result;
    }

    if(result.error && result.error.status !== 403) {
        if(result.error && result.error.status === 409) {
            api.dispatch(
                setBannerData({
                    type: MessageType.error,
                    message: 'Internal server conflict error',
                }),
            );
            return result;
        }
        api.dispatch(
            setBannerData({
                type: MessageType.error,
                message: 'Server Error'
            }),
        );
        return result;
    }
    return result;
};

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: mainQuery,
    tagTypes: [],
    endpoints: () => ({}),
});
