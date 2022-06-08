import React, { ChangeEvent, useState } from "react";
import NumberInput from "../NumberInput";

interface State {
  currentSalary: string;
  raisePercentage: string;
  newSalary: string;
}

function RaiseCalculator() {
  const [values, setValues] = useState<State>({
    currentSalary: "0",
    raisePercentage: "0",
    newSalary: "0",
  });

  return (
    <>
      <NumberInput
        label="Current salary"
        value={values.currentSalary}
        name="currentSalary"
        prefix="$"
        handleChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValues({
            ...values,
            [e.target.name]: e.target.value,
            newSalary: (
              Number(e.target.value) * (Number(values.raisePercentage) * 0.01) +
              Number(e.target.value)
            ).toString(),
          });
        }}
      />
      <NumberInput
        label="Percentage increase"
        value={values.raisePercentage}
        name="raisePercentage"
        prefix="%"
        handleChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValues({
            ...values,
            [e.target.name]: e.target.value,
            newSalary: (
              Number(values.currentSalary) * (Number(e.target.value) * 0.01) +
              Number(values.currentSalary)
            ).toString(),
          });
        }}
      />
      <NumberInput
        label="New Salary"
        value={values.newSalary}
        name="newSalary"
        prefix="$"
        disabled
      />
    </>
  );
}

export default RaiseCalculator;
