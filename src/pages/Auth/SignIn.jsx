// import { Button, Checkbox, Input, message } from "antd";
// import Form from "antd/es/form/Form";

// import { useLocation, useNavigate } from "react-router-dom";
// import image from "/sign.png";
// import Swal from "sweetalert2";
// import { useLoginMutation } from "../../redux/features/authSlice";
// import { useDispatch } from "react-redux";
// import { useState } from "react";


// const SignIn = () => {
 

//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const [login, { isLoading }] = useLoginMutation();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     if (!email || !password) {
//       return message.error("Email and Password are required!");
//     }

//     try {
//       const response = await login({ email, password }).unwrap();

//       if (response?.success) {
//         const { accessToken, admin } = response.data;
//         console.log(response)

//         if (admin) {
//           localStorage.setItem("accessToken", accessToken);
//           localStorage.setItem("admin", JSON.stringify(admin));
//           // dispatch(
//           //   setUser({
//           //     user: admin,
//           //     token: accessToken,
//           //   })
//           // );
//           message.success("Login Successful!");
//           navigate(location.state ? location.state : "/"); // Redirect
//         } else {
//           Swal.fire({
//             icon: "error",
//             title: "Login Failed!",
//             text: "You are not authorized.",
//           });
//         }
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Login Failed!",
//           text: response?.message || "Something went wrong. Please try again.",
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Login Failed!",
//         text:
//           error?.data?.message || "Something went wrong. Please try again.",
//       });
//     }
//   };


//   return (
//     <div className="min-h-[100vh] w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-1 lg:gap-8 bg-[#E0E7FF]">
//       <div className="lg:border-r-2 border-primary bg-[#4F46E5] h-full mx-auto w-[100%]  lg:p-[30%] lg:pr-[10%] ">
//         <img className="ml-" src={image} alt="" />
//       </div>
//       <div className="max-w-2xl mx-auto bg-white rounded-lg">
//         <div className="lg: order-first lg:order-last">
//           <div className="w-full py-[44px] lg:px-[44px]">
//             <div className="pb-[30px] space-y-2">
//               <h1 className="text-[33px] text-center font-semibold ">
//                 Login to Account!
//               </h1>
//               <p className="text-hash text-center lg:text-lg">
//                 Please enter your email and password to continue.
//               </p>
//             </div>
//             <Form
//               name="normal_login"
//               layout="vertical"
//               initialValues={{
//                 remember: false,
//               }}
//               onFinish={handleLogin}
//               requiredMark={false}
//               className="text-start"
//             >
//               <Form.Item
//                 label={<span className="font-medium text-base">Email</span>}
//                 name="email"
//                 rules={[
//                   {
//                     type: "email",
//                     message: "Please input a valid Email!",
//                   },
//                   {
//                     required: true,
//                     message: "Please input your Email!",
//                   },
//                 ]}
//               >
//                 <Input size="large" placeholder="admin@gmail.com" />
//               </Form.Item>
//               <Form.Item
//                 label={<span className="font-medium text-base">Password</span>}
//                 className="mt-6"
//                 name="password"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input your password!",
//                   },
//                 ]}
//               >
//                 <Input.Password size="large" placeholder="**********" />
//               </Form.Item>
//               <div className="flex justify-between items-center">
//                 <Form.Item name="remember" valuePropName="checked">
//                   <Checkbox className="text-base font-medium">
//                     Remember me
//                   </Checkbox>
//                 </Form.Item>
//                 <Form.Item>
//                   <Button
//                     onClick={() => navigate("/auth/forgot-password")}
//                     type="link"
//                     className="text-base font-medium text-info"
//                   >
//                     Forget password?
//                   </Button>
//                 </Form.Item>
//               </div>
//               <div className="w-full flex justify-center ">
//                 <Button
//                   type="primary"
//                   size="large"
//                   htmlType="submit"
//                   className="px-2 w-full bg-playground"
//                 >
//                   Sign In
//                 </Button>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;


import { Button, Checkbox, Input, message } from "antd";
import Form from "antd/es/form/Form";
import { useLocation, useNavigate } from "react-router-dom";
import image from "/sign.png";
import Swal from "sweetalert2";
import { useLoginMutation } from "../../redux/features/authSlice";


const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [login, { isLoading }] = useLoginMutation();



  const handleLogin = async (values) => {
    const { email, password } = values;

    if (!email || !password) {
      return message.error("Email and Password are required!");
    }

    try {
      const response = await login({ email, password }).unwrap();

      if (response?.success) {
        const { accessToken, user } = response.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("user", JSON.stringify(user));

        console.log(response)

        message.success("Login Successful!");
        navigate(location.state ? location.state : "/"); // Redirect
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: response?.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed!",
        text: error?.data?.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-[100vh] w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-1 lg:gap-8 bg-[#E0E7FF]">
      <div className="lg:border-r-2 border-primary bg-[#4F46E5] h-full mx-auto w-[100%]  lg:p-[30%] lg:pr-[10%] ">
        <img className="ml-" src={image} alt="" />
      </div>
      <div className="max-w-2xl mx-auto bg-white rounded-lg">
        <div className="lg: order-first lg:order-last">
          <div className="w-full py-[44px] lg:px-[44px]">
            <div className="pb-[30px] space-y-2">
              <h1 className="text-[33px] text-center font-semibold ">
                Login to Account!
              </h1>
              <p className="text-hash text-center lg:text-lg">
                Please enter your email and password to continue.
              </p>
            </div>
            <Form
              name="normal_login"
              layout="vertical"
              initialValues={{
                remember: false,
              }}
              onFinish={handleLogin}
              requiredMark={false}
              className="text-start"
            >
              <Form.Item
                label={<span className="font-medium text-base">Email</span>}
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Please input a valid Email!",
                  },
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input size="large" placeholder="admin@gmail.com" />
              </Form.Item>
              <Form.Item
                label={<span className="font-medium text-base">Password</span>}
                className="mt-6"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password size="large" placeholder="**********" />
              </Form.Item>
              <div className="flex justify-between items-center">
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox className="text-base font-medium">
                    Remember me
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button
                    onClick={() => navigate("/auth/forgot-password")}
                    type="link"
                    className="text-base font-medium text-info"
                  >
                    Forget password?
                  </Button>
                </Form.Item>
              </div>
              <div className="w-full flex justify-center ">
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  className="px-2 w-full bg-playground"
                  loading={isLoading}
                >
                  Sign In
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;