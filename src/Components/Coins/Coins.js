import React from 'react';
import CoinItem from "../CoinItem/CoinItem";

const Coins = props => {
    return (
        <div className="bg-blue-900 text-white">
            <table className="w-full">
                <thead>
                <tr className="bg-thead-color">
                    <th className="uppercase py-4 px-3">rank</th>
                    <th className="uppercase py-4 px-3 text-left ">name</th>
                    <th className="uppercase py-4 px-3">price</th>
                    <th className="uppercase py-4 px-3">24h change</th>
                    <th className="uppercase py-4 px-3">24h volume</th>
                    <th className="uppercase py-4 px-3">market cap</th>
                    <th className="uppercase py-4 px-3">trade</th>
                </tr>
                </thead>
                <tbody className="bg-regal-blue">
                    {props.coins.map((coin) => (
                                <CoinItem
                                    coins={coin}
                                    key={coin.id}
                                />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Coins;