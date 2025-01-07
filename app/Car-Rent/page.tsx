/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { ChevronDown } from "lucide-react";

const CarRental = () => {
  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - Mobile Menu Button */}
        <div className="lg:hidden p-4 bg-white">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block w-64 bg-white p-6 min-h-screen">
          <div className="mb-8">
            <h2 className="text-gray-400 text-sm uppercase font-bold">Main Menu</h2>
            <ul className="mt-4 space-y-4">
              <li>
                <a className="flex items-center bg-[#3563E9] px-4 h-12 text-white rounded-lg" href="#">
                  <span>Dashboard</span>
                </a>
              </li>
              {['Car Rent', 'Insight', 'Reimburse', 'Inbox', 'Calendar'].map((item) => (
                <li key={item}>
                  <a className="flex items-center text-gray-600 px-4 h-12 hover:bg-gray-50 rounded-lg" href="#">
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-gray-400 text-sm uppercase font-bold">Preferences</h2>
            <ul className="mt-4 space-y-4">
              {['Settings', 'Help & Center'].map((item) => (
                <li key={item}>
                  <a className="flex items-center text-gray-600 px-4 h-12 hover:bg-gray-50 rounded-lg" href="#">
                    <span>{item}</span>
                  </a>
                </li>
              ))}
              <li>
                <a className="flex items-center justify-between text-gray-600 px-4 h-12 hover:bg-gray-50 rounded-lg" href="#">
                  <span>Dark Mode</span>
                  <div className="w-10 h-6 bg-gray-200 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <a className="flex items-center text-gray-600 px-4 h-12 hover:bg-gray-50 rounded-lg" href="#">
            <span>Log Out</span>
          </a>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Details Rental */}
            <div className="col-span-1 xl:col-span-2 bg-white p-4 md:p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Details Rental</h2>
              
              {/* Map */}
              <div className="bg-gray-100 p-2 md:p-4 rounded-lg mb-4">
                <img 
                  alt="Map showing route" 
                  className="w-full h-48 md:h-96 object-cover rounded-lg"
                  src="/Maps%20(1).png"
                />
              </div>

              {/* Car Details */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                <img 
                  alt="Nissan GT-R" 
                  className="w-full sm:w-28 h-32 sm:h-16 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4"
                  src="/api/placeholder/100/60"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold">Nissan GT - R</h3>
                  <p className="text-gray-500">Sport Car</p>
                </div>
                <span className="text-gray-500 mt-2 sm:mt-0">#9761</span>
              </div>

              {/* Pick-Up Section */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <input type="radio" id="pickup" name="type" className="text-blue-600" defaultChecked />
                    <label htmlFor="pickup" className="text-lg font-medium">Pick - Up</label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Locations', 'Date', 'Time'].map((label) => (
                      <div key={label} className="space-y-1">
                        <label className="text-sm font-medium text-gray-600">{label}</label>
                        <div className="relative">
                          <select className="w-full p-2 border rounded-lg appearance-none pr-8">
                            <option>Select {label.toLowerCase()}</option>
                          </select>
                          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Drop-Off Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <input type="radio" id="dropoff" name="type" className="text-blue-600" />
                    <label htmlFor="dropoff" className="text-lg font-medium">Drop - Off</label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Locations', 'Date', 'Time'].map((label) => (
                      <div key={label} className="space-y-1">
                        <label className="text-sm font-medium text-gray-600">{label}</label>
                        <div className="relative">
                          <select className="w-full p-2 border rounded-lg appearance-none pr-8">
                            <option>Select {label.toLowerCase()}</option>
                          </select>
                          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Total Price */}
              <div className="flex items-center justify-between mt-6">
                <span className="text-gray-500">Total Rental Price</span>
                <span className="text-2xl font-bold">$80.00</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-1 space-y-6">
              {/* Top 5 Cars */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Top 5 Cars</h2>
                <img src="/top%20(5).png" alt="Top 5 Cars" className="w-full h-auto rounded-lg" />
              </div>

              {/* Recent Transactions */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Recent Transaction</h2>
                  <a className="text-blue-600" href="#">View All</a>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'Nissan GT - R', image: "/car%20(9).png",
                      type: 'Sport Car', date: '20 July', price: '$80.00' },
                    { name: 'Koenigsegg',  image: "/car%20(10).png", type: 'Sport Car', date: '19 July', price: '$99.00' },
                    { name: 'Rolls - Royce',  image: "/car%20(11).png", type: 'Sport Car', date: '18 July', price: '$96.00' },
                    { name: 'CR - V',   image: "/car%20(12).png",type: 'SUV', date: '17 July', price: '$80.00' }
                  ].map((car, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      
                      <img 
                        alt={car.image} 
                        className="w-20 h-14 object-cover rounded-lg"
                        src={car.image}
                      />
                      <div className="flex-1">
                        <h3 className="font-bold">{car.name}</h3>
                        <p className="text-gray-500 text-sm">{car.type}</p>
                      </div>
                      <div className="text-right">
                        <span className="block text-gray-500 text-sm">{car.date}</span>
                        <span className="block font-bold">{car.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRental;