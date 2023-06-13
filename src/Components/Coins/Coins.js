import React from 'react';
import CoinItem from "../CoinItem/CoinItem";
import Button from "../Button/Button";

const Coins = props => {
    return (
        <div className="bg-based-bg text-white">
            <div className="sm:px-10 sm:w-full lg:px-20 py-16">
                <h1 className="text-2xl mb-2 font-bold">Today's Cryptocurrency Prices</h1>
                <table className="w-full">
                    <thead>
                    <tr className="bg-thead-color">
                        <th className="uppercase py-4 px-3"></th>
                        <th className="min-[320px]:hidden min-[700px]:table-cell uppercase py-4 px-3"></th>
                        <th className="min-[320px]:hidden min-[700px]:table-cell uppercase py-4 px-3">rank</th>
                        <th className="uppercase py-4 px-3 text-left ">name</th>
                        <th className="uppercase py-4 px-3">price</th>
                        <th className="min-[320px]:hidden min-[700px]:table-cell uppercase py-4 px-3">24h change</th>
                        <th className="min-[320px]:hidden min-[700px]:table-cell  uppercase py-4 px-3">24h volume</th>
                        <th className="min-[320px]:hidden min-[700px]:table-cell uppercase py-4 px-3">market cap</th>
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
                <Button onNextPage={props.onNextPage} onPrevPage={props.onPrevPage}/>
            </div>
        </div>
    );
};

export default Coins;