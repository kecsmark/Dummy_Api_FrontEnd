import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from "react";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


export default function AddEmployees(){
    const classes = useStyles();

    const [name,setName]=useState("");
    const [salary,setSalary]=useState("");
    const [age,setAge]=useState("");

    const handleNameChange=(event)=>{
        setName(event.target.value);
    }

    const handleSalaryChange=(event)=>{
        setSalary(event.target.value);
    }

    const handleAgeChange=(event)=>{
        setAge(event.target.value);
    }

    const handleAddClick=async()=>{
        const newEmploye={
            employee_name:name,
            employee_salary:salary,
            employee_age:age
        };

        const response = await fetch("http://dummy.restapiexample.com/api/v1/create",{
            method: "POST",
            mode:'cors',
            body: JSON.stringify(newEmploye),
        });

    }

    return(
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="Name" label="Name" type="text" onChange={handleNameChange}  />
        <TextField type="number" label="Employee salary" id="Salary" onChange={handleSalaryChange} />
        <TextField id="Age" label="Age" type="number" onChange={handleAgeChange} />
        <Button variant="contained" onClick={handleAddClick} >Create</Button>
      </form>
    );
}