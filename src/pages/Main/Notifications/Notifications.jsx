// import { ArrowLeft, Bell } from "lucide-react"
// import { Link } from "react-router-dom"
// import { useNotificationGetQuery } from "../../../redux/features/notificationSlice"

// const notifications = [
//   {
//     id: 1,
//     message: "You have received $500 from John Doe",
//     time: "Fri, 12:30pm",
//     highlighted: true,
//   },
//   {
//     id: 2,
//     message: "New User registered.",
//     time: "Fri, 12:30pm",
//     highlighted: false,
//   },
//   {
//     id: 3,
//     message: "New User registered.",
//     time: "Fri, 12:30pm",
//     highlighted: false,
//   },
//   {
//     id: 4,
//     message: "New User registered.",
//     time: "Fri, 12:30pm",
//     highlighted: false,
//   },
// ]

// const Notifications = () => {

//   const {data} =useNotificationGetQuery({limit:100}) 
//   console.log(data?.data?.result)
//   return (
//     <div className="min-h-screen p-6">
//       <div className="w-full mx-auto bg-white rounded-3xl shadow-sm p-6">
//         {/* Header */}
//         <div className="flex items-center gap-3 mb-6 px-2">
//           <Link to={"/"}>
//             <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
//               <ArrowLeft className="w-5 h-5 text-gray-600" />
//             </button>
//           </Link>
//           <h1 className="text-xl font-semibold text-gray-800">Notifications</h1>
//         </div>

//         {/* Notifications List */}
//         <div className="space-y-4">
//           {notifications.map((notification) => (
//             <div
//               key={notification.id}
//               className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${
//                 notification.highlighted ? "bg-[#6366f1] text-white" : "hover:bg-gray-50"
//               }`}
//             >
//               <div className={`p-2 rounded-full ${notification.highlighted ? "bg-white/20" : "bg-[#6366f1]/10"}`}>
//                 <Bell className={`w-5 h-5 ${notification.highlighted ? "text-white" : "text-[#6366f1]"}`} />
//               </div>

//               <div className="flex-1">
//                 <p className={`font-medium ${notification.highlighted ? "text-white" : "text-gray-800"}`}>
//                   {notification.message}
//                 </p>
//                 <p className={`text-sm ${notification.highlighted ? "text-white/80" : "text-gray-500"}`}>
//                   {notification.time}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Notifications

import { ArrowLeft, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useNotificationGetQuery } from "../../../redux/features/notificationSlice";

const Notifications = () => {
  const { data, isLoading, isError } = useNotificationGetQuery();
  const notifications = data?.data?.result || [];

  return (
    <div className="min-h-screen p-6">
      <div className="w-full mx-auto bg-white rounded-3xl shadow-sm p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 px-2">
          <Link to={"/"}>
            <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
          </Link>
          <h1 className="text-xl font-semibold text-gray-800">Notifications</h1>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification._id}
              className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${
                !notification.read ? "hover:bg-[#6366f1] hover:text-white" : "hover:bg-gray-50"
              }`}
            >
              <div className={`p-2 rounded-full ${!notification.read ? "bg-white/20" : "bg-[#6366f1]/10"}`}>
                <Bell
                  className={`w-5 h-5 ${
                    !notification.read ? "text-black group-hover:text-white" : "text-[#6366f1]"
                  }`}
                />
              </div>

              <div className="flex-1">
                <p
                  className={`font-medium ${
                    !notification.read ? "text-black group-hover:text-white" : "text-gray-800"
                  }`}
                >
                  {notification.text}
                </p>
                <p
                  className={`text-sm ${
                    !notification.read ? "text-black group-hover:text-white" : "text-gray-500"
                  }`}
                >
                  {new Date(notification.createdAt).toLocaleString()} {/* Format date and time */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;