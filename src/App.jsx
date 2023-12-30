import React from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Navbar from "./Components/Navbar";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";

export default function App(){

  const [data, setData] = React.useState({
    homeValue: 200000,
    downPayment: 5000,
    loanAmount: 195000,
    interestRate: 6.5,
    loanTerm: 30
  })

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{my:4}}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}