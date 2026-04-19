import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { Case, CreateCaseBody, DashboardSummary, ErrorResponse, GenerateLetterBody, HealthStatus, Letter, ListCasesParams, UpdateCaseBody, UploadUrlRequest, UploadUrlResponse } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * Returns server health status
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all tenant cases
 */
export declare const getListCasesUrl: (params?: ListCasesParams) => string;
export declare const listCases: (params?: ListCasesParams, options?: RequestInit) => Promise<Case[]>;
export declare const getListCasesQueryKey: (params?: ListCasesParams) => readonly ["/api/cases", ...ListCasesParams[]];
export declare const getListCasesQueryOptions: <TData = Awaited<ReturnType<typeof listCases>>, TError = ErrorType<unknown>>(params?: ListCasesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCases>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listCases>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListCasesQueryResult = NonNullable<Awaited<ReturnType<typeof listCases>>>;
export type ListCasesQueryError = ErrorType<unknown>;
/**
 * @summary List all tenant cases
 */
export declare function useListCases<TData = Awaited<ReturnType<typeof listCases>>, TError = ErrorType<unknown>>(params?: ListCasesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCases>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new tenant case
 */
export declare const getCreateCaseUrl: () => string;
export declare const createCase: (createCaseBody: CreateCaseBody, options?: RequestInit) => Promise<Case>;
export declare const getCreateCaseMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createCase>>, TError, {
        data: BodyType<CreateCaseBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createCase>>, TError, {
    data: BodyType<CreateCaseBody>;
}, TContext>;
export type CreateCaseMutationResult = NonNullable<Awaited<ReturnType<typeof createCase>>>;
export type CreateCaseMutationBody = BodyType<CreateCaseBody>;
export type CreateCaseMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Create a new tenant case
 */
export declare const useCreateCase: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createCase>>, TError, {
        data: BodyType<CreateCaseBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createCase>>, TError, {
    data: BodyType<CreateCaseBody>;
}, TContext>;
/**
 * @summary Get recently updated cases
 */
export declare const getGetRecentCasesUrl: () => string;
export declare const getRecentCases: (options?: RequestInit) => Promise<Case[]>;
export declare const getGetRecentCasesQueryKey: () => readonly ["/api/cases/recent"];
export declare const getGetRecentCasesQueryOptions: <TData = Awaited<ReturnType<typeof getRecentCases>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRecentCases>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getRecentCases>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetRecentCasesQueryResult = NonNullable<Awaited<ReturnType<typeof getRecentCases>>>;
export type GetRecentCasesQueryError = ErrorType<unknown>;
/**
 * @summary Get recently updated cases
 */
export declare function useGetRecentCases<TData = Awaited<ReturnType<typeof getRecentCases>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getRecentCases>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get a specific case
 */
export declare const getGetCaseUrl: (id: number) => string;
export declare const getCase: (id: number, options?: RequestInit) => Promise<Case>;
export declare const getGetCaseQueryKey: (id: number) => readonly [`/api/cases/${number}`];
export declare const getGetCaseQueryOptions: <TData = Awaited<ReturnType<typeof getCase>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCase>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getCase>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetCaseQueryResult = NonNullable<Awaited<ReturnType<typeof getCase>>>;
export type GetCaseQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a specific case
 */
export declare function useGetCase<TData = Awaited<ReturnType<typeof getCase>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getCase>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update a case
 */
export declare const getUpdateCaseUrl: (id: number) => string;
export declare const updateCase: (id: number, updateCaseBody: UpdateCaseBody, options?: RequestInit) => Promise<Case>;
export declare const getUpdateCaseMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateCase>>, TError, {
        id: number;
        data: BodyType<UpdateCaseBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateCase>>, TError, {
    id: number;
    data: BodyType<UpdateCaseBody>;
}, TContext>;
export type UpdateCaseMutationResult = NonNullable<Awaited<ReturnType<typeof updateCase>>>;
export type UpdateCaseMutationBody = BodyType<UpdateCaseBody>;
export type UpdateCaseMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Update a case
 */
export declare const useUpdateCase: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateCase>>, TError, {
        id: number;
        data: BodyType<UpdateCaseBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateCase>>, TError, {
    id: number;
    data: BodyType<UpdateCaseBody>;
}, TContext>;
/**
 * @summary Delete a case
 */
export declare const getDeleteCaseUrl: (id: number) => string;
export declare const deleteCase: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteCaseMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteCase>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteCase>>, TError, {
    id: number;
}, TContext>;
export type DeleteCaseMutationResult = NonNullable<Awaited<ReturnType<typeof deleteCase>>>;
export type DeleteCaseMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Delete a case
 */
export declare const useDeleteCase: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteCase>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteCase>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary List letters for a specific case
 */
export declare const getListLettersByCaseUrl: (id: number) => string;
export declare const listLettersByCase: (id: number, options?: RequestInit) => Promise<Letter[]>;
export declare const getListLettersByCaseQueryKey: (id: number) => readonly [`/api/cases/${number}/letters`];
export declare const getListLettersByCaseQueryOptions: <TData = Awaited<ReturnType<typeof listLettersByCase>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listLettersByCase>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listLettersByCase>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListLettersByCaseQueryResult = NonNullable<Awaited<ReturnType<typeof listLettersByCase>>>;
export type ListLettersByCaseQueryError = ErrorType<unknown>;
/**
 * @summary List letters for a specific case
 */
export declare function useListLettersByCase<TData = Awaited<ReturnType<typeof listLettersByCase>>, TError = ErrorType<unknown>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listLettersByCase>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Generate a demand letter for a case
 */
export declare const getGenerateLetterUrl: (id: number) => string;
export declare const generateLetter: (id: number, generateLetterBody: GenerateLetterBody, options?: RequestInit) => Promise<Letter>;
export declare const getGenerateLetterMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateLetter>>, TError, {
        id: number;
        data: BodyType<GenerateLetterBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof generateLetter>>, TError, {
    id: number;
    data: BodyType<GenerateLetterBody>;
}, TContext>;
export type GenerateLetterMutationResult = NonNullable<Awaited<ReturnType<typeof generateLetter>>>;
export type GenerateLetterMutationBody = BodyType<GenerateLetterBody>;
export type GenerateLetterMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Generate a demand letter for a case
 */
export declare const useGenerateLetter: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateLetter>>, TError, {
        id: number;
        data: BodyType<GenerateLetterBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof generateLetter>>, TError, {
    id: number;
    data: BodyType<GenerateLetterBody>;
}, TContext>;
/**
 * @summary List all generated letters
 */
export declare const getListLettersUrl: () => string;
export declare const listLetters: (options?: RequestInit) => Promise<Letter[]>;
export declare const getListLettersQueryKey: () => readonly ["/api/letters"];
export declare const getListLettersQueryOptions: <TData = Awaited<ReturnType<typeof listLetters>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listLetters>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listLetters>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListLettersQueryResult = NonNullable<Awaited<ReturnType<typeof listLetters>>>;
export type ListLettersQueryError = ErrorType<unknown>;
/**
 * @summary List all generated letters
 */
export declare function useListLetters<TData = Awaited<ReturnType<typeof listLetters>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listLetters>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get a specific letter
 */
export declare const getGetLetterUrl: (id: number) => string;
export declare const getLetter: (id: number, options?: RequestInit) => Promise<Letter>;
export declare const getGetLetterQueryKey: (id: number) => readonly [`/api/letters/${number}`];
export declare const getGetLetterQueryOptions: <TData = Awaited<ReturnType<typeof getLetter>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLetter>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getLetter>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetLetterQueryResult = NonNullable<Awaited<ReturnType<typeof getLetter>>>;
export type GetLetterQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a specific letter
 */
export declare function useGetLetter<TData = Awaited<ReturnType<typeof getLetter>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLetter>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Delete a letter
 */
export declare const getDeleteLetterUrl: (id: number) => string;
export declare const deleteLetter: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteLetterMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteLetter>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteLetter>>, TError, {
    id: number;
}, TContext>;
export type DeleteLetterMutationResult = NonNullable<Awaited<ReturnType<typeof deleteLetter>>>;
export type DeleteLetterMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Delete a letter
 */
export declare const useDeleteLetter: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteLetter>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteLetter>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Get dashboard summary statistics
 */
export declare const getGetDashboardSummaryUrl: () => string;
export declare const getDashboardSummary: (options?: RequestInit) => Promise<DashboardSummary>;
export declare const getGetDashboardSummaryQueryKey: () => readonly ["/api/dashboard/summary"];
export declare const getGetDashboardSummaryQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardSummaryQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardSummary>>>;
export type GetDashboardSummaryQueryError = ErrorType<unknown>;
/**
 * @summary Get dashboard summary statistics
 */
export declare function useGetDashboardSummary<TData = Awaited<ReturnType<typeof getDashboardSummary>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardSummary>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Request a presigned URL for file upload
 */
export declare const getRequestUploadUrlUrl: () => string;
export declare const requestUploadUrl: (uploadUrlRequest: UploadUrlRequest, options?: RequestInit) => Promise<UploadUrlResponse>;
export declare const getRequestUploadUrlMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
        data: BodyType<UploadUrlRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
    data: BodyType<UploadUrlRequest>;
}, TContext>;
export type RequestUploadUrlMutationResult = NonNullable<Awaited<ReturnType<typeof requestUploadUrl>>>;
export type RequestUploadUrlMutationBody = BodyType<UploadUrlRequest>;
export type RequestUploadUrlMutationError = ErrorType<void>;
/**
 * @summary Request a presigned URL for file upload
 */
export declare const useRequestUploadUrl: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
        data: BodyType<UploadUrlRequest>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof requestUploadUrl>>, TError, {
    data: BodyType<UploadUrlRequest>;
}, TContext>;
/**
 * @summary Serve an object entity
 */
export declare const getGetStorageObjectUrl: (objectPath: string) => string;
export declare const getStorageObject: (objectPath: string, options?: RequestInit) => Promise<Blob>;
export declare const getGetStorageObjectQueryKey: (objectPath: string) => readonly [`/api/storage/objects/${string}`];
export declare const getGetStorageObjectQueryOptions: <TData = Awaited<ReturnType<typeof getStorageObject>>, TError = ErrorType<void>>(objectPath: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStorageObjectQueryResult = NonNullable<Awaited<ReturnType<typeof getStorageObject>>>;
export type GetStorageObjectQueryError = ErrorType<void>;
/**
 * @summary Serve an object entity
 */
export declare function useGetStorageObject<TData = Awaited<ReturnType<typeof getStorageObject>>, TError = ErrorType<void>>(objectPath: string, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStorageObject>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map