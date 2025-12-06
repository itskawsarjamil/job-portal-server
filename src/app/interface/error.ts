export type TErrorSources = {
  path: string | number;
  message: string;
}[];

export type TGenericErrorMessage = {
  message: string;
  statusCode: number;
  errorSources: TErrorSources;
};
