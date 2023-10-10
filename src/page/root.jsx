import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
