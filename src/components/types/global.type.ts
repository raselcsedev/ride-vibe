import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TRole = "user" | 'admin'
export type TUser = {
    email: string;
    role: TRole;
    iat: number;
    exp: number;
}

type ErrSource = {
    path?: string;
    message: string;
}

export type TError = {
    status?: number;
    data: {
        success?: boolean;
        message?: string;
        stack?: null;
        errorSource?: ErrSource[];
    }
}

export type TMeta = {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
}

export type TResponse<T> = {
    data?: T;
    error?: TError;
    meta: TMeta;
    success: boolean;
    message: string;
}



export type TResponseRedux<T> = TResponse<T> & BaseQueryApi
