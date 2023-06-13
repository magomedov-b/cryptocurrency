import React from 'react';

const FoundedCoinItem = (props) => {
    return (
        <div className="rounded flex items-center justify-around my-5 [@media(min-width:320px)]:w-full [@media(min-width:540px)]:w-6/12 [@media(min-width:720px)]:w-3/12">
            <div className="flex flex-col items-center">
                <h3>{props.name}</h3>
                <img src={props.image} alt={props.name} width={100}/>
            </div>
        </div>
    );
};

export default FoundedCoinItem;