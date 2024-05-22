import { ReactNode } from "react";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container">
      <LeftSideBar />
      <div className="main">{children}</div>
      <RightSideBar />
    </div>
  );
};

export default Layout;
