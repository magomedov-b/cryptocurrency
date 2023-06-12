import React, {useEffect, useState} from 'react';
import axios from "axios";
import Coins from "../../Components/Coins/Coins";
import Trending from "../../Components/Trending/Trending";

const HomePage = () => {
    document.body.classList.add('bg-regal-blue');
    const [coins,setCoins] = useState([]);
    const [pages, setPages] = useState(1);
    const [trends,setTrends] = useState([]);

    const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pages}&sparkline=false&locale=en`;
    const TREND_URL = 'https://api.coingecko.com/api/v3/search/trending';
    useEffect(() => {
        axios.get(TREND_URL).then((res) => {
            setTrends(res.data.coins)
        }).catch((error) => {
            console.log(error);
        });
    }, [])

    useEffect(() => {
        axios.get(BASE_URL).then((res) => {
            setCoins(res.data);
        }).catch((error) => {
            console.log(error)
        })
    }, [BASE_URL]);

    const nextPage = () => {
        setPages(pages+1);
        console.log(123)
    }

    const prevPage = () => {
        if (pages>1) {
            setPages(pages-1);
        }
        return pages;
    }


    return (
        <div>
            <Trending trends={trends}/>
            <Coins coins={coins}/>
            <div className="flex justify-around bg-nav-bg">
                <button onClick={prevPage} className="py-5 px-8 bg-blue-500  my-7 rounded-2xl text-white">Prev</button>
                <button onClick={nextPage} className="py-5 px-8 bg-blue-500  my-7 rounded-2xl text-white">Next</button>
            </div>
        </div>
    );
};

export default HomePage;