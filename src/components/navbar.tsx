import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/AuthHook";

const Navbar: React.FC = () => {
  const { token, userData, login, logout } = useAuthContext();
  const [profileDrop, setProfileDrop] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    await login();
  };

  const handleLogout = async () => {
    await logout();
    navigate(0);
  };

  const handleDropdown = () => {
    if (profileDrop) {
      setProfileDrop(false);
    } else {
      setProfileDrop(true);
    }
  };

  return (
    <nav className="stick top-0 z-10 flex flex-row justify-between p-8 border-b-2 border-black items-center">
      <section>
        <Link to={"/"} className="font-mono font-semibold tracking-wide">
          //NagaBelajar
        </Link>
      </section>
      <section className="flex flex-row gap-40 items-center">
        <ul className="flex flex-row gap-11">
          <Link to={"/"} className="cursor-pointer font-semibold">
            Dashboard
          </Link>
          <Link to={"/course"} className="cursor-pointer font-semibold ">
            Course
          </Link>
          <Link to={"/"} className="cursor-pointer font-semibold">
            Certificate
          </Link>
          <Link to={"/sandbox"} className="cursor-pointer font-semibold">
            Sandbox
          </Link>
        </ul>
        {token ? (
          <div
            className="rounded-xl text-white px-5 relative flex flex-row-reverse items-center justify-center gap-2 cursor-pointer"
            onClick={handleDropdown}
          >
            <figure>
              <img
                className="rounded-full w-12"
                referrerPolicy="no-referrer"
                src={userData?.photoURL || "https://via.placeholder.com/32"}
                alt="User Avatar"
              />
            </figure>
            <div
              className={`absolute ${
                profileDrop
                  ? "translate-y-16 opacity-100"
                  : "pointer-events-none -translate-y-0"
              } opacity-0 transition duration-300 ease-in-out`}
            >
              <button
                onClick={handleLogout}
                className="border-2 border-black bg-white p-2 transition duration-150 ease-in-out hover:bg-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div
            className="bg-[#000000] rounded-xl text-white px-5 py-3 flex flex-row gap-2 cursor-pointer"
            onClick={handleLogin}
          >
            <span className="font-semibold">LOG IN</span>
            <ArrowUpRight size={23} />
          </div>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
