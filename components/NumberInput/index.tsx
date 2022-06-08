import { ChangeEventHandler, forwardRef } from "react";
import NumberFormat from "react-number-format";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumberFormatCustom = forwardRef<NumberFormat<any>, CustomProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
      />
    );
  }
);

interface NumberInput {
  label: string;
  name: string;
  value: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  prefix: string;
  disabled?: boolean;
}

export default function NumberInput(props: NumberInput) {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <TextField
        label={props.label}
        value={props.value}
        onChange={props.handleChange}
        name={props.name}
        disabled={props.disabled}
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom as any,
          startAdornment: (
            <InputAdornment position="start">{props.prefix}</InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Box>
  );
}
