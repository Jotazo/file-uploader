import { OptionsObject, VariantType } from "notistack";

const initialOptions: OptionsObject = {
  anchorOrigin: { horizontal: "center", vertical: "bottom" },
  autoHideDuration: 2000,
};

const getSnackbarOptions = (snackbarOptions?: OptionsObject) => {
  return {
    ...initialOptions,
    ...snackbarOptions,
  };
};

export const getSnackbarOptionsVariant = (variant: VariantType) => {
  return getSnackbarOptions({ variant });
};

export default getSnackbarOptions;
