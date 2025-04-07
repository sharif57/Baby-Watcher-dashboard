import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Badge } from "antd";
import { TbBellRinging } from "react-icons/tb";

import { useNotificationGetQuery } from "../../redux/features/notificationSlice";
import { useUserProfileQuery } from "../../redux/features/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const loacatin = useLocation();
  const notificationRef = useRef(null);
  const [notificationPopup, setNotificationPopup] = useState(false);

  const { data } = useNotificationGetQuery();
  // console.log(data?.data?.result?.length)

  const [userInfo, setUserInfo] = useState({});
  console.log(userInfo?.email);
  const { data: profile } = useUserProfileQuery();
  console.log(profile?.data?.name, "profile");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUserInfo = JSON.parse(userData);
      setUserInfo(parsedUserInfo);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setNotificationPopup(false);
  }, [loacatin.pathname]);

  const IMAGE = import.meta.env.VITE_IMAGE_API;

  return (
    <div className="w-full h-[88px] flex justify-between items-center rounded-xl py-[16px] px-[32px] shadow-lg bg-[#4F46E5] text-white">
      <div className="text-start space-y-0.5">
        <p className="text-sm md:text-xl font-light text-white">
          {/* {`Welcome, ${profile?.data?.name}`} */}
          {`Welcome, ${profile?.data?.user?.name}`}
        </p>
        <p className="text-sm md:text-xl text-white">{"Have a nice day!"}</p>
      </div>
      <div className="flex gap-x-[41px]">
        <div
          onClick={(e) => navigate("/notifications")}
          className="relative flex items-center"
        >
          <Badge
            style={{
              backgroundColor: "white",
              color: "black",
              width: "20px",
              height: "20px",
              objectFit: "contain",
            }}
            count={data?.data?.result?.length}
          >
            <TbBellRinging
              style={{ cursor: "pointer" }}
              className="w-6 h-6 rounded-full shadow-sm text-white font-bold transition-all"
            />
          </Badge>
        </div>
        <Link to={"/settings/profile"} className="flex items-center">
          <div>
            <img
              src={`${IMAGE}${profile?.data?.user?.name}`}
              alt=""
              className="rounded-full h-[42px] w-[42px]"
            />
          </div>
          {/* <h1> {userInfo?.name}</h1> */}
          {/* <Select
            defaultValue="Jane Cooper"
            className="text-white"
            style={{
              width: 120,
              color: 'white'
            }}
            bordered={false}
            suffixIcon={<MdOutlineKeyboardArrowDown color="white" fontSize={20} />}
            onChange={handleChange}
            options={[
              {
                value: `${userInfo?.name}`,
                // label: 'Jane Cooper',
              },
             
            ]}
          /> */}
        </Link>
      </div>
    </div>
  );
};

export default Header;
