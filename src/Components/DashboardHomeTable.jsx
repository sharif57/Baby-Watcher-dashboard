
  // import { Modal, Table } from "antd"
  // import exlamIcon from "../assets/images/exclamation-circle.png"
  // import { useState } from "react"
  // import { useRecentTransactionsQuery } from "../redux/features/transactionsSlice"

  // const DashboardHomeTable = () => {
  //   const {data: transaction}= useRecentTransactionsQuery()
  //   console.log(transaction)
  //   const [isModalOpen, setIsModalOpen] = useState(false)
  //   const [modalData, setModalData] = useState({
  //     name: "Victor",
  //     email: "Basic",
  //     mobile: "**** **** **** *426",
  //     address: "Victor",
  //     date: "10-15-2025",
  //   })

  //   const showModal = (data) => {
  //     setIsModalOpen(true)
  //     setModalData({
  //       name: data.name,
  //       email: data.Email,
  //       mobile: "**** **** **** *426", // This would come from your data
  //       address: "Victor", // This would come from your data
  //       date: data.Date,
  //     })
  //   }

  //   const handleCloseModal = () => {
  //     setIsModalOpen(false)
  //   }

  //   const columns = [
  //     {
  //       title: "#TRID",
  //       dataIndex: "TRID",
  //       key: "TRID",
  //       render: (text) => <a>{text}</a>,
  //     },
  //     {
  //       title: "User Name",
  //       dataIndex: "name",
  //       key: "name",
  //     },
  //     {
  //       title: "Email",
  //       dataIndex: "Email",
  //       key: "Email",
  //     },
  //     {
  //       title: "Subscription",
  //       key: "Subscription",
  //       dataIndex: "Subscription",
  //     },
  //     {
  //       title: "Date",
  //       key: "Date",
  //       dataIndex: "Date",
  //     },
  //     {
  //       title: "Action",
  //       key: "Review",
  //       align: "center", // Fixed typo from "aligen" to "align"
  //       render: (_, data) => (
  //         <div className="items-center justify-around textcenter flex">
  //           {/* Review Icon */}
  //           <img
  //             src={exlamIcon || "/placeholder.svg"}
  //             alt=""
  //             className="btn px-3 py-1 text-sm rounded-full cursor-pointer"
  //             onClick={() => showModal(data)}
  //           />
  //         </div>
  //       ),
  //     },
  //   ]

  //   const data = []
  //   for (let index = 0; index < 6; index++) {
  //     data.push({
  //       TRID: `${index + 1}`,
  //       name: "Henry",
  //       Email: "sharif@gmail.com",
  //       Subscription: "Standard",
  //       Review: "See Review",
  //       Date: "16 Apr 2024",
  //       _id: index,
  //     })
  //   }

  //   return (
  //     <div className="rounded-lg border py-4 bg-white mt-8 recent-users-table">
  //       <h3 className="text-2xl text-black mb-4 pl-2">Recent Transactions</h3>
  //       {/* Ant Design Table */}
  //       <Table columns={columns} dataSource={data} pagination={{ position: ["bottomCenter"] }} className="rounded-lg" />

  //       {/* User Details Modal */}
  //       <Modal
  //         open={isModalOpen}
  //         footer={null}
  //         onCancel={handleCloseModal}
  //         width={400}
  //         centered
  //         closable={false}
  //         className="user-details-modal"
  //       >
  //         <div className="px-4 py-2">
  //           <h2 className="text-center text-xl font-semibold mb-6">User Details</h2>

  //           <div className="space-y-4">
  //             <div className="flex justify-between items-center">
  //               <span className="text-gray-600">User Name :</span>
  //               <span className="text-gray-800">{modalData.name}</span>
  //             </div>

  //             <div className="flex justify-between items-center">
  //               <span className="text-gray-600">Email :</span>
  //               <span className="text-gray-800">{modalData.email}</span>
  //             </div>

  //             <div className="flex justify-between items-center">
  //               <span className="text-gray-600">Mobile Number :</span>
  //               <span className="text-gray-800">{modalData.mobile}</span>
  //             </div>

  //             <div className="flex justify-between items-center">
  //               <span className="text-gray-600">Address :</span>
  //               <span className="text-gray-800">{modalData.address}</span>
  //             </div>

  //             <div className="flex justify-between items-center">
  //               <span className="text-gray-600">Date :</span>
  //               <span className="text-gray-800">{modalData.date}</span>
  //             </div>
  //           </div>

  //           <button
  //             onClick={handleCloseModal}
  //             className="w-full mt-8 bg-[#6366f1] text-white py-3 rounded-full hover:bg-[#5254cc] transition-colors"
  //           >
  //             Okay
  //           </button>
  //         </div>
  //       </Modal>
  //     </div>
  //   )
  // }

  // export default DashboardHomeTable

  import { Modal, Table } from "antd"
  import exlamIcon from "../assets/images/exclamation-circle.png"
  import { useState } from "react"
  import { useRecentTransactionsQuery } from "../redux/features/transactionsSlice"
  
  const DashboardHomeTable = () => {
    const { data: transactionsData, isLoading } = useRecentTransactionsQuery()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalData, setModalData] = useState({
      name: "",
      email: "",
      mobile: "",
      address: "",
      date: "",
      packageName: "",
      packagePrice: ""
    })
  
    const showModal = (data) => {
      setIsModalOpen(true)
      setModalData({
        name: data.userId.name,
        email: data.userId.email,
        mobile: data.userId.phone || "N/A",
        address: data.userId.address || "N/A",
        date: new Date(data.purchaseDate).toLocaleDateString(),
        packageName: data.packageName,
        packagePrice: `$${data.packagePrice}`
      })
    }
  
    const handleCloseModal = () => {
      setIsModalOpen(false)
    }
  
    const columns = [
      {
        title: "#TRID",
        dataIndex: "_id",
        key: "_id",
        render: (text) => <a>{text.slice(-6)}</a>, // Show last 6 characters of ID
      },
      {
        title: "User Name",
        dataIndex: ["userId", "name"],
        key: "name",
      },
      {
        title: "Email",
        dataIndex: ["userId", "email"],
        key: "email",
      },
      {
        title: "Subscription",
        key: "packageName",
        dataIndex: "packageName",
      },
      {
        title: "Price",
        key: "packagePrice",
        dataIndex: "packagePrice",
        render: (price) => `$${price}`
      },
      {
        title: "Date",
        key: "purchaseDate",
        dataIndex: "purchaseDate",
        render: (date) => new Date(date).toLocaleDateString()
      },
      {
        title: "Action",
        key: "action",
        align: "center",
        render: (_, data) => (
          <div className="items-center justify-around textcenter flex">
            <img
              src={exlamIcon || "/placeholder.svg"}
              alt="Details"
              className="btn px-3 py-1 text-sm rounded-full cursor-pointer"
              onClick={() => showModal(data)}
            />
          </div>
        ),
      },
    ]
  
    return (
      <div className="rounded-lg border py-4 bg-white mt-8 recent-users-table">
        <h3 className="text-2xl text-black mb-4 pl-2">Recent Transactions</h3>
        {/* Ant Design Table */}
        <Table 
          columns={columns} 
          dataSource={transactionsData?.data?.result || []} 
          loading={isLoading}
          pagination={{ position: ["bottomCenter"] }} 
          className="rounded-lg" 
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
            <h2 className="text-center text-xl font-semibold mb-6">Transaction Details</h2>
  
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
                <span className="text-gray-600">Package :</span>
                <span className="text-gray-800">{modalData.packageName}</span>
              </div>
  
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Price :</span>
                <span className="text-gray-800">{modalData.packagePrice}</span>
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
    )
  }
  
  export default DashboardHomeTable