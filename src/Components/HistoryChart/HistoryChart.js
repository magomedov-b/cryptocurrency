import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const HistoryChart = () => {
    const params = useParams();
    const id  = params.coinId;
    const [response,setResponse] = useState([]);
    const chatUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
    const fetchData = async () => {
        try{
            const result = await axios(chatUrl);
            setResponse(result.data.prices);
        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        fetchData();
    },[id]);

    const coinCharData = response.map(value => (
        {x: value[0], y: value[1].toFixed(2)}
    ));

    const options = {
        maintainAspectRatio : false,
        plugins: {
            legend: {
                position: 'top' ,
            },
        },
    };

    const labels = coinCharData.map(value => moment(value.x).format('MMM DD'));

     const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: id.toUpperCase(),
                data: coinCharData.map(val => val.y),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return (
        <div className="py-10">
            <Line options={options} data={data}/>
        </div>
    );
};

export default HistoryChart;