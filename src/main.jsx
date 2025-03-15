import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Home from "./Home/Home";
import Noxu$ from "./Noxu$/Components/Noxu$";
import './Home/Css/Home.css';
import './Auth/Css/Login.css';
import './Auth/Css/Register.css';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/noxu$" element={<Noxu$ />} />
      <Route path="*" element={
        <><script>
          {console.log("Not found web page")}
        </script><h1> Not Found </h1>
        </>
      } />
    </Routes>
  </BrowserRouter>
);