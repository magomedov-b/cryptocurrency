import React, {useEffect, useState} from 'react';
import axios from "axios";
import Coins from "../../Components/Coins/Coins";

const HomePage = () => {

    const [coins,setCoins] = useState([]);
    const [pages, setPages] = useState(1)

    const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pages}&sparkline=false&locale=en`;

    useEffect(() => {
        setTimeout(() => {
        const fetchData = async () => {
            try {
                const response = await axios(BASE_URL);
                if (response.data) {
                    setCoins(response.data)
                } else {
                    return <div>Error 404</div>
                }
                console.log(response.data)
            }catch (e) {
                console.error(e.message)
            }
        }

        fetchData().catch(e => console.error(e))
        },2000)
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const fetchData = async () => {
                try {
                    const response = await axios(BASE_URL);
                    if (response.data) {
                        setCoins(response.data)
                    } else {
                        return <div>Error 404</div>
                    }
                    console.log(response.data)
                } catch (e) {
                    console.error(e.message)
                }
            }

            fetchData().catch(e => console.error(e))
        }, 5000);
        }, [pages])

    const nextPage = () => {
        setPages(pages+1)
    }

    const prevPage = () => {
        if (pages>1) {
            setPages(pages-1)
        }
        return pages
    }


    return (
        <div>
            <Coins coins={coins}/>
            <p><button onClick={nextPage}>Next</button></p>
            <p><button onClick={prevPage}>Prev</button></p>
        </div>
    );
};

export default HomePage;