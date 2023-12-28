import React from "react";
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function TenureSelect({data, setData}){

    function handleChange(e){

        const {name, value} = e.target

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    console.log(data)

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Loan Term</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.loanTerm}
                label="Loan Term"
                name="loanTerm"
                onChange={handleChange}
            >
                <MenuItem value={10}>10 years</MenuItem>
                <MenuItem value={15}>15 years</MenuItem>
                <MenuItem value={20}>20 years</MenuItem>
                <MenuItem value={25}>25 years</MenuItem>
                <MenuItem value={30}>30 years</MenuItem>
            </Select>
        </FormControl>
    )
}