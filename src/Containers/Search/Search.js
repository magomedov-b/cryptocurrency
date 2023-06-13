import React, {useState} from 'react';
import axios from "axios";
import FoundedCoins from "../../Components/FoundedCoins/FoundedCoins";
import Coins from "../../Components/Coins/Coins";

const Search = () => {
    document.body.classList.add('bg-regal-blue');
    const [value, setValue] = useState('');
    const [coins, setCoins] = useState([])
    const searchUrl = `https://api.coingecko.com/api/v3/search?query=${value}`;
    const getValue = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
        console.log(value);
    }

    const searchCoin = () => {
        setTimeout(() => {
            const fetchData = async () => {
                try {
                    const response = await axios(searchUrl);
                        setCoins(response.data.coins)
                    console.log(response.data.coins)
                }catch (e) {
                    console.error(e.message)
                }
            }

            fetchData().catch(e => console.error(e))
        },2000)
    }
    return (
        <>
        <div className="flex flex-row justify-center bg-based-bg">
            <input type="text" value={value} className="border border-blue-900 rounded" onChange={event => getValue(event)}/>
            <button className="bg-blue-500 text-white px-3 py-2 mx-3 rounded " onClick={searchCoin}> <i className="bi bi-search"></i></button>
        </div>
            <FoundedCoins coins={coins}/>
        </>
    );
};

export default Search;