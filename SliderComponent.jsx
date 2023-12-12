import React from 'react';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';

export default function SliderComponent({
    defaultValue,
    min,
    max,
    label,
    unit,
    onChange,
    amount,
    value,
    step
}){
    return (
        <Stack my={1.4}>
            <Slider  
                min={min} 
                max={max}
                defaultValue={defaultValue}
                aria-label='Default'
                valueLabelDisplay='auto'
                marks
                step={step}
                onChange={onChange}
                value={value}
            />
        </Stack>
    )
}