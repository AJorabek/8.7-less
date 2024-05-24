import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Musics from "./pages/Musics";
import Layout from "./layouts/layout";
import { getToken } from "./components/utils";
function App() {
  useEffect(() => {
    getToken();
  }, []);
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
          path="/playlist/:id"
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
