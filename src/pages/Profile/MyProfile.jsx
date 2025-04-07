// import { useState } from "react"
// import { Button, Form, Input } from "antd"
// import dashProfile from "../../assets/images/dashboard-profile.png"
// import { Link, Outlet, useNavigate } from "react-router-dom"
// import PasswordChangeModalForm from "../../Components/User/PasswordChangeModalForm"
// import { FaRegEdit } from "react-icons/fa"
// import { ArrowLeft, User, Mail, Phone } from "lucide-react"
// import { useUserProfileQuery } from "../../redux/features/userSlice"

// const MyProfile = () => {
//   const navigate = useNavigate()
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const {data}= useUserProfileQuery()
//   console.log(data)

//   const profileData = {
//     name: `${data?.data?.name}`,
//     email: "enrique@gmail.com",
//     phone: "+880 1550597212",
//     profile: dashProfile,
//   }

//   return (
//     <>
//       <div className="flex items-center gap-3 mb-2 bg-white py-5 px-2 rounded-t-xl">
//         <Link to={"/"}>
//           <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
//             <ArrowLeft className="w-5 h-5 text-gray-600" />
//           </button>
//         </Link>
//         <h1 className="text-xl font-semibold text-gray-800">Personal Information</h1>
//       </div>
//       <div className="rounded-lg py-4 border-lightGray ">
//         <div>
//           <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
//             <div className="w-full">
//               <div className="py-4 px-8 flex justify-end items-center">
//                 {/* <h6 className="text-2xl text-white">Personal Information</h6> */}
//               </div>

//               <Form
//                 name="basic"
//                 layout="vertical"
//                 className="w-full grid grid-cols-12 gap-x-10 px-14 py-8"
//                 autoComplete="off"
//                 initialValues={{
//                   name: profileData.name,
//                   email: profileData.email,
//                   phone: profileData.phone,
//                 }}
//               >
//                 <div className="col-span-3 space-y-6">
//                   <div className="min-h-[300px] flex flex-col items-center justify-center p-8 rounded-lg bg-white">
//                     <div className="my-2">
//                       <img
//                         src={dashProfile || "/placeholder.svg"}
//                         alt=""
//                         className="h-28 w-28 rounded-full border-4 border-black"
//                       />
//                     </div>
//                     <h5 className="text-lg text-[#222222]">{"Profile"}</h5>
//                     <h4 className="text-2xl text-[#222222]">{"Admin"}</h4>
//                   </div>
//                 </div>
//                 <div className="col-span-9 space-y-[14px] w-full">
//                   <Form.Item className="text-lg font-medium text-black -mb-1" label="Name" name="name">
//                     <Input
//                       readOnly
//                       size="large"
//                       className="h-[53px] rounded-full"
//                       prefix={<User className="mr-2 text-gray-400" size={18} />}
//                     />
//                   </Form.Item>
//                   <Form.Item className="text-lg font-medium text-black" label="Email" name="email">
//                     <Input
//                       readOnly
//                       size="large"
//                       className="h-[53px] rounded-full"
//                       prefix={<Mail className="mr-2 text-gray-400" size={18} />}
//                     />
//                   </Form.Item>
//                   <Form.Item className="text-lg font-medium text-black" label="Phone" name="phone">
//                     <Input
//                       readOnly
//                       size="large"
//                       className="h-[53px] rounded-full"
//                       placeholder="0161198984"
//                       prefix={<Phone className="mr-2 text-gray-400" size={18} />}
//                     />
//                   </Form.Item>
//                 </div>
//               </Form>

//               <div className="flex justify-end">
//                 <Button
//                   onClick={(e) => navigate(`edit`)}
//                   size="large"
//                   type="default"
//                   className="px-8 bg-[#4F46E5] text-white hover:bg-black/90 rounded-full font-semibold"
//                 >
//                   <FaRegEdit className="mr-2" />
//                   Edit Profile
//                 </Button>
//               </div>
//             </div>
//             <PasswordChangeModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
//           </div>
//         </div>
//         <div className="p-[24px] pt-0.5">
//           <Outlet />
//         </div>
//       </div>
//     </>
//   )
// }

// export default MyProfile

import { useState } from "react";
import { Button, Form, Input, Spin } from "antd";
import dashProfile from "../../assets/images/dashboard-profile.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import PasswordChangeModalForm from "../../Components/User/PasswordChangeModalForm";
import { FaRegEdit } from "react-icons/fa";
import { ArrowLeft, User, Mail } from "lucide-react";
import { useUserProfileQuery } from "../../redux/features/userSlice";

const MyProfile = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, isError } = useUserProfileQuery();
  console.log(data?.data?.user?.name)

  const IMAGE = import.meta.env.VITE_IMAGE_API;

  if (isLoading) {

    return <Spin size="large" className="flex justify-center items-center min-h-screen" />;
  }

  if (isError) {
    return <div>Error fetching profile data. Please try again later.</div>;
  }

  return (
    <>
      <div className="flex items-center gap-3 mb-2 bg-white py-5 px-2 rounded-t-xl">
        <Link to={"/"}>
          <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
        </Link>
        <h1 className="text-xl font-semibold text-gray-800">Personal Information</h1>
      </div>
      <div className="rounded-lg py-4 border-lightGray ">
        <div>
          <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
            <div className="w-full">
              <div className="py-4 px-8 flex justify-end items-center">
                {/* <h6 className="text-2xl text-white">Personal Information</h6> */}
              </div>

              <Form
                name="basic"
                layout="vertical"
                className="w-full grid grid-cols-12 gap-x-10 px-14 py-8"
                autoComplete="off"
                initialValues={{
                  name: data?.data?.user?.name,
                  email: data?.data?.user?.email,
                }}
              >
                <div className="col-span-3 space-y-6">
                  <div className="min-h-[300px] flex flex-col items-center justify-center p-8 rounded-lg bg-white">
                    <div className="my-2">
                      <img
                        src={`${IMAGE}${data?.data?.user?.image}` || dashProfile}
                        alt=""
                        className="h-28 w-28 rounded-full border-4 border-black"
                      />
                    </div>
                    <h5 className="text-lg text-[#222222]">{"Profile"}</h5>
                    <h4 className="text-2xl text-[#222222]">{`${data?.data?.user?.role}`}</h4>
                  </div>
                </div>
                <div className="col-span-9 space-y-[14px] w-full">
                  <Form.Item className="text-lg font-medium text-black -mb-1" label="Name" name="name">
                    <Input
                      readOnly
                      size="large"
                      className="h-[53px] rounded-full"
                      prefix={<User className="mr-2 text-gray-400" size={18} />}
                    />
                  </Form.Item>
                  <Form.Item className="text-lg font-medium text-black" label="Email" name="email">
                    <Input
                      readOnly
                      size="large"
                      className="h-[53px] rounded-full"
                      prefix={<Mail className="mr-2 text-gray-400" size={18} />}
                    />
                  </Form.Item>
                </div>
              </Form>

              <div className="flex justify-end">
                <Button
                  onClick={(e) => navigate(`edit`)}
                  size="large"
                  type="default"
                  className="px-8 bg-[#4F46E5] text-white hover:bg-black/90 rounded-full font-semibold"
                >
                  <FaRegEdit className="mr-2" />
                  Edit Profile
                </Button>
              </div>
            </div>
            <PasswordChangeModalForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
        <div className="p-[24px] pt-0.5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MyProfile;

