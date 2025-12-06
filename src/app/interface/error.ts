export type TErrorSources = {
  path: string | number | PropertyKey;
  message: string;
}[];

export type TGenericErrorResponse = {
  message: string;
  statusCode: number;
  errorSources: TErrorSources;
};
