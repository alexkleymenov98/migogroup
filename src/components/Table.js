import React from "react";
import Row from "./Row";

const Table = ({matrix}) => {
    const matrixView = matrix
        .map((row, index) => <Row row={row} index={index} key={index}/>);
    return (
        <>
            {matrixView}
        </>
    )
}
export default Table;