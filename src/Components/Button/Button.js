import React from 'react';

const Button = (props) => {
    return (
    <div className="flex justify-around">
        <button onClick={props.onPrevPage} className="py-3 px-5 bg-blue-500  my-7 rounded-2xl uppercase font-bold italic text-white">Prev</button>
        <button onClick={props.onNextPage} className="py-3 px-5 bg-blue-500  my-7 rounded-2xl uppercase font-bold italic text-white">Next</button>
    </div>
    );
};

export default Button;