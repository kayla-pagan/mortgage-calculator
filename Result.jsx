import React from "react";

export default function Result({data}){

    const {homeValue, downPayment, loanAmount, interestRate, loanTerm} = data

    const totalLoanMonths = loanTerm * 12
    const interestPerMonth = interestRate / 100 / 12

    return (
        <h1>Result</h1>
    )
}