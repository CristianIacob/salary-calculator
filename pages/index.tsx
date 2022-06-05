import type { NextPage } from "next";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import NumberInput from "../components/NumberInput";
import { ChangeEvent, useState } from "react";

interface State {
  hourlyRate: string;
  monthlyRate: string;
  yearlyRate: string;
}

const Home: NextPage = () => {
  const [values, setValues] = useState<State>({
    hourlyRate: "0",
    monthlyRate: "0",
    yearlyRate: "0",
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Salary calculator</title>
        <meta name="description" content="Calculate your salary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", padding: "20px" }}>
            <NumberInput
              prefix="$"
              label="Hourly Rate"
              value={values.hourlyRate}
              name="hourlyRate"
              handleChange={(e: ChangeEvent<HTMLInputElement>) => {
                setValues({
                  ...values,
                  [e.target.name]: e.target.value,
                  monthlyRate: (Number(e.target.value) * 8 * 20).toString(),
                  yearlyRate: (Number(e.target.value) * 8 * 20 * 12).toString(),
                });
              }}
            />
            <NumberInput
              prefix="$"
              label="Monthly Rate"
              value={values.monthlyRate}
              name="monthlyRate"
              handleChange={(e: ChangeEvent<HTMLInputElement>) => {
                setValues({
                  ...values,
                  [e.target.name]: e.target.value,
                  hourlyRate: (Number(e.target.value) / 8 / 20).toString(),
                  yearlyRate: (Number(e.target.value) * 12).toString(),
                });
              }}
            />
            <NumberInput
              prefix="$"
              label="Yearly Rate"
              value={values.yearlyRate}
              name="yearlyRate"
              handleChange={(e: ChangeEvent<HTMLInputElement>) => {
                setValues({
                  ...values,
                  [e.target.name]: e.target.value,
                  hourlyRate: (Number(e.target.value) / 12 / 20 / 8).toString(),
                  monthlyRate: (Number(e.target.value) / 12).toString(),
                });
              }}
            />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Home;
