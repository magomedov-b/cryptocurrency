import React, {useEffect, useState} from 'react';
import axiosCoins from "../../Components/AxiosCoins/AxiosCoins";
import FavouriteItem from "../../Components/Favouriteitem/FavouriteItem";

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);
    document.body.classList.add('bg-regal-blue');

    useEffect(() => {
        const getFavourites = async () => {
            try {
                const response = await axiosCoins.get('/favourites.json');
                const data = response.data;
                const newFavourites = Object.values(data).map((item) => item.favourites);
                setFavourites((prevFavourites) => [...prevFavourites, ...newFavourites]);
            } catch (error) {
                console.error(error);
            }
        };

        getFavourites().catch((error) => console.error(error));
    }, []);

    return (
        <div className="bg-blue-900 text-white">
            <table className="w-full">
                <thead>
                <tr className="bg-thead-color">
                    <th className="uppercase py-4 px-3"></th>
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
                {favourites.map((favourite) => (
                    <FavouriteItem
                        favourites={favourite}
                        key={favourite.id}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Favourites;