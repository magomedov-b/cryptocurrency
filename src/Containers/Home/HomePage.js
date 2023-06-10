import React, {useEffect, useState} from 'react';
import axios from "axios";
import Coins from "../../Components/Coins/Coins";
import Buttons from "../../Components/Buttons/Buttons";

const HomePage = () => {

    const [coins,setCoins] = useState([]);
    const [pages, setPages] = useState(1)

    const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pages}&sparkline=false&locale=en`;

    useEffect(() => {
        axios.get(BASE_URL).then((res) => {
            setCoins(res.data);
            console.log(res.data);
        }).catch((error) => {
            console.log(error)
        })
    }, []);

    useEffect(() => {
        setTimeout(() => {
            axios.get(BASE_URL).then((res) => {
                setCoins(res.data);
                console.log(res.data);
            }).catch((error) => {
                console.log(error)
            })
        }, 1000);
        }, [pages])

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
            <Coins coins={coins}/>
            <div className="flex justify-around bg-based-bg">
                <button onClick={prevPage} className="py-5 px-8 bg-blue-500  my-7 rounded-2xl text-white">Prev</button>
                <button onClick={nextPage} className="py-5 px-8 bg-blue-500  my-7 rounded-2xl text-white">Next</button>
            </div>
        </div>
    );
};

export default HomePage;