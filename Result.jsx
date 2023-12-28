import React from "react";

export default function Result({data}){

    const {homeValue, downPayment, loanAmount, interestRate, loanTerm} = data

    const totalLoanMonths = loanTerm * 12
    const interestPerMonth = interestRate / 100 / 12

    const monthlyPayment =
        loanAmount * interestPerMonth * 
        (Math.pow(1 + interestPerMonth, totalLoanMonths)) / 
        (Math.pow(1 + interestPerMonth, totalLoanMonths) - 1)

    const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount

    return (
        <h1>Result</h1>
    )
}