import axios from 'axios';


const axiosCoins = axios.create({
    baseURL: 'https://cryptocurrency-5dd7a-default-rtdb.firebaseio.com'
})


export default axiosCoins;