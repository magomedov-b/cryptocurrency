import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import HistoryChart from "../../Components/HistoryChart/HistoryChart";

const Coin = () => {
    const params = useParams();
    const [response,setResponse] = useState({});
    const [src, setSrc] = useState("");
    const [description, setDescription] = useState(null)
    const id  = params.coinId;
    const coinUrl = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`;
    const fetchData = async () => {
            try{
                const result = await axios(coinUrl);
                setResponse(result.data);
                setSrc(result.data.image.small);
                setDescription(result.data.description.en)
            } catch (err) {
                console.log(err)
            }
    };


    useEffect(() => {
        fetchData();

    },[id])

    return (
        <div className="px-60 bg-based-bg md:px-10">
            <div className="my-6 py-10">
                <div className="flex gap-6 items-center justify-center ">
                    <img src={src} alt={response.name}  />
                    <h1 className="text-2xl text-white mb-2 capitalize font-bold">{response.name}</h1>
                </div>
                <p className="mt-6 text-white text-lg [&>a]:text-blue-500 [&>a]:underline" dangerouslySetInnerHTML={{__html:description}}></p>
            </div>
            <HistoryChart/>
        </div>
    );
};

export default Coin;