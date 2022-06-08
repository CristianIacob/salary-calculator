import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import RateCalculator from "../components/RateCalculator";
import TaxCalculator from "../components/TaxCalculator";
import RaiseCalculator from "../components/RaiseCalculator";

import styles from "../styles/Home.module.css";

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
            <Box sx={{ bgcolor: "white", padding: "20px", display: "flex" }}>
              <RateCalculator values={values} setValues={setValues} />
              <TaxCalculator
                hourlyRate={values.hourlyRate}
                monthlyRate={values.monthlyRate}
                yearlyRate={values.yearlyRate}
              />
            </Box>
            <Box sx={{ bgcolor: "white", padding: "20px", display: "flex" }}>
              <RaiseCalculator />
            </Box>
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Home;
