import DashboardHomeTable from "../../../Components/DashboardHomeTable";
import { useGetTotalStatisticsQuery } from "../../../redux/features/userSlice";

const DashboardHome = () => {
  const {data} = useGetTotalStatisticsQuery()
  console.log(data?.data?.totalEarning  )
  const total =data?.data
  return (
    <div className="space-y-[24px] font-f">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 lg:gap-x-  gap-y-10 ">
        <div className=" flex items-center justify-center gap-6 border px-[20px] py-[10px] rounded-lg space-y-3 bg-white w- md:w-full">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.21"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 40V64C0 72.8366 7.16344 80 16 80H40H64C72.8366 80 80 72.8366 80 64V40V16C80 7.16344 72.8366 0 64 0H40H16C7.16344 0 0 7.16344 0 16V40Z"
              fill="#A5B4FC"
            />
            <path
              opacity="0.587821"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27 31.1111C27 35.0385 29.9848 38.2222 33.6667 38.2222C37.3486 38.2222 40.3333 35.0385 40.3333 31.1111C40.3333 27.1838 37.3486 24 33.6667 24C29.9848 24 27 27.1838 27 31.1111ZM43.6666 38.2221C43.6666 41.1676 45.9052 43.5555 48.6666 43.5555C51.428 43.5555 53.6666 41.1676 53.6666 38.2221C53.6666 35.2766 51.428 32.8888 48.6666 32.8888C45.9052 32.8888 43.6666 35.2766 43.6666 38.2221Z"
              fill="#6366F1"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M33.6389 41.7778C25.7698 41.7778 19.3137 46.0916 18.6677 54.5764C18.6325 55.0386 19.4611 56.0001 19.8791 56.0001H47.4111C48.6631 56.0001 48.6826 54.9253 48.6632 54.5778C48.1748 45.8546 41.6187 41.7778 33.6389 41.7778ZM48.0019 45.3345C50.0938 48.3055 51.3333 51.9984 51.3333 56H57.7599C58.6641 56 58.6782 55.194 58.6641 54.9334C58.3153 48.4625 53.6795 45.4007 48.0019 45.3345Z"
              fill="#6366F1"
            />
          </svg>

          <div className="text-start">
            <h3 className="text-[20px] text-[#374151] font-f">{"Total User"}</h3>
            <h3 className="text-[48px] font-semibold text-[#374151] font-f">{`${total?.totalUser} `}</h3>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 px-[24px] border   py-[20px] rounded-lg space-y-3 bg-white w-96 md:w-full">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 40V57C0 69.7026 10.2975 80 23 80H40H57C69.7026 80 80 69.7025 80 57V40V23C80 10.2975 69.7025 0 57 0H40H23C10.2975 0 0 10.2975 0 23V40Z"
              fill="#A5B4FC"
            />
            <path
              d="M26 54H56C57.1046 54 58 54.8954 58 56C58 57.1046 57.1046 58 56 58H24C22.8954 58 22 57.1046 22 56V24C22 22.8954 22.8954 22 24 22C25.1046 22 26 22.8954 26 24V54Z"
              fill="#818CF8"
            />
            <path
              opacity="0.5"
              d="M33.459 45.3678C32.7036 46.1737 31.4379 46.2145 30.6321 45.459C29.8262 44.7036 29.7854 43.4379 30.5409 42.6321L38.0409 34.6321C38.7715 33.8528 39.9856 33.7852 40.7982 34.4786L46.7177 39.5299L54.4302 29.7607C55.1146 28.8937 56.3723 28.7458 57.2392 29.4302C58.1062 30.1146 58.2542 31.3723 57.5697 32.2392L48.5697 43.6392C47.8667 44.5297 46.5647 44.6577 45.7017 43.9213L39.6536 38.7603L33.459 45.3678Z"
              fill="#818CF8"
            />
          </svg>

          <div className="text-start">
            <h3 className="text-[20px] text-[#374151]">{"Total Earnings"}</h3>
            <h3 className="text-[48px] font-semibold text-[#374151]">${`${total?.totalEarning}`}</h3>
          </div>
        </div>
      </div>
      {/* <BarChartComponent/> */}
      <DashboardHomeTable />
    </div>
  );
};

export default DashboardHome;
