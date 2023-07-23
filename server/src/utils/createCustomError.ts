import { CustomError } from "../interfaces/CustomError";

const createCustomError = (
  errorMessage: string,
  errorCode: number
): CustomError => {
  const error: CustomError = new Error(errorMessage);
  error.code = errorCode;
  return error;
};

export { createCustomError };
