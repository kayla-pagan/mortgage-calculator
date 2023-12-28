import React from "react";
import { Stack, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Result({data}){

    const {loanAmount, interestRate, loanTerm} = data

    const totalLoanMonths = loanTerm * 12
    const interestPerMonth = interestRate / 100 / 12

    const monthlyPayment =
        loanAmount * interestPerMonth * 
        (Math.pow(1 + interestPerMonth, totalLoanMonths)) / 
        (Math.pow(1 + interestPerMonth, totalLoanMonths) - 1)

    const totalInterestGenerated = (monthlyPayment * totalLoanMonths) - loanAmount

    const pieChartData = {
        labels: ['Principle', 'Interest'],
        datasets: [
          {
            data: [loanAmount, totalInterestGenerated.toFixed(2)],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }

    return (
        <Stack gap={3}>
            <Typography textAlign="center" variant="h5">
                Monthly Payment: ${monthlyPayment.toFixed(2)}
            </Typography>
            <Stack direction="row" justifyContent="center">
                <div>
                    <Pie data={pieChartData} />
                </div>
            </Stack>
        </Stack>
    )
}