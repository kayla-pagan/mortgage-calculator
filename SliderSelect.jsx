import React from "react";
import SliderComponent from "./Common/SliderComponent";

export default function SliderSelect({data, setData}){


    function handleChange(e){
        
        const {name, value} = e.target

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
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
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
                amount={data.interestRate}
                unit='%'
            />
        </React.Fragment>
    )
}