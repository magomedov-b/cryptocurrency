import React, {useState} from 'react';
import Coin from "../../routes/Coin/Coin";
import {Link} from "react-router-dom";
import axiosCoins from "../AxiosCoins/AxiosCoins";


const CoinItem = (props) => {
    const [favourites, setFavourites] = useState([]);
    const [classes, setClasses] = useState({
        add: '',
        remove: '',
    });

    const addToFav = async () => {
        setTimeout( async () => {
             setFavourites(props.coins);
             setClasses({...classes, add: '-fill'});
             console.log(favourites)
            try {
                await axiosCoins.post('/favourites.json', {
                    favourites
                })
            } catch (e) {
                console.log(e)
            }
        }, 500)

    }

    const removeFav = () => {
        setClasses({...classes, add: ' disabled'});
    }
    return (

            <tr className="text-center border">
                <td className="py-3 px-3 "><i className={`bi bi-star${classes.add} text-yellow-400`} onClick={addToFav}></i></td>
                <td className="[@media(min-width:700px)]:table-cell [@media(min-width:320px)]:hidden py-3 px-3"><i className={`bi bi-trash3${classes.remove}`} onClick={removeFav}></i></td>
                <td className="[@media(min-width:700px)]:table-cell [@media(min-width:320px)]:hidden py-3 px-3">{props.coins.market_cap_rank}</td>
                <td className="py-3 px-3">
                    <div className="flex flex-row justify-start">
                        <img src={props.coins.image} alt={props.coins.id} width={44} height={34}/>
                        <div className="ml-5 text-left">
                            <p className="text-sm font-bold">{props.coins.name}</p>
                            <p className="text-gray-400 text-sm font-bold">{props.coins.symbol.toUpperCase()}</p>
                        </div>
                    </div>
                </td>
                <td className="py-3 px-3 font-bold text-sm">
                    ${props.coins.current_price}
                    <p className={`[@media(min-width:700px)]:hidden [@media(min-width:320px)]:block py-3 px-3 font-bold text-sm ${props.coins.market_cap_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"}`}>{(props.coins.market_cap_change_percentage_24h).toFixed(2)}%</p>
                </td>
                <td className={`[@media(min-width:700px)]:table-cell [@media(min-width:320px)]:hidden py-3 px-3 font-bold text-sm ${props.coins.market_cap_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"}`}>{(props.coins.market_cap_change_percentage_24h).toFixed(2)}%</td>
                <td className={`[@media(min-width:700px)]:table-cell [@media(min-width:320px)]:hidden py-3 px-3 font-bold text-sm ${props.coins.market_cap_change_24h > 0 ? "text-green-600" : "text-red-600"}`}>$ {(props.coins.market_cap_change_24h / 1000000000).toFixed(2)} B</td>
                <td className="[@media(min-width:700px)]:table-cell [@media(min-width:320px)]:hidden py-3 px-3 font-bold text-sm">{(props.coins.market_cap/ 1000000000).toFixed(2)} B</td>
                <td>
                    <Link to={`/coin/${props.coins.id}`} element={<Coin key={props.coins.id}/>}>
                        <span className="bg-blue-500 rounded-2xl px-3 py-1 uppercase font-bold text-sm italic">Trade</span>
                    </Link>
                </td>
            </tr>


    );
};

export default CoinItem;