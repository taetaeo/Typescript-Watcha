import React from "react";
import { Route, Routes } from "react-router-dom";
import TvPageDetail from "./pages/tv/TvPageDetail";
import MainPage from "./pages/main";
import TvPage from "./pages/tv";
import MoviePageDetail from "./pages/main/MoviePageDetail";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/tv" element={<TvPage />}></Route>
      <Route path="/movie/:id" element={<MoviePageDetail />}></Route>
      <Route path="/tv/:id" element={<TvPageDetail />}></Route>
    </Routes>
  );
}
