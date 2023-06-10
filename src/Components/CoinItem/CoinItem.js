import React from 'react';

const CoinItem = (props) => {
    return (
        <div className="rounded flex flex-row items-center justify-around my-5">
            <div className="flex flex-col items-center w-3/12">
                <h3>{props.name}</h3>
                <img src={props.image} alt={props.name} width={100}/>
            </div>
            <div className="w-3/12 text-center">
                <p className="text-red-600 ">Lowest per 24h: {props.low} $</p>
                <p className="text-green-600 ">Highest per 24h: {props.high} $</p>
            </div>
            <div className="w-3/12 text-center">
                <p className={props.cap>=0 ? "text-green-600" : "text-red-600"}>{props.cap} %</p>
            </div>
            <div className="w-3/12 text-center">
                <p>{props.price} $</p>
            </div>
        </div>
    );
};

export default CoinItem;