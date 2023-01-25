import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Accueil from "./pages/Accueil";
import PageNotFound from "./pages/PageNotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>}>
          <Route index element={<Accueil/>}/>
          <Route path="page1" element={<Page1/>}/>
          <Route path="page2" element={<Page2/>}/>
          <Route path="page3" element={<Page3/>}/>
          <Route path="page4/:nom/:id" element={<Page4/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
