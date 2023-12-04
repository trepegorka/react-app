import React from 'react';
// @ts-ignore
import classes from './MyInput.module.css'

const MyInput = (props:any) => {
    return (
        <input className={classes.myInput} {...props}/>
    );
};

export default MyInput;