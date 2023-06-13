import React from 'react';
import TrendingItem from "../TrendingItem/TrendingItem";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './custom.css'
const Trending = (props) => {
    SwiperCore.use([Autoplay])
    return (
        <div className="bg-based-bg lg:px-20 py-5">
            <h1 className="text-2xl text-white  mb-5 font-bold">Top Movers</h1>
            <Swiper
                breakpoints={{
                    320: {
                        width: 320,
                        slidesPerView: 1,
                    },
                }}
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
                            <TrendingItem
                                trend={trend}
                            />
                    </SwiperSlide>

                ))}
            </Swiper>

        </div>
    );
};

export default Trending;