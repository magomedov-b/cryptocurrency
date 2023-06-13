import React from 'react';
import FoundedCoinItem from "../FoundedCoinItem/FoundedCoinItem";

const FoundedCoins = (props) => {
    return (
        <div className="bg-regal-blue text-white">
            <div className="flex flex-row flex-wrap justify-center ">
                {props.coins.map((coin) => (
                    <FoundedCoinItem
                        key={coin.id}
                        name={coin.name}
                        image={coin.large}
                    />
                ))}
            </div>
        </div>
    );
};

export default FoundedCoins;