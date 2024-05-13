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
    <nav className="sticky top-0 z-10 flex flex-col items-center bg-[#FBFBFB] md:static md:flex-row md:justify-between">
      {/* <SideBar /> */}
      <section className="flex gap-[2rem] py-[1.188rem] md:flex-row md:px-[15rem]">
        <Link to={"/"} className="font-mono font-semibold tracking-wide">
          NagaBelajar
        </Link>
        <ul className="hidden md:flex md:flex-row md:gap-7">
          <Link
            to={"/"}
            className="cursor-pointer hover:border-b-2 hover:border-black"
          >
            Dashboard
          </Link>
          <Link
            to={"/forum"}
            className="cursor-pointer hover:border-b-2 hover:border-black"
          >
            Forum
          </Link>
          <Link
            to={"/sandbox"}
            className="cursor-pointer hover:border-b-2 hover:border-black"
          >
            Sandbox
          </Link>
        </ul>
      </section>
      <section className="hidden py-[1.188rem] pr-[10rem] md:flex md:gap-[2rem]">
        {token ? (
          <>
            <div
              className="relative flex flex-row-reverse items-center justify-center"
              onClick={handleDropdown}
            >
              <img
                className="h-16 w-16 rounded-full"
                referrerPolicy="no-referrer"
                src={userData?.photoURL || "https://via.placeholder.com/32"}
                alt="User Avatar"
              />
              <div
                className={`absolute ${
                  profileDrop
                    ? "translate-y-16 opacity-100"
                    : "pointer-events-none -translate-y-0"
                } opacity-0 transition duration-300 ease-in-out`}
              >
                <button
                  onClick={handleLogout}
                  className="border-2 border-black bg-white p-2 drop-shadow-[5px_5px_0_rgb(0,0,0,255)] transition duration-150 ease-in-out hover:bg-red-500 hover:drop-shadow-[0px_0px_0_rgb(0,0,0,255)]"
                >
                  Logout
                </button>
              </div>
            </div>
          </>
        ) : (
          <button
            className="flex flex-row gap-5 border-2 border-black bg-white p-2  drop-shadow-[3px_3px_0_rgb(0,0,0,255)] transition duration-150 ease-in-out hover:drop-shadow-[0px_0px_0_rgb(0,0,0,255)] "
            onClick={handleLogin}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 186.69 190.5"
            >
              <g transform="translate(1184.583 765.171)">
                <path
                  clipPath="none"
                  mask="none"
                  d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                  fill="#4285f4"
                />
                <path
                  clipPath="none"
                  mask="none"
                  d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                  fill="#34a853"
                />
                <path
                  clipPath="none"
                  mask="none"
                  d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
                  fill="#fbbc05"
                />
                <path
                  d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
                  fill="#ea4335"
                  clipPath="none"
                  mask="none"
                />
              </g>
            </svg>
            <span>Login With Google</span>
          </button>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
