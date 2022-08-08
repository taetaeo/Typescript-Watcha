import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import TvPage from "./pages/tv";
import MovieDetailPage from "./pages/detail/MovieDetailPage";
import TvDetailPage from "./pages/detail/TvDetailPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/tv" element={<TvPage />}></Route>
      <Route path="/movie/:id" element={<MovieDetailPage />}></Route>
      <Route path="/tv/:id" element={<TvDetailPage />}></Route>
    </Routes>
  );
}
