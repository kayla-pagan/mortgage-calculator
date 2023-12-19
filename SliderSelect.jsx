import React from "react";
import SliderComponent from "./Common/SliderComponent";

export default function SliderSelect({data, setData}){
    return (
        <React.Fragment>
            <SliderComponent 
                min={50000} 
                max={500000} 
                defaultValue={data.homeValue} 
                step={10000}
                onChange={(e, value) => console.log(value)}
                label="Home Value"
                amount={200000}
                unit='$'
            />
            <SliderComponent 
                min={0} 
                max={50000} 
                defaultValue={data.downPayment} 
                step={5000}
                onChange={(e, value) => console.log(value)}
                label="Down Payment"
                amount={5000}
                unit='$'
            />
            <SliderComponent 
                min={50000} 
                max={500000} 
                defaultValue={data.loanAmount} 
                step={10000}
                onChange={(e, value) => console.log(value)}
                label="Loan Amount"
                amount={195000}
                unit='$'
            />

            <SliderComponent 
                min={2} 
                max={18} 
                defaultValue={data.interestRate} 
                step={0.5}
                onChange={(e, value) => console.log(value)}
                label="Interest Rate"
                amount={5}
                unit='%'
            />
        </React.Fragment>
    )
}