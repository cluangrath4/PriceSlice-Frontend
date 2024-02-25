import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Marker, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import "../index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Map from './Map';
import States from './States';
import Table from './Table';
import { useParams } from "react-router-dom";




function App() {
  const { id } = useParams();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Map/>}></Route>
        <Route path="/United States" element={<States/>}></Route>
        <Route path="/table" element={<Table/>}></Route>
        <Route path="/:id" element={<Table/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;