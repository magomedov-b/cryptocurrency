import React from 'react';
import {Link} from "react-router-dom";
import Coin from "../../routes/Coin/Coin";

const TrendingItem = (props) => {
    return (
        <div className=" py-5">
            <div className=" text-center bg-thead-color text-white py-3 rounded">
                <img src={props.trend.item.small} alt={props.trend.item.id} width={50} className="inline rounded"/>
                <div className="flex justify-around py-7">
                    <h4 className="font-bold">{props.trend.item.name}</h4>
                    <p className="text-gray-400 text-sm font-bold">{props.trend.item.symbol}</p>
                </div>
                <div className="flex justify-around">
                    <h5 className="font-bold">{props.trend.item.price_btc.toFixed(8)} btc</h5>
                    <p className="text-gray-400 text-sm font-bold">Rank: {props.trend.item.market_cap_rank}</p>
                </div>
                <div className="my-5 py-3">
                    <Link to={`/coin/${props.trend.item.id}`} element={<Coin key={props.trend.item.id}/>}>
                        <span className="bg-blue-500 rounded-2xl px-3 py-1 uppercase font-bold text-sm italic">Trade</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrendingItem;