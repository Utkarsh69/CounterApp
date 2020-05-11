import React from 'react';

const Button = ({ symbol, handleEvent }) => (
    <button onClick={handleEvent}>
        {symbol}
    </button>
);

export default Button;