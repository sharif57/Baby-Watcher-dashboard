// import { Button, Form, Input } from "antd";
// import dashProfile from "../../assets/images/dashboard-profile.png";

// import { ArrowLeft, User, Mail, Phone } from "lucide-react";
// import { Link } from "react-router-dom";

// const EditMyProfile = () => {
//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   const profileData = {
//     name: "Jane Kooper",
//     email: "enrique@gmail.com",
//     phone: "+880 150597212",
//     profile: dashProfile,
//   };

//   return (
//     <>
//       <div className="flex items-center gap-3 mb-8 bg-white py-5 px-2 rounded-t-xl">
//         <Link to="/settings/profile">
//           <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
//             <ArrowLeft className="w-5 h-5 text-gray-600" />
//           </button>
//         </Link>
//         <h1 className="text-xl font-semibold text-gray-800">
//           Edit Personal Information
//         </h1>
//       </div>

//       <div className="rounded-lg py-4 border-lightGray mt-8">
//         <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
//           <div className="w-full">
//             <div className="py-4 px-8 flex justify-end items-center">
//               {/* <h6 className="text-2xl text-white">Personal Information</h6> */}
//             </div>

//             <Form
//               name="basic"
//               layout="vertical"
//               className="w-full grid grid-cols-12 gap-x-10 px-14 py-8"
//               onFinish={onFinish}
//               onFinishFailed={onFinishFailed}
//               autoComplete="off"
//               initialValues={{
//                 name: profileData.name,
//                 email: profileData.email,
//                 phone: profileData.phone,
//               }}
//             >
//               <div className="col-span-3 space-y-6">
//                 <div className="min-h-[300px] flex flex-col items-center justify-center p-8 rounded-lg bg-white">
//                   <div className="my-2 relative group">
//                     <img
//                       src={dashProfile || "/placeholder.svg"}
//                       alt=""
//                       className="h-28 w-28 rounded-full border-4 border-black"
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
//                       <label
//                         htmlFor="profile-upload"
//                         className="cursor-pointer"
//                       >
//                         <input
//                           id="profile-upload"
//                           type="file"
//                           className="hidden"
//                           accept="image/*"
//                         />
//                         <div className="text-white">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="24"
//                             height="24"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             className="mx-auto"
//                           >
//                             <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
//                             <circle cx="12" cy="13" r="4"></circle>
//                           </svg>
//                         </div>
//                       </label>
//                     </div>
//                   </div>
//                   <h5 className="text-lg text-[#222222]">{"Profile"}</h5>
//                   <h4 className="text-2xl text-[#222222]">{"Admin"}</h4>
//                 </div>
//               </div>

//               <div className="col-span-9 space-y-[14px] w-full">
//                 <Form.Item
//                   className="text-lg font-medium text-black -mb-1"
//                   label="Name"
//                   name="name"
//                 >
//                   <Input
//                     size="large"
//                     className="h-[53px] rounded-full"
//                     prefix={<User className="mr-2 text-gray-400" size={18} />}
//                   />
//                 </Form.Item>

//                 <Form.Item
//                   className="text-lg font-medium text-black"
//                   label="Email"
//                   name="email"
//                 >
//                   <Input
//                     size="large"
//                     className="h-[53px] rounded-full"
//                     prefix={<Mail className="mr-2 text-gray-400" size={18} />}
//                   />
//                 </Form.Item>

//                 <Form.Item
//                   className="text-lg font-medium text-black"
//                   label="Phone"
//                   name="phone"
//                 >
//                   <Input
//                     size="large"
//                     className="h-[53px] rounded-full"
//                     placeholder="0161198984"
//                     prefix={<Phone className="mr-2 text-gray-400" size={18} />}
//                   />
//                 </Form.Item>

//                 <Form.Item className="flex justify-end pt-4">
//                   <Button
//                     htmlType="submit"
//                     size="large"
//                     type="primary"
//                     className="px-8 bg-[#4F46E5] text-white hover:bg-[#5254cc] rounded-full font-semibold h-[53px]"
//                   >
//                     Save Changes
//                   </Button>
//                 </Form.Item>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditMyProfile;
import { Button, Form, Input, Upload, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import dashProfile from "../../assets/images/dashboard-profile.png";
import { ArrowLeft, User, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const EditMyProfile = () => {
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const profileData = {
    name: "Jane Kooper",
    email: "enrique@gmail.com",
    phone: "+880 150597212",
    profile: dashProfile,
  };

  const uploadButton = (
    <div>
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <div className="flex items-center gap-3 mb-8 bg-white py-5 px-2 rounded-t-xl">
        <Link to="/settings/profile">
          <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
        </Link>
        <h1 className="text-xl font-semibold text-gray-800">
          Edit Personal Information
        </h1>
      </div>

      <div className="rounded-lg py-4 border-lightGray mt-8">
        <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
          <div className="w-full">
            <div className="py-4 px-8 flex justify-end items-center">
              {/* <h6 className="text-2xl text-white">Personal Information</h6> */}
            </div>

            <Form
              name="basic"
              layout="vertical"
              className="w-full grid grid-cols-12 gap-x-10 px-14 py-8"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              initialValues={{
                name: profileData.name,
                email: profileData.email,
                phone: profileData.phone,
              }}
            >
              <div className="col-span-3 space-y-6">
                <div className="min-h-[300px] flex flex-col items-center justify-center p-8 rounded-lg bg-white">
                  <div className="my-2 relative group">
                    <Upload
                      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                      listType="picture-circle"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                    >
                      {fileList.length >= 1 ? null : (
                        <div>
                          <img
                            src={dashProfile || "/placeholder.svg"}
                            alt=""
                            className="h-30 w-30 rounded-full border-4 border-black"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                            {uploadButton}
                          </div>
                        </div>
                      )}
                    </Upload>
                    {previewImage && (
                      <Image
                        wrapperStyle={{
                          display: "none",
                        }}
                        preview={{
                          visible: previewOpen,
                          onVisibleChange: (visible) => setPreviewOpen(visible),
                          afterOpenChange: (visible) =>
                            !visible && setPreviewImage(""),
                        }}
                        src={previewImage}
                      />
                    )}
                  </div>
                  <h5 className="text-lg text-[#222222]">{"Profile"}</h5>
                  <h4 className="text-2xl text-[#222222]">{"Admin"}</h4>
                </div>
              </div>

              <div className="col-span-9 space-y-[14px] w-full">
                <Form.Item
                  className="text-lg font-medium text-black -mb-1"
                  label="Name"
                  name="name"
                >
                  <Input
                    size="large"
                    className="h-[53px] rounded-full"
                    prefix={<User className="mr-2 text-gray-400" size={18} />}
                  />
                </Form.Item>

                <Form.Item
                  className="text-lg font-medium text-black"
                  label="Email"
                  name="email"
                >
                  <Input
                    size="large"
                    className="h-[53px] rounded-full"
                    prefix={<Mail className="mr-2 text-gray-400" size={18} />}
                  />
                </Form.Item>

                <Form.Item
                  className="text-lg font-medium text-black"
                  label="Phone"
                  name="phone"
                >
                  <Input
                    size="large"
                    className="h-[53px] rounded-full"
                    placeholder="0161198984"
                    prefix={<Phone className="mr-2 text-gray-400" size={18} />}
                  />
                </Form.Item>

                <Form.Item className="flex justify-end pt-4">
                  <Button
                    htmlType="submit"
                    size="large"
                    type="primary"
                    className="px-8 bg-[#4F46E5] text-white hover:bg-[#5254cc] rounded-full font-semibold h-[53px]"
                  >
                    Save Changes
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMyProfile;