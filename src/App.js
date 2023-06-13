
import {Route, Routes} from "react-router-dom";
import HomePage from "./Containers/Home/HomePage";
import Favourites from "./Pages/Favourites/Favourites";
import Navigation from "./Components/Navigation/Navigation";
import Search from "./Containers/Search/Search";
import Coin from "./routes/Coin/Coin";
import CryptoDetail from "./Components/CryptoDetail/CryptoDetail";


function App() {
  return (
      <>
        <Navigation/>
        <Routes>
            <Route path="/coin/:coinId" element={<CryptoDetail/>}/>
            {/*    <Route path=":coinId" element={<Coin/>}/>*/}
            {/*</Route>*/}
            <Route path="/" element={<HomePage/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
            <Route path="/search" element={<Search/>}/>
        </Routes>
      </>
  );
}

export default App;
