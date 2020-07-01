import React, {useEffect, useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Table from "./components/Table";
import {useStyles} from './style'

function App() {
    const classes = useStyles();
    const [count, setCount] = useState('');
    const [matrix, setMatrix] = useState([])
    useEffect(() => {
        setMatrix(JSON.parse(localStorage.getItem('matrix') || []))
        setCount(parseInt(localStorage.getItem('count')) || 1)
    }, [])
    useEffect(() => {
        localStorage.setItem('matrix', JSON.stringify(matrix))
        localStorage.setItem('count', count)
    }, [matrix,count])
    const createMatrix = () => {
        setMatrix(
            new Array(count).fill('').map(() => new Array(count).fill('')
                .map(() => {
                    return (
                        {
                            isBackground: false,
                            value: Math.floor(Math.random() * Math.floor(2))
                        }
                    )
                }))
        )
    }
    const updateCellBg = () => {
        const matrixBg = (matrix) => {
            let matrixBg = matrix.slice()
            for (let indexRow = 0; indexRow < matrixBg.length; indexRow++) {
                for (let indexCell = 0; indexCell < matrixBg[indexRow].length; indexCell++) {
                    if (matrixBg[indexRow][indexCell].value) {
                        if (indexCell + 1 < matrixBg[indexCell].length && matrixBg[indexRow][indexCell + 1].value === 1) {
                            matrixBg[indexRow][indexCell].isBackground = true
                            matrixBg[indexRow][indexCell + 1].isBackground = true
                        }
                        if (indexRow + 1 < matrixBg[indexRow].length && matrixBg[indexRow + 1][indexCell].value === 1) {
                            matrixBg[indexRow][indexCell].isBackground = true
                            matrixBg[indexRow + 1][indexCell].isBackground = true
                        }
                    }
                }
            }
            return matrixBg
        }
        setMatrix(matrixBg)
    }
    const decrement = () => {
        count > 1 ? setCount(count - 1) : alert('Матрица не может быть нулевой')
    }
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div className="App">
            <Container maxWidth="md">
                <header className={classes.header}>
                    <h4>Размерность матрицы</h4>
                    <div className={classes.matrixSize}>
                        <TextField id="outlined-basic" className={classes.input} variant="outlined" value={count}/>
                        <div className={classes.iconWrap}>
                            <span className={classes.icon} onClick={increment}>&#9650;</span>
                            <span className={classes.icon} onClick={decrement}>&#9660;</span>
                        </div>
                    </div>
                    <Button variant="contained" className={classes.button} onClick={createMatrix}>Создать</Button>
                    <Button variant="contained" className={classes.button} onClick={updateCellBg}>Закрасить</Button>
                </header>
                <Table matrix={matrix}/>
            </Container>
        </div>
    );
}

export default App;
