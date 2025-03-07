import { Button, Input } from "antd";
import Form from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";
import image from "/sign.png";
import PageHeading from "../../Components/PageHeading";
// import { useForgotPasswordMutation } from "../../redux/features/Auth/authApi";
// import Swal from "sweetalert2";

const ForgotPassword = () => {
  const navigate = useNavigate();
  // const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const onFinish = async (values) => {
    navigate(`/auth/verify-email`);
    // try {
    //   const response = await forgotPassword(values);
    //   // console.log(response);
    //   if (response?.data?.statusCode == 200) {
    //     navigate(`/auth/verify-email/${values.email}`);
    //   } else {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Failed!!",
    //       text:
    //         response?.data?.message ||
    //         response?.error?.data?.message ||
    //         "Something went wrong. Please try again later.",
    //     });
    //   }
    // } catch (error) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Failed!!",
    //     text: "Something went wrong. Please try again later.",
    //   });
    // }
  };
  return (
    <div className="min-h-[100vh] w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-1 lg:gap-8 bg-[#E0E7FF]">
      <div className="lg:border-r-2 border-primary bg-[#4F46E5] h-full mx-auto w-[100%]  lg:p-[30%] lg:pr-[10%] ">
        <img className="ml-" src={image} alt="" />
      </div>
      <div className="max-w-2xl mx-auto bg-white rounded-lg text-center">
        <div className=" order-first lg:order-last">
          <div className="w-full py-[24px] lg:px-[44px] space-y-8">
            <div className="flex flex-col items-center lg:items-start ">
              <PageHeading
                backPath={"/auth"}
                title={"Forgot Password"}
                disbaledBackBtn={true}
              />
              <p className="drop-shadow text-hash mt-4 text-center lg:text-start">
                Enter your email address to get a verification code for
                resetting your password. Please enter your email address to
                reset your password.
              </p>
            </div>
            <Form
              name="normal_login"
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Please input valid email!",
                  },
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input size="large" placeholder="Enter your email" />
              </Form.Item>
              <div className="w-full flex justify-center pt-5">
                <Button
                  // disabled={isLoading}
                  type="primary"
                  size="large"
                  htmlType="submit"
                  className="w-full px-2 bg-playground"
                >
                  Get OTP
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
