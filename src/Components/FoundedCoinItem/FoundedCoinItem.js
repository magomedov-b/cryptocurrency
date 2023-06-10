import React from 'react';

const FoundedCoinItem = (props) => {
    return (
        <div className="rounded flex items-center justify-around my-5 w-3/12">
            <div className="flex flex-col items-center w-3/12">
                <h3>{props.name}</h3>
                <img src={props.image} alt={props.name} width={100}/>
            </div>
        </div>
    );
};

export default FoundedCoinItem;