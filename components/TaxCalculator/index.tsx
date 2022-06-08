import { Box } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import NumberInput from "../NumberInput";

interface TaxRateProps {
  hourlyRate: string;
  monthlyRate: string;
  yearlyRate: string;
}

function calculateTax(value: string, tax: string): string {
  if (tax === "0") {
    return value;
  }

  const taxes = Number(value) * (1 / Number(tax));

  return (Number(value) - taxes).toString();
}

export default function TaxCalculator(props: TaxRateProps) {
  const [tax, setTax] = useState<string>("0");

  return (
    <Box sx={{ display: "flex" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <NumberInput
          prefix="%"
          label="Tax Rate"
          value={tax}
          name="hourlyRate"
          handleChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTax(e.target.value);
          }}
        />
      </div>
      <div>
        <NumberInput
          prefix="$"
          label="Hourly Rate"
          value={calculateTax(props.hourlyRate, tax)}
          name="hourlyRate"
          disabled
        />
        <NumberInput
          prefix="$"
          label="Monthly Rate"
          value={calculateTax(props.monthlyRate, tax)}
          name="monthlyRate"
          disabled
        />
        <NumberInput
          prefix="$"
          label="Yearly Rate"
          value={calculateTax(props.yearlyRate, tax)}
          name="yearlyRate"
          disabled
        />
      </div>
    </Box>
  );
}
