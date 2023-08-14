//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.19.0.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming
import * as Types from '../api-client';
import { useQuery, useMutation } from '@tanstack/react-query';
import type { UseQueryResult, QueryFunctionContext, UseQueryOptions, QueryClient, QueryKey, MutationKey, UseMutationOptions, UseMutationResult, QueryMeta, MutationMeta } from '@tanstack/react-query';
import { trimArrayEnd, isParameterObject, getBaseUrl, addMetaToOptions  } from './helpers';
import type { QueryMetaContextValue } from 'react-query-swagger';
import { QueryMetaContext } from 'react-query-swagger';
import { useContext } from 'react';
import * as Client from './BotControllerClient'
export { Client };

export type BotByIdBotControllerQueryParameters = {
  id: string;
};

    
export function botUrl(): string {
  let url_ = getBaseUrl() + "/api/user/real-estate/bot";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let botDefaultOptions: UseQueryOptions<void, unknown, void> = {
  queryFn: __bot,
};
export function getBotDefaultOptions(): UseQueryOptions<void, unknown, void> {
  return botDefaultOptions;
};
export function setBotDefaultOptions(options: UseQueryOptions<void, unknown, void>) {
  botDefaultOptions = options;
}

export function botQueryKey(): QueryKey;
export function botQueryKey(...params: any[]): QueryKey {
  return trimArrayEnd([
      'BotControllerClient',
      'bot',
    ]);
}
function __bot() {
  return Client.bot(
    );
}

export function useBotQuery<TSelectData = void, TError = unknown>(options?: UseQueryOptions<void, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useBotQuery<TSelectData = void, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<void, TError, TSelectData> | undefined = undefined;
  

  options = params[0] as any;

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<void, TError, TSelectData>({
    queryFn: __bot,
    queryKey: botQueryKey(),
    ...botDefaultOptions as unknown as UseQueryOptions<void, TError, TSelectData>,
    ...options,
  });
}

export function setBotData(queryClient: QueryClient, updater: (data: void | undefined) => void, ) {
  queryClient.setQueryData(botQueryKey(),
    updater
  );
}

export function setBotDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: void | undefined) => void) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function createUrl(): string {
  let url_ = getBaseUrl() + "/api/user/real-estate/bot";
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function createMutationKey(): MutationKey {
  return trimArrayEnd([
      'BotControllerClient',
      'create',
    ]);
}

export function useCreateMutation<TContext>(options?: Omit<UseMutationOptions<void, unknown, void, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, void, TContext> {
  const key = createMutationKey();
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation(() => Client.create(), {...options, mutationKey: key});
}
  
    
export function botByIdUrl(id: string): string {
  let url_ = getBaseUrl() + "/api/user/real-estate/bot/{id}";
if (id === undefined || id === null)
  throw new Error("The parameter 'id' must be defined.");
url_ = url_.replace("{id}", encodeURIComponent("" + id));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

let botByIdDefaultOptions: UseQueryOptions<void, unknown, void> = {
  queryFn: __botById,
};
export function getBotByIdDefaultOptions(): UseQueryOptions<void, unknown, void> {
  return botByIdDefaultOptions;
};
export function setBotByIdDefaultOptions(options: UseQueryOptions<void, unknown, void>) {
  botByIdDefaultOptions = options;
}

export function botByIdQueryKey(id: string): QueryKey;
export function botByIdQueryKey(...params: any[]): QueryKey {
  if (params.length === 1 && isParameterObject(params[0])) {
    const { id,  } = params[0] as BotByIdBotControllerQueryParameters;

    return trimArrayEnd([
        'BotControllerClient',
        'botById',
        id as any,
      ]);
  } else {
    return trimArrayEnd([
        'BotControllerClient',
        'botById',
        ...params
      ]);
  }
}
function __botById(context: QueryFunctionContext) {
  return Client.botById(
      context.queryKey[2] as string    );
}

export function useBotByIdQuery<TSelectData = void, TError = unknown>(dto: BotByIdBotControllerQueryParameters, options?: UseQueryOptions<void, TError, TSelectData>): UseQueryResult<TSelectData, TError>;

export function useBotByIdQuery<TSelectData = void, TError = unknown>(id: string, options?: UseQueryOptions<void, TError, TSelectData>): UseQueryResult<TSelectData, TError>;
export function useBotByIdQuery<TSelectData = void, TError = unknown>(...params: any []): UseQueryResult<TSelectData, TError> {
  let options: UseQueryOptions<void, TError, TSelectData> | undefined = undefined;
  let id: any = undefined;
  
  if (params.length > 0) {
    if (isParameterObject(params[0])) {
      ({ id,  } = params[0] as BotByIdBotControllerQueryParameters);
      options = params[1];
    } else {
      [id, options] = params;
    }
  }

  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);

  return useQuery<void, TError, TSelectData>({
    queryFn: __botById,
    queryKey: botByIdQueryKey(id),
    ...botByIdDefaultOptions as unknown as UseQueryOptions<void, TError, TSelectData>,
    ...options,
  });
}

export function setBotByIdData(queryClient: QueryClient, updater: (data: void | undefined) => void, id: string) {
  queryClient.setQueryData(botByIdQueryKey(id),
    updater
  );
}

export function setBotByIdDataByQueryId(queryClient: QueryClient, queryKey: QueryKey, updater: (data: void | undefined) => void) {
  queryClient.setQueryData(queryKey, updater);
}
    
    
export function deleteUrl(id: string): string {
  let url_ = getBaseUrl() + "/api/user/real-estate/bot/{id}";
if (id === undefined || id === null)
  throw new Error("The parameter 'id' must be defined.");
url_ = url_.replace("{id}", encodeURIComponent("" + id));
  url_ = url_.replace(/[?&]$/, "");
  return url_;
}

export function deleteMutationKey(id: string): MutationKey {
  return trimArrayEnd([
      'BotControllerClient',
      'delete',
      id as any,
    ]);
}

export function useDeleteMutation<TContext>(id: string, options?: Omit<UseMutationOptions<void, unknown, void, TContext>, 'mutationKey' | 'mutationFn'>): UseMutationResult<void, unknown, void, TContext> {
  const key = deleteMutationKey(id);
  
  const metaContext = useContext(QueryMetaContext);
  options = addMetaToOptions(options, metaContext);
  
      return useMutation(() => Client.delete_(id), {...options, mutationKey: key});
}