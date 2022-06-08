import React, { ChangeEvent } from "react";
import NumberInput from "../NumberInput";

interface RateCalculatorProps {
  values: {
    hourlyRate: string;
    monthlyRate: string;
    yearlyRate: string;
  };
  setValues: any;
}

export default function RateCalculator(props: RateCalculatorProps) {
  return (
    <div>
      <NumberInput
        prefix="$"
        label="Hourly Rate"
        value={props.values.hourlyRate}
        name="hourlyRate"
        handleChange={(e: ChangeEvent<HTMLInputElement>) => {
          props.setValues({
            ...props.values,
            [e.target.name]: e.target.value,
            monthlyRate: (Number(e.target.value) * 8 * 20).toString(),
            yearlyRate: (Number(e.target.value) * 8 * 20 * 12).toString(),
          });
        }}
      />
      <NumberInput
        prefix="$"
        label="Monthly Rate"
        value={props.values.monthlyRate}
        name="monthlyRate"
        handleChange={(e: ChangeEvent<HTMLInputElement>) => {
          props.setValues({
            ...props.values,
            [e.target.name]: e.target.value,
            hourlyRate: (Number(e.target.value) / 8 / 20).toString(),
            yearlyRate: (Number(e.target.value) * 12).toString(),
          });
        }}
      />
      <NumberInput
        prefix="$"
        label="Yearly Rate"
        value={props.values.yearlyRate}
        name="yearlyRate"
        handleChange={(e: ChangeEvent<HTMLInputElement>) => {
          props.setValues({
            ...props.values,
            [e.target.name]: e.target.value,
            hourlyRate: (Number(e.target.value) / 12 / 20 / 8).toString(),
            monthlyRate: (Number(e.target.value) / 12).toString(),
          });
        }}
      />
    </div>
  );
}
