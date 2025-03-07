import { ArrowLeft, Image } from "lucide-react";
import { Link } from "react-router-dom";

const AddSubscription = () => {
  return (
    <div className="min-h-screen  ">
      <div className="flex items-center gap-3 mb-8 bg-white py-5 px-2 rounded-t-xl">
        <Link to={'/subscription'}>
          <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
        </Link>
        <h1 className="text-xl font-semibold text-gray-800">
          Add Subscription
        </h1>
      </div>
      <div className="max-w-5xl mx-start  rounded-3xl ">
        {/* Header */}

        {/* Form */}
        <form className="space-y-4">
          {/* Upload Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <button
                type="button"
                className="w-full h-12 px-4 text-gray-600 bg-white border border-gray-200 rounded-full flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-500">Upload Image</span>
                {/* <Upload className="w-5 h-5 text-gray-400" /> */}
                <Image className="w-6 h-6 text-[#4F46E5]" />
              </button>
              <input type="file" className="hidden" accept="image/*" />
            </div>

            {/* Package Name */}
            <div>
              <input
                type="text"
                placeholder="Package Name"
                className="w-full h-12 px-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Package Amount and Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Package Amount"
                className="w-full h-12 px-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Package Duration"
                className="w-full h-12 px-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Add Features */}
          <div>
            <input
              type="text"
              placeholder="Add Features"
              className="w-full h-12 px-4 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
            />
          </div>

          {/* Create Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-[#6366f1] text-white px-12 py-3 rounded-full hover:bg-[#5254cc] transition-colors font-medium"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSubscription;
