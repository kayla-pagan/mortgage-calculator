import React from "react";
import SliderComponent from "./Common/SliderComponent";

export default function SliderSelect({data, setData}){
    return (
        <React.Fragment>
            <SliderComponent 
                label="Home Value"
                min={50000} 
                max={500000} 
                defaultValue={data.homeValue} 
                value={data.homeValue}
                step={10000}
                onChange={(e, value) => {
                    setData(prevData => ({
                        ...prevData,
                        homeValue: value
                    }))
                }}
                amount={data.homeValue}
                unit='$'
            />
            <SliderComponent 
                label="Down Payment"
                min={0} 
                max={100000} 
                defaultValue={data.downPayment} 
                value={data.downPayment}
                step={5000}
                onChange={(e, value) => {
                    setData(prevData => ({
                        ...prevData,
                        downPayment: value
                    }))
                }}
                amount={data.downPayment}
                unit='$'
            />
            <SliderComponent 
                label="Loan Amount"
                min={50000} 
                max={500000} 
                defaultValue={data.loanAmount} 
                value={data.loanAmount}
                step={10000}
                onChange={(e, value) => {
                    setData(prevData => ({
                        ...prevData,
                        loanAmount: value
                    }))
                }}
                amount={data.loanAmount}
                unit='$'
            />

            <SliderComponent
                label="Interest Rate" 
                min={2} 
                max={18} 
                defaultValue={data.interestRate} 
                value={data.interestRate}
                step={0.5}
                onChange={(e, value) => {
                    setData(prevData => ({
                        ...prevData,
                        interestRate: value
                    }))
                }}
                amount={data.interestRate}
                unit='%'
            />
        </React.Fragment>
    )
}