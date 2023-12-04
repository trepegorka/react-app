import React from 'react';
// @ts-ignore
import classes from './MySelect.module.css'

const MySelect = ({options, defaultValue, value, onChange}: any) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
            className={classes.mySelect}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map((option: any) =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;