// import { Button, Input, message } from "antd";
// import Form from "antd/es/form/Form";

// import { useNavigate } from "react-router-dom";
// import image from "/sign.png";
// import PageHeading from "../../Components/PageHeading";
// import { useResetPasswordMutation } from "../../redux/features/authSlice";
// import { useState } from "react";

// const ResetPassword = () => {
//   const navigate = useNavigate();
//   const [resetPassword]=useResetPasswordMutation()

//   const [form] = Form.useForm();
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const onFinish = async (values) => {
//     if (values.password !== values.confirmPassword) {
//       message.error("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await resetPassword({
//         password: values.password,
//       }).unwrap();

//       if (response.success) {
//         message.success(response.message);

//         navigate("/");
//       } else {
//         message.error(response.message || "Password reset failed!");
//       }
//     } catch (error) {
//       message.error(error?.data?.message || "Something went wrong!");
//     }
//   };

//   return (
//     <div className="min-h-[100vh] w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-1 lg:gap-8 bg-[#E0E7FF]">
//       <div className="g:border-r-2 border-primary bg-[#4F46E5] h-full mx-auto w-[100%]  lg:p-[30%] lg:pr-[10%]">
//         <img src={image} alt="" />
//       </div>
//       <div  className="max-w-2xl mx-auto bg-white rounded-lg text-center">
//         <div className=" order-first lg:order-last">
//           <div className="w-full py-[44px] lg:px-[44px] space-y-8">
//             <div className="flex flex-col items-center lg:items-start">
//               <PageHeading
//                 backPath={-1}
//                 title={"Set new password"}
//                 disbaledBackBtn={true}
//               />
//               <p className=" drop-shadow text-[#464343] mt-5">
//                 Your password must be 8-10 character long.
//               </p>
//             </div>
//             <Form
//               name="normal_login"
//               layout="vertical"
//               initialValues={{
//                 remember: true,
//               }}
//               requiredMark={false}
//               onFinish={onFinish}
//             >
//               <Form.Item
//                 label={
//                   <span className="font-medium text-base">New Password</span>
//                 }
//                 name="newPassword"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input new password!",
//                   },
//                 ]}
//               >
//                 <Input.Password size="large" placeholder="**********" />
//               </Form.Item>
//               <Form.Item
//                 label={
//                   <span className="font-medium text-base">
//                     Confirm New Password
//                   </span>
//                 }
//                 name="rePassword"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please Re-Enter the password!",
//                   },
//                   ({ getFieldValue }) => ({
//                     validator(_, value) {
//                       if (!value || getFieldValue("newPassword") === value) {
//                         return Promise.resolve();
//                       }
//                       return Promise.reject(
//                         new Error(
//                           "The new password that you entered do not match!"
//                         )
//                       );
//                     },
//                   }),
//                 ]}
//               >
//                 <Input.Password size="large" placeholder="**********" />
//               </Form.Item>
//               <div className="w-full flex justify-center pt-4 ">
//                 <Button
//                   // disabled={isLoading}
//                   type="primary"
//                   size="large"
//                   htmlType="submit"
//                   className="w-full px-2 bg-[#4F46E5] "
//                 >
//                   Reset Password
//                 </Button>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;

// import { Button, Input, message } from "antd";
// import Form from "antd/es/form/Form";
// import { useNavigate } from "react-router-dom";
// import image from "/sign.png";
// import PageHeading from "../../Components/PageHeading";

// const ResetPassword = () => {
//   const navigate = useNavigate();
//   const [form] = Form.useForm();
//   const token = localStorage.getItem("accessToken");

//   const onFinish = async (values) => {
//     if (values.newPassword !== values.confirmPassword) {
//       message.error("Passwords do not match!");
//       return;
//     }

//     try {
//       // Send the correct payload structure
//       const response = await fetch(
//         "http://192.168.10.199:5002/api/v1//auth/reset-password"
//       )({
//         newPassword: values.newPassword,
//         confirmPassword: values.confirmPassword,
//         // accessToken: localStorage.getItem("accessToken"), // Include the access token
//       }).unwrap();

//       if (response.success) {
//         message.success(response.message);
//         navigate("/"); // Redirect to home page after successful password reset
//       } else {
//         message.error(response.message || "Password reset failed!");
//       }
//     } catch (error) {
//       message.error(error?.data?.message || "Something went wrong!");
//     }
//   };

//   return (
//     <div className="min-h-[100vh] w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-1 lg:gap-8 bg-[#E0E7FF]">
//       <div className="lg:border-r-2 border-primary bg-[#4F46E5] h-full mx-auto w-[100%] lg:p-[30%] lg:pr-[10%]">
//         <img src={image} alt="Sign In Illustration" />
//       </div>
//       <div className="max-w-2xl mx-auto bg-white rounded-lg text-center">
//         <div className="order-first lg:order-last">
//           <div className="w-full py-[44px] lg:px-[44px] space-y-8">
//             <div className="flex flex-col items-center lg:items-start">
//               <PageHeading
//                 backPath={-1}
//                 title={"Set new password"}
//                 disbaledBackBtn={true}
//               />
//               <p className="drop-shadow text-[#464343] mt-5">
//                 Your password must be 8-10 characters long.
//               </p>
//             </div>
//             <Form
//               name="normal_login"
//               layout="vertical"
//               initialValues={{ remember: true }}
//               requiredMark={false}
//               onFinish={onFinish}
//               form={form}
//             >
//               <Form.Item
//                 label={
//                   <span className="font-medium text-base">New Password</span>
//                 }
//                 name="newPassword"
//                 rules={[
//                   { required: true, message: "Please input new password!" },
//                   {
//                     min: 8,
//                     message: "Password must be at least 8 characters!",
//                   },
//                   { max: 10, message: "Password cannot exceed 10 characters!" },
//                 ]}
//               >
//                 <Input.Password size="large" placeholder="**********" />
//               </Form.Item>
//               <Form.Item
//                 label={
//                   <span className="font-medium text-base">
//                     Confirm New Password
//                   </span>
//                 }
//                 name="confirmPassword"
//                 dependencies={["newPassword"]}
//                 rules={[
//                   { required: true, message: "Please confirm your password!" },
//                   ({ getFieldValue }) => ({
//                     validator(_, value) {
//                       if (!value || getFieldValue("newPassword") === value) {
//                         return Promise.resolve();
//                       }
//                       return Promise.reject(
//                         new Error("The passwords do not match!")
//                       );
//                     },
//                   }),
//                 ]}
//               >
//                 <Input.Password size="large" placeholder="**********" />
//               </Form.Item>
//               <div className="w-full flex justify-center pt-4">
//                 <Button
//                   type="primary"
//                   size="large"
//                   htmlType="submit"
//                   className="w-full px-2 bg-[#4F46E5]"
//                   // loading={isLoading} // Disable button when loading
//                 >
//                   Reset Password
//                 </Button>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;

import { Button, Input, message } from "antd";
import Form from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";
import image from "/sign.png";
import PageHeading from "../../Components/PageHeading";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const token = localStorage.getItem("accessToken");
  const api = import.meta.env.VITE_IMAGE_API;

  const onFinish = async (values) => {
    if (values.newPassword !== values.confirmPassword) {
      message.error("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        `${api}/api/v1/auth/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            newPassword: values.newPassword,
            confirmPassword: values.confirmPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Password reset failed!");
      }

      if (data.success) {
        message.success(data.message);
        localStorage.removeItem("accessToken");
        navigate("/auth");
      } else {
        message.error(data.message || "Password reset failed!");
      }
    } catch (error) {
      message.error(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-[100vh] w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-1 lg:gap-8 bg-[#E0E7FF]">
      <div className="lg:border-r-2 border-primary bg-[#4F46E5] h-full mx-auto w-[100%] lg:p-[30%] lg:pr-[10%]">
        <img src={image} alt="Sign In Illustration" />
      </div>
      <div className="max-w-2xl mx-auto bg-white rounded-lg text-center">
        <div className="order-first lg:order-last">
          <div className="w-full py-[44px] lg:px-[44px] space-y-8">
            <div className="flex flex-col items-center lg:items-start">
              <PageHeading
                backPath={-1}
                title={"Set new password"}
                disbaledBackBtn={true}
              />
              <p className="drop-shadow text-[#464343] mt-5">
                Your password must be 8-10 characters long.
              </p>
            </div>
            <Form
              name="normal_login"
              layout="vertical"
              initialValues={{ remember: true }}
              requiredMark={false}
              onFinish={onFinish}
              form={form}
            >
              <Form.Item
                label={
                  <span className="font-medium text-base">New Password</span>
                }
                name="newPassword"
                rules={[
                  { required: true, message: "Please input new password!" },
                ]}
              >
                <Input.Password size="large" placeholder="**********" />
              </Form.Item>
              <Form.Item
                label={
                  <span className="font-medium text-base">
                    Confirm New Password
                  </span>
                }
                name="confirmPassword"
                dependencies={["newPassword"]}
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password size="large" placeholder="**********" />
              </Form.Item>
              <div className="w-full flex justify-center pt-4">
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  className="w-full px-2 bg-[#4F46E5]"
                >
                  Reset Password
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
