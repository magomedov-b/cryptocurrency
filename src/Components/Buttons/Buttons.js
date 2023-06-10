import React from 'react';

const Buttons = (props) => {
    return (
        <div className="flex justify-around bg-based-bg">
            <button onClick={props.onPrevPage} className="py-5 px-8 bg-blue-500  my-7 rounded-2xl text-white">Prev</button>
            <button onClick={props.onNextPage} className="py-5 px-8 bg-blue-500  my-7 rounded-2xl text-white">Next</button>
        </div>
    );
};

export default Buttons;