import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Musics from "./pages/Musics";
import Layout from "./layouts/layout";
import { getToken } from "./components/utils";
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home></Home>
            </Layout>
          }
        ></Route>
        <Route
          path="/likes"
          element={
            <Layout>
              <Likes></Likes>
            </Layout>
          }
        ></Route>
        <Route
          path="/musics/:id"
          element={
            <Layout>
              <Musics></Musics>
            </Layout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
