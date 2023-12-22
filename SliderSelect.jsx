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