import React from 'react';
import CoinItem from "../CoinItem/CoinItem";

const Coins = props => {
    return (
        <div className="bg-blue-900 text-white">
            <div className="flex flex-row items-center justify-around">
                <div>Coins</div>
                <div>24h %</div>
                <div>Volume 24h</div>
            </div>
            <div className="flex flex-col flex-wrap justify-center">
                {props.coins.map((coin) => (
                    <CoinItem
                        key={coin.id}
                        name={coin.name}
                        low={coin.low_24h}
                        high={coin.high_24h}
                        cap={coin.market_cap_change_percentage_24h}
                        image={coin.image}
                        price={coin.current_price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Coins;