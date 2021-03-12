import {useState} from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


export default function SearchBar(props){
    const classes = useStyles();

    const [id,SetId] = useState('');

    const handleChange=(event) => {
        SetId(event.target.value);
    }

    const handleClick =() => {
        props.getall();
    }

    const handleClickId=() => {
        props.getEmployee(id)
    }

    const handleClickDelete=() => {
        props.deleteEmployee(id)
    }


    return(
        <div className="searchBar">
            <form className={classes.root}>
            
                <TextField type="number" label="id" id="id" onChange={handleChange} />
                <Button variant="contained" onClick={handleClickId} >Search</Button>
                <Button variant="contained" onClick={handleClick} >All</Button>
                <Button variant="contained" onClick={handleClickDelete} >Delete</Button>

            </form>
        </div>
    );
};