import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Musics from "./pages/Musics";
import Layout from "./layout/Layout";
import { useEffect } from "react";
import { getTimeCurrentTime } from "./utils/getToken";
import { getToken } from "./redux/appSlice";
import { useDispatch } from "react-redux";

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/likes",
    element: (
      <Layout>
        <Likes />
      </Layout>
    ),
  },
  {
    path: "/playlist/:id",
    element: (
      <Layout>
        <Musics />
      </Layout>
    ),
  },
]);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const oldDate = localStorage.getItem("expireDate");
    const oldToken = localStorage.getItem("token");
    if (oldDate && oldToken && oldDate > getTimeCurrentTime()) {
      dispatch(getToken(true));
    } else {
      dispatch(getToken(false));
    }
  }, []);
  return <RouterProvider router={routers} />;
};

export default App;
