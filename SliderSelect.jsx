import React from "react";
import SliderComponent from "./Common/SliderComponent";

export default function SliderSelect(){
    return (
        <React.Fragment>
            <SliderComponent 
                min={1000} 
                max={10000} 
                defaultValue={2000} 
                step={100}
                onChange={(e, value) => console.log(value)}
            />
            <SliderComponent min={100} max={200} defaultValue={150}/>
            <SliderComponent min={0} max={10} defaultValue={3}/>
        </React.Fragment>
    )
}