import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Finanzas from "./components/pages/Finanzas/Finanzas";

import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/finanzas" element={<Finanzas />} />
      <Route path="*" element={
        <><script>
          {console.log("Not found web page")}
        </script><h1> Not Found </h1>
        </>
      } />
    </Routes>
  </BrowserRouter>
);