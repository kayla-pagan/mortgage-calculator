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
    step,
    name
}){
    return (
        <Stack my={1.4}>
            <Stack gap={1}>
                <Typography variant='subtitle2'>{label}</Typography>
                <Typography variant='h5'>{unit}{amount}</Typography>
            </Stack>
            <Slider
                name={name}  
                min={min} 
                max={max}
                defaultValue={defaultValue}
                value={value}
                step={step}
                onChange={onChange}
                aria-label='Default'
                valueLabelDisplay='auto'
                marks  
            />
            <Stack direction='row' justifyContent='space-between'>
                <Typography variant='caption' color='text.secondary'>{unit} {min}</Typography>
                <Typography variant='caption' color='text.secondary'>{unit} {max}</Typography>
            </Stack>
        </Stack>
    )
}