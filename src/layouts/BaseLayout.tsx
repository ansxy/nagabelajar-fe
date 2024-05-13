import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export const BaseLayout: React.FC = () => {
  return (
    <div className="h-screen justify-center overflow-scroll bg-[#F9F6EE] font-mono">
      <Navbar />
      <Outlet />
    </div>
  );
};
