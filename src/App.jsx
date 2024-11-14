import { Link, Route, Routes } from "react-router-dom"
import Start from "./Pages/start"
import Profile from "./Pages/profile"
import Home from "./Pages/home"
import NotFound from "./Pages/NotFound"
import Register from "./Pages/register"
import { useLocation } from 'react-router-dom';
import Login from "./Pages/login"
import Detail from "./Pages/detail"


const App = () => {
  const location = useLocation();
  return (
    <>

      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:recipeId" element={<Detail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;

