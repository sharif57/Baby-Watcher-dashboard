import { Modal, Table } from "antd";
import { useState } from "react";
import { useGetAllUsersQuery } from "../../../redux/features/userSlice";

const Users = () => {
  const { data: users, isLoading } = useGetAllUsersQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    date: "",
  });

  // Function to show modal with user details
  const showModal = (data) => {
    setIsModalOpen(true);
    setModalData({
      name: data.name,
      email: data.email,
      mobile: data.phone || "**** **** **** *426", // Use phone from data if available
      address: "N/A", // Placeholder, as address is not in the API response
      date: new Date(data.createdAt).toLocaleDateString(), // Format date
    });
  };

  // Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Table columns
  const columns = [
    {
      title: "#TRID",
      dataIndex: "TRID",
      key: "TRID",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
    },
    {
      title: "Date",
      key: "createdAt",
      dataIndex: "createdAt",
      render: (date) => new Date(date).toLocaleDateString(), // Format date
    },
    {
      title: "Action",
      key: "Review",
      align: "center",
      render: (_, data) => (
        <div className="items-center justify-around text-center flex">
          {/* Review Icon */}
          {/* <img
            src={exlamIcon || "/placeholder.svg"}
            alt=""
            className="btn px-3 py-1 text-sm rounded-full cursor-pointer"
            onClick={() => showModal(data)}
          /> */}
          <svg
              onClick={() => showModal(data)}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3889 16.5H11.6111V9.77778H10.3889V16.5ZM11 8.03855C11.2135 8.03855 11.3923 7.96644 11.5366 7.82222C11.6808 7.678 11.7525 7.49915 11.7517 7.28567C11.7509 7.07219 11.6787 6.89374 11.5353 6.75033C11.3919 6.60693 11.2135 6.53481 11 6.534C10.7865 6.53318 10.6081 6.6053 10.4647 6.75033C10.3213 6.89537 10.2491 7.07422 10.2483 7.28689C10.2475 7.49955 10.3196 7.678 10.4647 7.82222C10.6097 7.96644 10.7881 8.03855 11 8.03855ZM11.0037 22C9.48241 22 8.05241 21.7116 6.71367 21.1347C5.37493 20.557 4.21015 19.7731 3.21933 18.7831C2.22852 17.7931 1.44426 16.6296 0.866556 15.2924C0.288852 13.9553 0 12.5257 0 11.0037C0 9.48159 0.288852 8.05159 0.866556 6.71367C1.44344 5.37493 2.22607 4.21015 3.21444 3.21933C4.20282 2.22852 5.36678 1.44426 6.70633 0.866556C8.04589 0.288852 9.47589 0 10.9963 0C12.5168 0 13.9468 0.288852 15.2863 0.866556C16.6251 1.44344 17.7899 2.22648 18.7807 3.21567C19.7715 4.20485 20.5557 5.36881 21.1334 6.70755C21.7111 8.0463 22 9.47589 22 10.9963C22 12.5168 21.7116 13.9468 21.1347 15.2863C20.5578 16.6259 19.7739 17.7907 18.7831 18.7807C17.7923 19.7707 16.6287 20.5549 15.2924 21.1334C13.9561 21.712 12.5266 22.0008 11.0037 22ZM11 20.7778C13.7296 20.7778 16.0417 19.8306 17.9361 17.9361C19.8306 16.0417 20.7778 13.7296 20.7778 11C20.7778 8.27037 19.8306 5.95833 17.9361 4.06389C16.0417 2.16944 13.7296 1.22222 11 1.22222C8.27037 1.22222 5.95833 2.16944 4.06389 4.06389C2.16944 5.95833 1.22222 8.27037 1.22222 11C1.22222 13.7296 2.16944 16.0417 4.06389 17.9361C5.95833 19.8306 8.27037 20.7778 11 20.7778Z"
              fill="#4B5563"
            />
          </svg>
        </div>
      ),
    },
  ];

  // Map API data to table data
  const data = users?.data?.result?.map((user, index) => ({
    TRID: index + 1,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
    _id: user._id,
  }));

  return (
    <div className="rounded-lg border py-4 bg-white mt-8 recent-users-table">
      <h3 className="text-2xl text-black mb-4 pl-2">User List</h3>
      {/* Ant Design Table */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"] }}
        className="rounded-lg"
        loading={isLoading}
        rowKey="_id"
      />

      {/* User Details Modal */}
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={handleCloseModal}
        width={400}
        centered
        closable={false}
        className="user-details-modal"
      >
        <div className="px-4 py-2">
          <h2 className="text-center text-xl font-semibold mb-6">
            User Details
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">User Name :</span>
              <span className="text-gray-800">{modalData.name}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Email :</span>
              <span className="text-gray-800">{modalData.email}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Mobile Number :</span>
              <span className="text-gray-800">{modalData.mobile}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Address :</span>
              <span className="text-gray-800">{modalData.address}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Date :</span>
              <span className="text-gray-800">{modalData.date}</span>
            </div>
          </div>

          <button
            onClick={handleCloseModal}
            className="w-full mt-8 bg-[#6366f1] text-white py-3 rounded-full hover:bg-[#5254cc] transition-colors"
          >
            Okay
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Users;
