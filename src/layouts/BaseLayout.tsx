import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import Navbar from "../components/navbar";
import { ContentLayout } from "./ContentLayout";

export const BaseLayout: React.FC = () => {
  return (
    <div className="h-screen justify-center overflow-scroll bg-[#ffffff] font-mono">
      <Navbar />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
      <Footer />
    </div>
  );
};
