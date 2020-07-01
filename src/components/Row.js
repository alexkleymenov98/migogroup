import React from "react";
import {useStyles} from './../style'

const Row = ({index,row})=> {
    const classes = useStyles();
    return (
        <div className={classes.row} key={index}>{row
            .map((value, index) => {
                return <div className={value.isBackground ? classes.cellActive : classes.cell}  key={index}>{value.value}</div>
            })
        }</div>
    )
}
export default Row