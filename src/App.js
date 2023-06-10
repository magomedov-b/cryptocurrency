
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Favourites from "./Pages/Favourites/Favourites";
import Navigation from "./Components/Navigation/Navigation";
import Search from "./Components/Search/Search";

function App() {
  return (
      <>
        <Navigation/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
            <Route path="/search" element={<Search/>}/>
        </Routes>
      </>
  );
}

export default App;
