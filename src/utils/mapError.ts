type Props = {
  meta: {
    touched: boolean | null;
    error: string | null;
  };
  helperText: string;
  input: any;
};

export const mapError = ({
  meta = { touched: null, error: null },
  input,
  helperText,
  ...props
}: Props) => {
  const isError = !!(meta.touched && meta.error);

  const errorProps = {
    ...props,
    ...input,
    error: isError,
    helperText: isError ? meta.error : helperText,
  };
  const defaultProps = { ...{ helperText, ...props }, ...input };

  return isError ? errorProps : defaultProps;
};
