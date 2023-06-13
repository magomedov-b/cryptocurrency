import React from 'react';
import {Link} from "react-router-dom";
import Coin from "../../routes/Coin/Coin";

const FavouriteItem = (props) => {
    return (
            <tr className="text-center border">
                <td className="py-4 px-3"></td>
                <td className="@media(min-width:700px)]:table-cell [@media(min-width:320px)]:hidden py-4 px-3">{props.favourites.market_cap_rank}</td>
                <td className="py-4 px-3">
                    <div className="flex flex-row justify-start">
                        <img src={props.favourites.image} alt={props.favourites.id} width={44} height={34}/>
                        <div className="ml-5 text-left">
                            <p>{props.favourites.name}</p>
                            <p>{props.favourites.symbol.toUpperCase()}</p>
                        </div>
                    </div>
                </td>
                <td className="py-4 px-3">${props.favourites.current_price}
                    <p className={`@media(min-width:700px)]:table-cell [@media(min-width:320px)]:hidden py-4 px-3 ${props.favourites.market_cap_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"}`}>{(props.favourites.market_cap_change_percentage_24h).toFixed(2)}%</p>
                </td>
                <td className={`@media(min-width:700px)]:table-cell [@media(min-width:320px)]:hidden py-4 px-3 ${props.favourites.market_cap_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"}`}>{(props.favourites.market_cap_change_percentage_24h).toFixed(2)}%</td>
                <td className={`@media(min-width:700px)]:table-cell [@media(min-width:320px)]:hidden py-4 px-3 ${props.favourites.market_cap_change_24h > 0 ? "text-green-600" : "text-red-600"}`}>$ {(props.favourites.market_cap_change_24h / 1000000000).toFixed(2)} B</td>
                <td className="@media(min-width:700px)]:table-cell [@media(min-width:320px)]:hidden py-4 px-3">{(props.favourites.market_cap/ 1000000000).toFixed(2)} B</td>
                <td>
                    <Link to={`/coin/${props.favourites.id}`} element={<Coin key={props.favourites.id}/>}>
                        <span className="bg-blue-500 rounded-2xl px-3 py-1">Trade</span>
                    </Link>
                </td>
            </tr>
    );
};

export default FavouriteItem;