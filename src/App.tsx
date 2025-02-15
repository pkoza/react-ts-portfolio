import React from "react";
import Home from "./pages/Home/Home.tsx";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Survey from "./pages/Survey/Survey.tsx";
import Results from "./pages/Results/Results.tsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/survey" element={<Survey/>} />
        <Route path="/results" element={<Results/>} />
      </Routes>
    </BrowserRouter>
    <ToastContainer
        closeOnClick
        draggable
        toastClassName="!w-[120%]"
    />
  </>
};

export default App;
