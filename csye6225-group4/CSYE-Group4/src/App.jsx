import { Link, Route, Routes } from "react-router-dom"
import Home from "./Pages/start"
import About from "./Pages/about"
import Destination from "./Pages/destination"
import Maldives from "./Pages/maldives"
import Paris from "./Pages/paris"
import Iceland from "./Pages/iceland"
import NotFound from "./Pages/NotFound"
import Navbar from "./components/navbar"
import Register from "./Pages/register"
import ContactUs from "./Pages/contactus"
import Packages from "./Pages/packages"
import { useLocation } from 'react-router-dom';
import Login from "./Pages/login"
import Banner from "./components/Banner"


const App = () => {
  const location = useLocation();
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/maldives" element={<Maldives />} />
        <Route path="/destination/iceland" element={<Iceland />} />
        <Route path="/destination/paris" element={<Paris />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;

