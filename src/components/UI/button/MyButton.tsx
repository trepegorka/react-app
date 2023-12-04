import React from 'react';
// @ts-ignore
import classes from './MyButton.module.css';

// @ts-ignore
const MyButton = ({children, ...props}) => {
    return (
        <div>
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
        </div>
    );
};

// @ts-ignore
export default MyButton;