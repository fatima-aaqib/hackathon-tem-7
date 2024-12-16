import { ChevronDown } from "lucide-react";
import PopularCars from "../Components/Popular-car.";


/* eslint-disable @next/next/no-img-element */
export default function ShowMore() {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-1/4 p-4 sm:p-6 bg-white">
          {/* Type Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">TYPE</h2>
            {["Sport (10)", "SUV (12)", "MPV (16)", "Sedan (20)", "Coupe (14)", "Hatchback (14)"].map(
              (type, index) => (
                <div className="flex items-center mb-2" key={index}>
                  <input
                    checked={index < 2}
                    className="form-checkbox text-blue-500"
                    type="checkbox"
                  />
                  <span className="ml-2">{type}</span>
                </div>
              )
            )}
          </div>

          {/* Capacity Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">CAPACITY</h2>
            {["2 Person (10)", "4 Person (14)", "6 Person (12)", "8 or More (16)"].map(
              (capacity, index) => (
                <div className="flex items-center mb-2" key={index}>
                  <input
                    checked={index === 0}
                    className="form-checkbox text-blue-500"
                    type="checkbox"
                  />
                  <span className="ml-2">{capacity}</span>
                </div>
              )
            )}
          </div>

          {/* Price Section */}
          <div>
            <h2 className="text-lg font-semibold mb-2">PRICE</h2>
            <input
              className="w-full mb-2"
              max="100"
              min="0"
              type="range"
              defaultValue="50"
            />
            <div className="text-right">
              <span>Max. $100.00</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
          {/* Pick-Up Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="pickup"
                name="type"
                className="text-blue-600"
                defaultChecked
              />
              <label htmlFor="pickup" className="text-lg font-medium">
                Pick - Up
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {["Locations", "Date", "Time"].map((label, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    {label}
                  </label>
                  <div className="relative">
                    <select className="w-full p-2 border rounded-lg appearance-none pr-8">
                      <option>
                        {label === "Locations" ? "Select your city" : `Enter your ${label.toLowerCase()}`}
                      </option>
                    </select>
                    <ChevronDown
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Switch Button */}
          <div className="flex justify-center">
            <button className="bg-blue-600 h-[60px] p-3 rounded-lg text-white hover:bg-blue-700 transition">
              <svg
                className="h-[40px] w-[40px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input type="radio" id="dropoff" name="type" className="text-blue-600" />
              <label htmlFor="dropoff" className="text-lg font-medium">
                Drop - Off
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {["Locations", "Date", "Time"].map((label, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    {label}
                  </label>
                  <div className="relative">
                    <select className="w-full p-2 border rounded-lg appearance-none pr-8">
                      <option>
                        {label === "Locations" ? "Select your city" : `Enter your ${label.toLowerCase()}`}
                      </option>
                    </select>
                    <ChevronDown
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Cars */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <PopularCars />
          </div>
        </div>
      </div>
    </div>
  );
}
