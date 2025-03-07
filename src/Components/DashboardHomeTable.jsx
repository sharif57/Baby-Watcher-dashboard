import { Table } from "antd";
import exlamIcon from "../assets/images/exclamation-circle.png";

const DashboardHomeTable = () => {


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
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Subscription",
      key: "Subscription",
      dataIndex: "Subscription",
    },
    {
      title: "Date",
      key: "Date",
      dataIndex: "Date",
    },
    {
      title: "Action",
      key: "Review",
      aligen: 'center',
      render: (_, data) => (
        <div className="  items-center justify-around textcenter flex">
          {/* Review Icon */}
          <img src={exlamIcon} alt="" className="btn  px-3 py-1 text-sm rounded-full" />
          {/* <Link to={'/reviews'} className="btn bg-black text-white px-3 py-1 text-sm rounded-full">
           
            View
          </Link> */}
        </div>
      ),
    },
  ];

  const data = [];
  for (let index = 0; index < 6; index++) {
    data.push({
      TRID: `${index + 1}`,
      name: "Henry",
      Email: "sharif@gmail.com",
      Subscription: "Standard",
      Review: "See Review",
      Date: "16 Apr 2024",
      _id: index,
    });
  }

  return (
    <div className="rounded-lg border py-4 bg-white mt-8 recent-users-table">
      <h3 className="text-2xl text-black mb-4 pl-2">Recent Transactions</h3>
      {/* Ant Design Table */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"] }}
        className="rounded-lg"
      />
    </div>
  );  
};

export default DashboardHomeTable;
