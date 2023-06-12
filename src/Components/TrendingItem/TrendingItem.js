import React from 'react';

const TrendingItem = (props) => {
    return (
        <div className=" py-5">
            <div className="text-center bg-thead-color text-white">
                <img src={props.trend.item.small} alt="" width={50} className="inline"/>
                <div className="flex justify-around">
                    <h4>{props.trend.item.name}</h4>
                    <p>{props.trend.item.symbol}</p>
                </div>
                <div className="flex justify-around">
                    <h5>{props.trend.item.price_btc.toFixed(8)} btc</h5>
                    <p>Rank: {props.trend.item.market_cap_rank}</p>
                </div>
            </div>
        </div>
    );
};

export default TrendingItem;