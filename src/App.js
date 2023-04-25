import { Routes, Route } from "react-router-dom";
import AboutUs from "./Screens/AboutUs";
import HomeScreen from "./Screens/HomeScreen";
import NotFound from "./Screens/NotFound";
import ContactUs from "./Screens/ContactUs";
import Movies from "./Screens/Movies";
import SingleMovie from "./Screens/SingleMovie";
import ScrollTop from "./Components/AutoScrollTop";
import WatchPage from "./Screens/WatchPage";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import { useEffect, useState } from "react";
import Profile from "./Screens/Dashboard/Profile";
import "aos/dist/aos.css";
import Password from "./Screens/Dashboard/Password";
import FavouriteMovies from "./Screens/Dashboard/FavouriteMovies";
import ViewMore from "./Components/ViewMore";

function App() {
  const [setLoading] = useState(true);
  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
  }, [setLoading]);

  return (
    <>
      <>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/404Error" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/password" element={<Password />} />
          <Route path="/favourite" element={<FavouriteMovies />} />
          <Route path="/viewMore" element={<ViewMore />} />

          <Route path="/movies/:id" element={<SingleMovie />} />
          <Route path="/watch/:id" element={<WatchPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </>
  );
}

export default App;
