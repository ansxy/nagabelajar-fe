import { ArrowUpRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/AuthHook";

const Navbar: React.FC = () => {
  const { token, userData, login, logout } = useAuthContext();
  const [profileDrop, setProfileDrop] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    await login();
  };

  const handleLogout = async () => {
    await logout();
    navigate(0);
  };

  const handleDropdown = () => {
    setProfileDrop(!profileDrop);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (!userData) {
      localStorage.removeItem("token");
    }
  }, [userData]);

  return (
    <nav className="sticky top-0 z-40 flex flex-row justify-between p-4 border-b-2 border-black items-center bg-[#f3f3f3]">
      <section>
        <Link to={"/"} className="font-mono font-semibold tracking-wide">
          //NagaBelajar
        </Link>
      </section>
      <section className="flex items-center md:hidden">
        <button onClick={handleMenuToggle}>
          <Menu size={24} />
        </button>
      </section>
      <section className="hidden md:flex flex-row gap-40 items-center">
        <ul className="flex flex-row gap-11">
          <Link to={"/"} className="cursor-pointer font-semibold">
            Dashboard
          </Link>
          <Link to={"/course"} className="cursor-pointer font-semibold">
            Course
          </Link>
          <Link to={"/certificate"} className="cursor-pointer font-semibold">
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
              className={`absolute w-full left-0 mt-11 ${
                profileDrop
                  ? "translate-y-16 opacity-100"
                  : "pointer-events-none -translate-y-0"
              } opacity-0 transition duration-300 ease-in-out flex flex-col items-center`}
            >
              <div className="bg-black rounded-lg shadow-lg">
                <button
                  onClick={() => navigate("/profile")}
                  className="border-2 border-gray-600 w-full bg-white text-black py-2 px-4 transition duration-150 ease-in-out hover:bg-blue-500"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full border-x-2 border-b-2 border-black bg-white text-black py-2 px-4 transition duration-150 ease-in-out hover:bg-red-500"
                >
                  Logout
                </button>
              </div>
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
      {menuOpen && (
        <div className="absolute top-16 right-0 w-full bg-white border-y-2 border-black md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <Link
              to={"/"}
              className="cursor-pointer font-semibold"
              onClick={handleMenuToggle}
            >
              Dashboard
            </Link>
            <Link
              to={"/course"}
              className="cursor-pointer font-semibold"
              onClick={handleMenuToggle}
            >
              Course
            </Link>
            <Link
              to={"/certificate"}
              className="cursor-pointer font-semibold"
              onClick={handleMenuToggle}
            >
              Certificate
            </Link>
            <Link
              to={"/sandbox"}
              className="cursor-pointer font-semibold"
              onClick={handleMenuToggle}
            >
              Sandbox
            </Link>
            {token ? (
              <div className="flex flex-col items-center gap-4 ">
                <div
                  className="rounded-xl text-white px-5 relative flex items-center justify-center gap-2 cursor-pointer"
                  onClick={handleDropdown}
                >
                  <figure>
                    <img
                      className="rounded-full w-12"
                      referrerPolicy="no-referrer"
                      src={
                        userData?.photoURL || "https://via.placeholder.com/32"
                      }
                      alt="User Avatar"
                    />
                  </figure>
                </div>
                {profileDrop && (
                  <button
                    onClick={handleLogout}
                    className="border-2 border-black bg-black text-white p-2 transition duration-150 ease-in-out hover:bg-red-500"
                  >
                    Logout
                  </button>
                )}
              </div>
            ) : (
              <div
                className="bg-[#000000] rounded-xl text-white px-5 py-2 flex flex-row gap-2 cursor-pointer"
                onClick={handleLogin}
              >
                <span className="font-semibold">LOG IN</span>
                <ArrowUpRight size={23} />
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
