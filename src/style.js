import { makeStyles } from '@material-ui/core/styles';

export const  useStyles = makeStyles((theme) => ({
    input: {
        '& .MuiInputBase-input': {
            background: 'white',
            borderRadius: '5px',
        },
    },
    button:{
            textTransform: 'initial',
            minWidth:'150px'
    },
    icon:{
        cursor:'pointer',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '100px',
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    cell: {
        background: '#e0e0e0',
        padding: '10px 15px',
        border: '1px solid #a7a7a7',
    },
    matrixSize: {
        position: 'relative',
    },
    iconWrap: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '55px',
        padding: '0 5px',
        right: 0,
        top:0,
        bottom: 0,
        background: '#a7a7a7',
    },
    cellActive: {
        padding: '10px 15px',
        border: '1px solid #a7a7a7',
        background: 'blue',
        color: '#fff',
    },
}));