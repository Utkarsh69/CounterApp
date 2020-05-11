import React from 'react';
import Button from '@material-ui/core/Button';
import './button.style.scss';

const Button2 = ({ symbol, handleEvent }) => (
    <Button variant="outlined" color="primary" onClick={handleEvent}>
        {symbol}
    </Button>
)
export default Button2;