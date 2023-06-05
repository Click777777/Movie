import { Routes, Route } from "react-router-dom";
import AboutUs from "./Screens/AboutUs";
import HomeScreen from "./Screens/HomeScreen";
import NotFound from "./Screens/NotFound";
import ContactUs from "./Screens/ContactUs";
import ScrollTop from "./Components/AutoScrollTop";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import "aos/dist/aos.css";
import Search from "./Screens/Search";
import Movie from "./Screens/Movie";
import Series from "./Screens/Series";
import Filter from "./Layout/Navbar/Fiter/Filter";
import SearchName from "./Layout/Navbar/Search/SearchName";
import Detail from "./Components/Detail/Detail";

function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/search" element={<Search />} />
        <Route path="/anime/filter" element={<Filter />} />
        <Route path="/anime/search" element={<SearchName />} />
        <Route path="anime/detail/:id" element={<Detail />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/series" element={<Series />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/singup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/404Error" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
