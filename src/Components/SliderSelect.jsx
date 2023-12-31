import React from "react";
import SliderComponent from "./Common/SliderComponent";

export default function SliderSelect({data, setData}){


    function handleChange(e){
        
        const {name, value} = e.target

        if(name === "homeValue"){
            setData(prevData => ({
                ...prevData,
                downPayment: value * 0.05,
                loanAmount: value * 0.95,
                homeValue: value,
            }))
        } else if (name === "downPayment"){
            setData(prevData => ({
                ...prevData,
                loanAmount: data.homeValue - value,
                downPayment: value,
            }))
        } else if(name === "loanAmount"){
            setData(prevData => ({
                ...prevData,
                downPayment: data.homeValue - value,
                loanAmount: value,
            }))
        } else if(name === "interestRate"){
            setData(prevData => ({
                ...prevData,
                interestRate: value
            }))
        }
    }

    return (
        <React.Fragment>
            <SliderComponent 
                label="Home Value"
                name="homeValue"
                min={50000} 
                max={500000} 
                defaultValue={data.homeValue} 
                value={data.homeValue}
                step={10000}
                onChange={handleChange}
                amount={data.homeValue}
                unit='$'
            />
            <SliderComponent 
                label="Down Payment"
                name="downPayment"
                min={0} 
                max={data.homeValue} 
                defaultValue={data.downPayment} 
                value={data.downPayment}
                step={5000}
                onChange={handleChange}
                amount={data.downPayment}
                unit='$'
            />
            <SliderComponent 
                label="Loan Amount"
                name="loanAmount"
                min={50000} 
                max={data.homeValue} 
                defaultValue={data.loanAmount} 
                value={data.loanAmount}
                step={10000}
                onChange={handleChange}
                amount={data.loanAmount}
                unit='$'
            />

            <SliderComponent
                label="Interest Rate"
                name="interestRate" 
                min={2} 
                max={18} 
                defaultValue={data.interestRate} 
                value={data.interestRate}
                step={0.5}
                onChange={handleChange}
                amount={data.interestRate}
                unit='%'
            />
        </React.Fragment>
    )
}