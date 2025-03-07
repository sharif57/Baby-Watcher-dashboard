import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Badge } from "antd";
import profileImage from "../../assets/images/dash-profile.png";
import { TbBellRinging } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Select } from 'antd';

const Header = () => {
  const navigate = useNavigate();
  const loacatin = useLocation();
  const notificationRef = useRef(null);
  const [notificationPopup, setNotificationPopup] = useState(false);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  

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

  return (
    <div className="w-full h-[88px] flex justify-between items-center rounded-xl py-[16px] px-[32px] shadow-lg bg-[#4F46E5] text-white">
      <div className="text-start space-y-0.5">
        <p className="text-sm md:text-xl font-light text-white">
          {"Welcome, Jane Cooper"}
        </p>
        <p className="text-sm md:text-xl text-white">{"Have a nice day!"}</p>
      </div>
      <div className="flex gap-x-[41px]">
        <div
          onClick={(e) => navigate("/notifications")}
          className="relative flex items-center"
        >
          <Badge style={{ backgroundColor: "white", color:'black', width: '20px', height: '20px', objectFit: 'contain' }} count={14}>
            <TbBellRinging
              style={{ cursor: "pointer" }}
              className="w-6 h-6 rounded-full shadow-sm text-white font-bold transition-all"
            />
          </Badge>
        </div>
        <div className="flex items-center">
          <div>
            <img src={profileImage} alt="" className="rounded-full h-[42px] w-[42px]" />
          </div>
          <Select
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
                value: 'Jane Cooper',
                label: 'Jane Cooper',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
