// import { FaArrowLeft } from "react-icons/fa6";
// import { MdLockOutline } from "react-icons/md";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { useChangePasswordMutation } from "../../../../redux/features/authSlice";

// const ChangePassword = () => {
//     const navigate = useNavigate();

//     const [changePassword]= useChangePasswordMutation()
//     return (
//         <div className="flex items-center justify-center ">
//             <div className="bg-white rounded-lg shadow-lg mt-8 w-[610px] h-[725px] mx-auto py-10 px-8">
//                 <div className="flex flex-col  w-full max-w-md mx-auto mt-10 p-4 rounded-lg space-y-4">
//                     <div className="flex items-center gap-2">
//                         <FaArrowLeft />
//                         <h1>Change password</h1>
//                     </div>
//                     <h1>Your password must be 8-10 character long.</h1>
//                     {/* Input Fields */}
//                     <div className="flex flex-col w-full space-y-4">
//                         {[
//                             { label: 'Enter old password', placeholder: 'Enter old password' },
//                             { label: 'Set new password', placeholder: 'Set new password' },
//                             { label: 'Re-enter new password', placeholder: 'Re-enter new password' },
//                         ].map(({ label, placeholder }, index) => (
//                             <div>
//                                 <h1 className="mb-3">{label}</h1>
//                                 <div key={index} className="relative flex items-center">
//                                     {/* Lock Icon */}
//                                     <MdLockOutline className="absolute left-3 " />
//                                     {/* Input Field */}
//                                     <input
//                                         type="password"
//                                         placeholder={placeholder}
//                                         className="w-full pl-10 pr-10 py-2 border border-black rounded-lg placeholder:text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
//                                     />
//                                     {/* Eye Icon */}
//                                     <FaRegEyeSlash className="absolute right-3  cursor-pointer" />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Forgot Password */}
//                     <p className="mt-4 text-sm text-black font-bold cursor-pointer hover:underline" onClick={(e) => navigate(`forgot-password`)}>
//                         Forgot Password?
//                     </p>

//                     {/* Update Password Button */}
//                     <button className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
//                         Update Password
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ChangePassword


import { FaArrowLeft } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useChangePasswordMutation } from "../../../../redux/features/authSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { message } from "antd";
// import { toast } from "react-toastify";

const ChangePassword = () => {
    const navigate = useNavigate();
    const [changePassword] = useChangePasswordMutation();

    // State for input fields
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    // State for password visibility
    const [showPassword, setShowPassword] = useState({
        currentPassword: false,
        newPassword: false,
        confirmPassword: false,
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Toggle password visibility
    const togglePasswordVisibility = (field) => {
        setShowPassword({
            ...showPassword,
            [field]: !showPassword[field],
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate passwords
        if (formData.newPassword !== formData.confirmPassword) {
            toast.error("New passwords do not match.");
            return;
        }

        if (formData.newPassword.length < 8 || formData.newPassword.length > 10) {
            toast.error("Password must be 8-10 characters long.");
            return;
        }

        try {
            // Call the changePassword mutation
            const response = await changePassword({
                currentPassword: formData.currentPassword,
                newPassword: formData.newPassword,
                confirmPassword: formData.confirmPassword,
            }).unwrap();
            console.log(response)

            // Handle success
            toast.success(response.message || "Password updated successfully!");
            navigate("/"); // Redirect to dashboard or another page
        } catch (error) {
            // Handle error
            toast.error(error.data?.message || "Failed to update password.");
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg mt-8 w-[610px] h-[725px] mx-auto py-10 px-8">
                <div className="flex flex-col w-full max-w-md mx-auto mt-10 p-4 rounded-lg space-y-4">
                    {/* Back Button and Title */}
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate(-1)}>
                        <FaArrowLeft />
                        <h1 className="text-xl font-bold">Change Password</h1>
                    </div>
                    <p className="text-sm text-gray-600">Your password must be 8-10 characters long.</p>

                    {/* Input Fields */}
                    <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-4">
                        {[
                            { label: "Enter old password", placeholder: "Enter old password", name: "currentPassword" },
                            { label: "Set new password", placeholder: "Set new password", name: "newPassword" },
                            { label: "Re-enter new password", placeholder: "Re-enter new password", name: "confirmPassword" },
                        ].map(({ label, placeholder, name }, index) => (
                            <div key={index}>
                                <h1 className="mb-3 text-sm font-medium">{label}</h1>
                                <div className="relative flex items-center">
                                    {/* Lock Icon */}
                                    <MdLockOutline className="absolute left-3 text-gray-500" />
                                    {/* Input Field */}
                                    <input
                                        type={showPassword[name] ? "text" : "password"}
                                        name={name}
                                        placeholder={placeholder}
                                        value={formData[name]}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-10 py-2 border border-black rounded-lg placeholder:text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
                                        required
                                    />
                                    {/* Eye Icon */}
                                    <div
                                        className="absolute right-3 cursor-pointer"
                                        onClick={() => togglePasswordVisibility(name)}
                                    >
                                        {showPassword[name] ? <FaRegEye /> : <FaRegEyeSlash />}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Forgot Password Link */}
                        <p
                            className="mt-4 text-sm text-black font-bold cursor-pointer hover:underline"
                            onClick={() => navigate("/forgot-password")}
                        >
                            Forgot Password?
                        </p>

                        {/* Update Password Button */}
                        <button
                            type="submit"
                            className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
                        >
                            Update Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;