import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "/Layer_1.png";
import logout from "../../assets/images/logout.png";
import { createElement, useEffect, useState } from "react";
import { routeLinkGenerators } from "../../utils/routeLinkGenerators";
import { dashboardItems } from "../../constants/router.constants";
import Swal from "sweetalert2";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openNome, setOpenNome] = useState({});

  const handleLogOut = () => {
    Swal.fire({
      text: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonText: "     Sure    ",
      cancelButtonText: "Cancel",
      showConfirmButton: true,
      confirmButtonColor: "#DC2626",
      reverseButtons: true,
    }).then((res) => {
      if (res.isConfirmed) {
        // dispatch(logout());
        // localStorage.removeItem("token");
        // localStorage.removeItem("user-update");
        navigate("/auth");
      }
    });
  };
  useEffect(() => {
    // console.log(location.pathname.includes("earnings"));
  }, [location.pathname]);
  return (
    <div className="fixed top-0 left-0 w-[290px] min-h-screen h-full pr-0 bg-[#FFFFFF]">
      <div className="h-full flex flex-col justify-between  pt-[50px] border drop-shadow">
        <div className="space-y[24px">
          <div className="px-[38px]">
            {/* <img className="w-[60%] mx-auto" src={logo} alt="" /> */}
            <div className="mx-auto w-[60%]">
              <svg
                width="86"
                height="85"
                viewBox="0 0 86 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2699_234)">
                  <path
                    d="M54.5511 60.4684C68.2031 62.2924 79.3629 51.8405 79.7842 39.7539H6.1836C6.62253 46.1744 9.24346 51.4621 14.1978 55.5616C19.1773 59.6839 25.0321 60.8746 31.5 60.3801C31.2528 60.7914 31.1342 61.0033 31.0005 61.2026C28.7529 64.5806 26.4977 67.9535 24.2577 71.3341C23.9777 71.7554 23.7481 71.9698 23.1402 71.8714C20.0047 71.3542 16.9246 73.3195 15.9434 76.3771C14.947 79.4826 16.3369 82.8127 19.2454 84.286C22.1161 85.7417 25.6073 84.9142 27.5194 82.3258C29.4441 79.7198 29.2297 76.1627 26.9972 73.8467C26.7147 73.5541 26.4019 73.2892 26.0462 72.9613C26.1723 72.7418 26.2934 72.4996 26.4422 72.2751C28.9345 68.5312 31.4419 64.7975 33.9115 61.0386C34.2168 60.5769 34.5346 60.4407 35.0568 60.4432C40.344 60.4584 45.6313 60.4457 50.9186 60.4684C51.2465 60.4684 51.7258 60.5794 51.8822 60.809C54.5965 64.8177 57.2704 68.8516 59.9897 72.9385C58.6124 74.046 57.6488 75.3831 57.3057 77.1314C56.6095 80.6683 58.8722 84.1044 62.4214 84.8486C65.9606 85.5903 69.4493 83.3501 70.2136 79.8409C70.988 76.2938 68.8085 72.767 65.3098 71.99C64.5858 71.8285 63.7937 71.7428 63.0697 71.8538C62.3609 71.9622 62.0229 71.7907 61.642 71.2054C59.4928 67.9132 57.2956 64.6563 55.1161 61.3842C54.9471 61.1294 54.7932 60.8645 54.5485 60.471L54.5511 60.4684Z"
                    fill="#A5B4FC"
                  />
                  <path
                    d="M42.9044 30.233C30.2235 30.233 17.5401 30.233 4.85924 30.2406C4.29923 30.2406 3.71651 30.2709 3.18426 30.4222C1.44874 30.9142 0.338814 32.612 0.520439 34.3906C0.704582 36.1969 2.19794 37.6424 4.02174 37.7761C4.27148 37.7938 4.52374 37.7862 4.77599 37.7862C30.2639 37.7862 55.7543 37.7862 81.2422 37.7862C83.2476 37.7862 84.6249 36.9562 85.2379 35.3845C86.1637 33.0207 84.5215 30.4222 81.9863 30.2431C81.6408 30.2179 81.2952 30.233 80.9471 30.233C68.2662 30.233 55.5828 30.233 42.9019 30.233H42.9044Z"
                    fill="#A5B4FC"
                  />
                  <path
                    d="M10.5524 13.9004C19.1921 18.222 27.7436 22.4956 36.295 26.7717C36.3405 26.7313 36.3833 26.6909 36.4287 26.6506C31.54 18.9536 26.6513 11.254 21.697 3.45361C17.048 5.95621 13.3928 9.40737 10.5524 13.8979V13.9004Z"
                    fill="#A5B4FC"
                  />
                  <path
                    d="M38.2324 25.9644V0.0604717C33.104 -0.211988 28.1875 0.418706 23.4124 2.63118C28.3389 10.3862 33.215 18.063 38.2324 25.9669V25.9644Z"
                    fill="#A5B4FC"
                  />
                  <path
                    d="M35.082 28.278C26.465 23.9691 18.0775 19.7763 9.69756 15.5859C7.90403 18.0734 6.14832 24.4989 6.22652 28.278H35.0795H35.082Z"
                    fill="#A5B4FC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2699_234">
                    <rect
                      width="85"
                      height="85"
                      fill="white"
                      transform="matrix(-1 0 0 1 85.5 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <ul className="mt-10 max-h-[650px] overflow-y-auto space-y-1 xl:space-y-2 px-4">
            {routeLinkGenerators(dashboardItems).map(
              ({ name, icon, path, children, rootPath }, indx) =>
                children?.length ? null : (
                  <li
                    onClick={() => {
                      setOpenNome((c) => ({
                        name: c?.name === name ? null : name,
                      }));
                    }}
                    key={indx}
                  >
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-[#4F46E5] text-white" +
                            " w-full px-4 py-3 flex items-center justify-start gap-3 text-md transition-all rounded-full"
                          : " hover:text-white  hover:bg-[#706e97]" +
                            " w-full px-4 py-3 flex items-center justify-start gap-3 text-md transition-all rounded-full"
                      }
                    >
                      <div>{createElement(icon, { size: "18" })}</div>
                      <span> {name}</span>
                    </NavLink>
                  </li>
                )
            )}
          </ul>
        </div>
        <div className="p-4 mt-auto  text-center">
          <button
            onClick={handleLogOut}
            className=" w-full bg-red  text-black  font-semibold px-12 py-3 flex items-center justify-center gap-3 text-md outline-none rounded-full"
          >
            <img className="" src={logout} alt="" />
            <span className="text-white font-light">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
