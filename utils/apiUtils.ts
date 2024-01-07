import axios, { AxiosResponse } from "axios";

interface ApiCallOptions {
  url: string;
  headers?: Record<string, any>;
  queryParams?: Record<string, any>;
  body?: Record<string, any>;
}

export const makeApiGetCall = async ({
  url,
  headers = {},
  queryParams = {},
}: ApiCallOptions): Promise<AxiosResponse> => {
  const response = await axios.get(url, {
    headers,
    params: queryParams,
  });
  return response;
};

export const makeApiPostCall = async ({
  url,
  headers = {},
  queryParams = {},
  body = {},
}: ApiCallOptions): Promise<AxiosResponse> => {
  const response = await axios.post(url, body, {
    headers,
    params: queryParams,
  });
  return response;
};

export const makeApiPutCall = async ({
  url,
  headers = {},
  queryParams = {},
  body = {},
}: ApiCallOptions): Promise<AxiosResponse> => {
  const response = await axios.put(url, body, {
    headers,
    params: queryParams,
  });
  return response;
};

export const makeApiPatchCall = async ({
  url,
  headers = {},
  queryParams = {},
  body = {},
}: ApiCallOptions): Promise<AxiosResponse> => {
  const response = await axios.patch(url, body, {
    headers,
    params: queryParams,
  });
  return response;
};

// export const getError = (error: any) =>
//   error?.meta?.displayMessage ||
//   error?.meta?.message ||
//   error?.response?.data?.meta?.displayMessage ||
//   error?.response?.data?.meta?.message ||
//   error?.displayMessage ||
//   error?.message;
