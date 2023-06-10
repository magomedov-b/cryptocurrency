import React from 'react';
import Coin from "../../routes/Coin/Coin";
import {Link} from "react-router-dom";


const CoinItem = (props) => {
    return (

            <tr className="text-center border">
                <td className="py-4 px-3">{props.coins.market_cap_rank}</td>
                <td className="py-4 px-3">
                    <div className="flex flex-row justify-start">
                        <img className="" src={props.coins.image} alt={props.coins.id} width={44} height={34}/>
                        <div className="ml-5 text-left">
                            <p>{props.coins.name}</p>
                            <p>{props.coins.symbol.toUpperCase()}</p>
                        </div>
                    </div>
                </td>
                <td className="py-4 px-3">${props.coins.current_price}</td>
                <td className={`py-4 px-3 ${props.coins.market_cap_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"}`}>{(props.coins.market_cap_change_percentage_24h).toFixed(2)}%</td>
                <td className={`py-4 px-3 ${props.coins.market_cap_change_24h > 0 ? "text-green-600" : "text-red-600"}`}>$ {(props.coins.market_cap_change_24h / 1000000000).toFixed(2)} B</td>
                <td className="py-4 px-3">{(props.coins.market_cap/ 1000000000).toFixed(2)} B</td>
                <td>
                    <Link to={`/coin/${props.coins.id}`} element={<Coin key={props.coins.id}/>}>
                        <span className="bg-blue-500 rounded-2xl px-3 py-1">Trade</span>
                    </Link>
                </td>
            </tr>


    );
};

export default CoinItem;