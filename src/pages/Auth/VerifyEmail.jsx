// import { Button, message } from "antd";
// import Form from "antd/es/form/Form";
// import { useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import image from "/sign.png";
// import PageHeading from "../../Components/PageHeading";
// import OTPInput from "react-otp-input";
// import Swal from "sweetalert2";
// import { useVerifyEmailMutation } from "../../redux/features/authSlice";
// // import { useVerifyEmailMutation } from "../../redux/features/Auth/authApi";

// const VerifyEmail = () => {
//   const navigate = useNavigate();
//   // const email = searchParams.get("email");
//   // const [otp, setOtp] = useState("");
//   // const [mutation, { isLoading }] = useVerifyEmailMutation();
//   const [verifyEmail] = useVerifyEmailMutation();
//   const [otp, setOtp] = useState("");
//   const [searchParams] = useSearchParams();
//   const email = searchParams.get("email");
//   const [form] = Form.useForm();

//   const onFinish = async () => {
//     if (!/^\d{6}$/.test(otp)) {
//       return Swal.fire({
//         icon: "error",
//         title: "Failed",
//         text: "Please enter a valid 6-digit OTP number!",
//       });
//     }

//     try {
//       const response = await verifyEmail({ email: email, oneTimeCode: otp }).unwrap();
//       console.log(response);

//       if (response?.success) {
//         localStorage.setItem("accessToken", response?.data?.accessToken);
//         console.log(response?.data);
//         message.success(response?.message ?? "Email verified successfully!");
//         navigate(`/auth/reset-password`);
//       } else {
//         Swal.fire({
//           icon: "error",
//           title: "Verification Failed!",
//           text: response?.message || "Invalid OTP. Please try again.",
//         });
//       }
//     } catch (error) {
//       console.error("Verification Error:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Verification Failed!",
//         text: error?.data?.message || "Something went wrong. Try again.",
//       });
//     }
//   };
//   return (
//     <div className="min-h-[100vh] w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-1 lg:gap-8 bg-[#E0E7FF]">
//       <div className="lg:border-r-2 border-primary bg-[#4F46E5] h-full mx-auto w-[100%]  lg:p-[30%] lg:pr-[10%] ">
//         <img src={image} alt="" />
//       </div>
//       <div className="max-w-2xl mx-auto bg-white rounded-lg text-center">
//         <div className=" order-first lg:order-last">
//           <div className="w-full py-[24px] lg:px-[44px] space-y-5">
//             <div className="flex flex-col items-center lg:items-start">
//               <PageHeading
//                 backPath={"/auth/forgot-password"}
//                 title={"Verify Email"}
//                 disbaledBackBtn={true}
//               />
//               {/* <p className=" drop-shadow text-hash mt-5 text-center lg:text-left">
//                 Please check your email. We have sent a code to contact
//                 @gmail.com
//               </p> */}
//             </div>
//             <Form
//               name="normal_login"
//               layout="vertical"
//               initialValues={{
//                 remember: true,
//               }}
//               onFinish={onFinish}
//             >
//               <div className="py-3 text-2xl font-semibold flex justify-center">
//                 <OTPInput
//                   value={otp}
//                   onChange={setOtp}
//                   numInputs={6}
//                   inputStyle={{
//                     height: "50px",
//                     width: "50px",
//                     margin: "10px",
//                     // background: "#ECE8F1",
//                     border: "1px solid #61D0FF",
//                     // marginRight: "auto",
//                     outline: "none",
//                     borderRadius: "50%",
//                     color: "black",
//                   }}
//                   renderSeparator={<span> </span>}
//                   renderInput={(props) => <input {...props} />}
//                 />
//               </div>
//               <div className="w-full flex justify-center pt-5">
//                 <Button
//                   // disabled={isLoading}
//                   type="primary"
//                   size="large"
//                   htmlType="submit"
//                   className="w-full px-2 "
//                 >
//                   Verify Email
//                 </Button>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyEmail;

import { Button, message } from "antd";
import Form from "antd/es/form/Form";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import image from "/sign.png";
import PageHeading from "../../Components/PageHeading";
import OTPInput from "react-otp-input";
import Swal from "sweetalert2";
import { useVerifyEmailMutation } from "../../redux/features/authSlice";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation(); // Added isLoading
  const [otp, setOtp] = useState("");
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const onFinish = async () => {
    // Validate OTP
    if (!/^\d{6}$/.test(otp)) {
      return Swal.fire({
        icon: "error",
        title: "Invalid OTP",
        text: "Please enter a valid 6-digit OTP number!",
      });
    }

    try {
      // Call the verifyEmail mutation
      const response = await verifyEmail({ email, oneTimeCode: Number(otp) }).unwrap();

      if (response?.success) {
        // Save access token to localStorage
        localStorage.setItem("accessToken", response?.data?.accessToken);
        message.success(response?.message || "Email verified successfully!");
        navigate("/auth/reset-password"); // Redirect to reset password page
      } else {
        Swal.fire({
          icon: "error",
          title: "Verification Failed!",
          text: response?.message || "Invalid OTP. Please try again.",
        });
      }
    } catch (error) {
      console.error("Verification Error:", error);
      Swal.fire({
        icon: "error",
        title: "Verification Failed!",
        text: error?.data?.message || "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-[100vh] w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-1 lg:gap-8 bg-[#E0E7FF]">
      <div className="lg:border-r-2 border-primary bg-[#4F46E5] h-full mx-auto w-[100%] lg:p-[30%] lg:pr-[10%]">
        <img src={image} alt="Sign In Illustration" />
      </div>
      <div className="max-w-xl mx-auto bg-white rounded-lg text-center">
        <div className="order-first lg:order-last">
          <div className="w-full py-[24px] lg:px-[44px] space-y-5">
            <div className="">
              <div
              // backPath={"/auth/forgot-password"}
              // title={"Verify Email"}

              // disbaledBackBtn={true}
              />
              <h1 className="text-center text-[30px] font-bold text-[#374151]">Verify Email</h1>
              <p className=" text-hash mt-5 text-center lg:text-center">
                Please check your email. We have sent a code to {email}.
              </p>
            </div>
            <Form
              name="normal_login"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <div className="py-3 text-2xl font-semibold flex justify-center">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  inputStyle={{
                    height: "50px",
                    width: "50px",
                    margin: "10px",
                    border: "1px solid #61D0FF",
                    outline: "none",
                    borderRadius: "50%",
                    color: "black",
                  }}
                  renderSeparator={<span> </span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>
              <div className="w-full flex justify-center pt-5">
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  className="w-full px-2 bg-[#4F46E5]"
                  loading={isLoading}
                >
                  Verify Email
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
