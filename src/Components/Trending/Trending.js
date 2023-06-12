import React from 'react';
import TrendingItem from "../TrendingItem/TrendingItem";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Link} from "react-router-dom";
import Coin from "../../routes/Coin/Coin";

// init Swiper:
const Trending = (props) => {
    SwiperCore.use([Autoplay])
    return (
        <div className="bg-based-bg px-60">
            <h1 className="text-2xl text-white  mb-5">Top Movers</h1>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={400}
                slidesPerView={4}
                spaceBetween={30}
                className="mySwiper"
            >
                {props.trends.map(trend => (
                    <SwiperSlide key={trend.item.id}>
                        <Link to={`/coin/${trend.item.id}`} element={<Coin key={trend.item.id}/>}>
                            <TrendingItem
                                trend={trend}
                            />
                        </Link>

                    </SwiperSlide>

                ))}
            </Swiper>

        </div>
    );
};

export default Trending;