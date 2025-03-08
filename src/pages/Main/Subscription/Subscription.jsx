import { CheckCircle, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Subscription = () => {
  return (
    <div className="bg-[#e6e9ff] bg-gradient-to-br from-[#e6e9ff] to-[#d9e0ff] min-h-screen -8">
      <Link to={'/addsubscription'}>
        <div className="flex justify-end ">
          <button className="  bg-[#4F46E5] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#5254cc] transition-colors">
            <div className="flex items-center gap-1">
              <Plus size={16} />
              <span>Add New Subscription</span>
            </div>
          </button>
        </div>
      </Link>

      <div className="max-w-7xl  relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Basic Plan */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-[#6366f1]">
                <svg
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.21"
                    d="M0 16C0 7.16344 7.16344 0 16 0H52C60.8366 0 68 7.16344 68 16V52C68 60.8366 60.8366 68 52 68H16C7.16344 68 0 60.8366 0 52V16Z"
                    fill="#A5B4FC"
                  />
                  <path
                    d="M42.6267 40.4398L43.1467 44.6532C43.28 45.7598 42.0933 46.5332 41.1467 45.9598L36.5333 43.2132C36.2133 43.0265 36.1333 42.6265 36.3067 42.3065C36.9733 41.0798 37.3333 39.6932 37.3333 38.3065C37.3333 33.4265 33.1467 29.4532 28 29.4532C26.9467 29.4532 25.92 29.6132 24.96 29.9332C24.4667 30.0932 23.9867 29.6398 24.1067 29.1332C25.32 24.2798 29.9867 20.6665 35.56 20.6665C42.0667 20.6665 47.3333 25.5865 47.3333 31.6532C47.3333 35.2532 45.48 38.4398 42.6267 40.4398Z"
                    fill="#818CF8"
                  />
                  <path
                    d="M35.3333 38.3065C35.3333 39.8931 34.7467 41.3598 33.76 42.5198C32.44 44.1198 30.3467 45.1465 28 45.1465L24.52 47.2131C23.9333 47.5731 23.1867 47.0798 23.2667 46.3998L23.6 43.7731C21.8133 42.5331 20.6667 40.5465 20.6667 38.3065C20.6667 35.9598 21.92 33.8931 23.84 32.6665C25.0267 31.8931 26.4533 31.4531 28 31.4531C32.0533 31.4531 35.3333 34.5198 35.3333 38.3065Z"
                    fill="#818CF8"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[20px]">Basic Plan</h3>
                <p className="font-medium text-[24px] text-[#4F46E5]">Free</p>
              </div>
            </div>

            <div className="mb-6 flex-grow">
              <p className="text-gray-500 mb-3">Features</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#6366f1]" />
                  <span>Messaging Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#6366f1]" />
                  <span>No Video Feature</span>
                </li>
              </ul>
            </div>

            <button className="w-full py-2 border border-[#4F46E5] rounded-full hover:bg-gray-50 transition-colors">
              Delete
            </button>
          </div>

          {/* Standard Plan */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-[#6366f1]">
                <svg
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.21"
                    d="M0 16C0 7.16344 7.16344 0 16 0H52C60.8366 0 68 7.16344 68 16V52C68 60.8366 60.8366 68 52 68H16C7.16344 68 0 60.8366 0 52V16Z"
                    fill="#A5B4FC"
                  />
                  <path
                    d="M34 20.6665C26.64 20.6665 20.6667 26.6398 20.6667 33.9998C20.6667 41.3598 26.64 47.3332 34 47.3332C41.36 47.3332 47.3334 41.3598 47.3334 33.9998C47.3334 26.6398 41.36 20.6665 34 20.6665ZM37.5467 36.3065L35.84 37.2932L34.1334 38.2798C31.9334 39.5465 30.1334 38.5065 30.1334 35.9732V33.9998V32.0265C30.1334 29.4798 31.9334 28.4532 34.1334 29.7198L35.84 30.7065L37.5467 31.6932C39.7467 32.9598 39.7467 35.0398 37.5467 36.3065Z"
                    fill="#818CF8"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[20px]">Standard Plan</h3>
                <p className="font-medium text-[24px] text-[#4F46E5]">
                  $X/month
                </p>
              </div>
            </div>

            <div className="mb-6 flex-grow">
              <p className="text-gray-500 mb-3">Features</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#6366f1]" />
                  <span>Video Access (3 videos per day)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#6366f1]" />
                  
                  <span>Messaging Access</span>
                </li>
              </ul>
            </div>

            <button className="w-full py-2 border border-[#4F46E5] rounded-full hover:bg-gray-50 transition-colors">
              Delete
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-[#6366f1]">
                <svg
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.21"
                    d="M0 16C0 7.16344 7.16344 0 16 0H52C60.8366 0 68 7.16344 68 16V52C68 60.8366 60.8366 68 52 68H16C7.16344 68 0 60.8366 0 52V16Z"
                    fill="#A5B4FC"
                  />
                  <path
                    d="M40.6667 47.3335H27.3334C26.7867 47.3335 26.3334 46.8802 26.3334 46.3335C26.3334 45.7868 26.7867 45.3335 27.3334 45.3335H40.6667C41.2134 45.3335 41.6667 45.7868 41.6667 46.3335C41.6667 46.8802 41.2134 47.3335 40.6667 47.3335Z"
                    fill="#818CF8"
                  />
                  <path
                    d="M45.1333 25.3602L39.7999 29.1735C39.0933 29.6802 38.0799 29.3735 37.7733 28.5602L35.2533 21.8402C34.8266 20.6802 33.1866 20.6802 32.7599 21.8402L30.2266 28.5469C29.9199 29.3735 28.9199 29.6802 28.2133 29.1602L22.8799 25.3469C21.8133 24.6002 20.3999 25.6535 20.8399 26.8935L26.3866 42.4269C26.5733 42.9602 27.0799 43.3069 27.6399 43.3069H40.3466C40.9066 43.3069 41.4133 42.9469 41.5999 42.4269L47.1466 26.8935C47.5999 25.6535 46.1866 24.6002 45.1333 25.3602ZM37.3333 37.6669H30.6666C30.1199 37.6669 29.6666 37.2135 29.6666 36.6669C29.6666 36.1202 30.1199 35.6669 30.6666 35.6669H37.3333C37.8799 35.6669 38.3333 36.1202 38.3333 36.6669C38.3333 37.2135 37.8799 37.6669 37.3333 37.6669Z"
                    fill="#818CF8"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[20px]">Premium Plan</h3>
                <p className="font-medium text-[24px] text-[#4F46E5]">
                  $X/year
                </p>
              </div>
            </div>

            <div className="mb-6 flex-grow">
              <p className="text-gray-500 mb-3">Features</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#6366f1]" />
                  <span>Unlimited Video Requests</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#6366f1]" />
                  <span>Video Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#6366f1]" />
                  <span>Video Downloads</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#6366f1]" />
                  <span>Messaging Access</span>
                </li>
              </ul>
            </div>

            <button className="w-full py-2 border border-[#4F46E5] rounded-full hover:bg-gray-50 transition-colors">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
