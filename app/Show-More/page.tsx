import { ChevronDown } from "lucide-react";
import Link from "next/link";


/* eslint-disable @next/next/no-img-element */
export default function ShowMore() {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-[306px] p-6 bg-white mb-6 lg:mb-0">
          {/* Type Section */}
          <div className="mb-6">
                        <h2 className="text-gray-600 font-semibold mb-2">TYPE</h2>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-blue-500"  />
                                <span className="ml-2 text-gray-700">Sport (10)</span>

                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-blue-500"  />
                                <span className="ml-2 text-gray-700">SUV (12)</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-blue-500" />
                                <span className="ml-2 text-gray-700">MPV (16)</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-blue-500" />
                                <span className="ml-2 text-gray-700">Sedan (20)</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-blue-500" />
                                <span className="ml-2 text-gray-700">Coupe (14)</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-blue-500" />
                                <span className="ml-2 text-gray-700">Hatchback (14)</span>
                            </label>
                        </div>
                        </div>

          {/* Capacity Section */}
          <div className="mb-6">
                        <h2 className="text-gray-600 font-semibold mb-2">CAPACITY</h2>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" defaultChecked  className="form-checkbox text-blue-500"  />
                                <span className="ml-2 text-gray-700">2 Person (10)</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" defaultChecked  className="form-checkbox text-blue-500" />
                                <span className="ml-2 text-gray-700">4 Person (14)</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" defaultChecked  className="form-checkbox text-blue-500" />
                                <span className="ml-2 text-gray-700">6 Person (12)</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" defaultChecked  className="form-checkbox text-blue-500"  />
                                <span className="ml-2 text-gray-700">8 or More (16)</span>
                            </label>
                        </div>
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
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <div className="grid md:grid-cols-7 gap-4 items-center">
            {/* Pick-Up Section */}
            <div className="md:col-span-3 space-y-4">
              <div className="flex items-center gap-2">
                <input type="radio" id="pickup" name="type" className="text-blue-600" defaultChecked />
                <label htmlFor="pickup" className="text-lg font-medium">Pick - Up</label>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Locations</label>
                  <div className="relative">
                    <select className="w-full p-2 border rounded-lg appearance-none pr-8">
                      <option>Select your city</option>
                      <option>Karachi</option>
                      <option>Islamabad</option>
                      <option>Lahore</option>
                      <option>peshawar</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Date</label>
                  <div className="relative">
                    <select className="w-full p-2 border rounded-lg appearance-none pr-8">
                      <option>Enter your date</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Time</label>
                  <div className="relative">
                    <select className="w-full p-2 border rounded-lg appearance-none pr-8">
                      <option>Enter your time</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>
              </div>
            </div>
         {/* Switch Button */}
         <div className="flex justify-center md:col-span-1">
              <button className="bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-700 transition">
                <svg  className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>

         {/* Drop-Off Section */}
         <div className="md:col-span-3 space-y-4">
              <div className="flex items-center gap-2">
                <input type="radio" id="dropoff" name="type" className="text-blue-600" />
                <label htmlFor="dropoff" className="text-lg font-medium">Drop - Off</label>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Locations</label>
                  <div className="relative">
                    <select className="w-full p-2 border rounded-lg appearance-none pr-8">
                      <option>Select your city</option>
                      <option>Karachi</option>
                      <option>Islamabad</option>
                      <option>Lahore</option>
                      <option>peshawar</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Date</label>
                  <div className="relative">
                    <select className="w-full p-2 border rounded-lg appearance-none pr-8">
                      <option>Enter your date</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                  <label className="block text-sm font-medium text-gray-600 mb-1">Time</label>
                  <div className="relative">
                    <select className="w-full p-2 border rounded-lg appearance-none pr-8">
                      <option>Enter your time</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>
              </div>
            </div>
            </div>
          
          {/* Popular Cars */}
          <div className="bg-white p-4 lg:p-6 rounded-lg shadow-md">
          <div className="bg-gray-100">
  <div className="container mx-auto p-4">
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
   
    <div className="bg-white p-4 rounded-lg shadow-md">
     <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">
       Koenigsegg
      </h2>
      <i className="fas fa-heart text-red-500">
      </i>
     </div>
     <p className="text-gray-500">
      Sport
     </p>
     <img alt="White Koenigsegg car" className="w-full h-40 object-cover my-4" height="200" src="/car%20(10).png" width="300"/>
     <div className="flex justify-between items-center text-gray-500">
      <div className="flex items-center space-x-2">
       <i className="fas fa-gas-pump">
       </i>
       <span>
        90L
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-cogs">
       </i>
       <span>
        Manual
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-user-friends">
       </i>
       <span>
        2 People
       </span>
      </div>
     </div>
     <div className="flex justify-between items-center mt-4">
      <span className="text-xl font-bold">
       $99.00
       <span className="text-gray-500 text-sm">
        / day
       </span>
      </span>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
       Rent Now
      </button>
     </div>
    </div>
   
    <div className="bg-white p-4 rounded-lg shadow-md">
     <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">
       Nissan GT - R
      </h2>
      <i className="far fa-heart text-gray-500">
      </i>
     </div>
     <p className="text-gray-500">
      Sport
     </p>
     <img alt="Silver Nissan GT - R car" className="w-full h-40 object-cover my-4" height="200" src="/car%20(9).png" width="300"/>
     <div className="flex justify-between items-center text-gray-500">
      <div className="flex items-center space-x-2">
       <i className="fas fa-gas-pump">
       </i>
       <span>
        80L
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-cogs">
       </i>
       <span>
        Manual
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-user-friends">
       </i>
       <span>
        2 People
       </span>
      </div>
     </div>
     <div className="flex justify-between items-center mt-4">
      <span className="text-xl font-bold">
       $80.00
       <span className="text-gray-500 text-sm">
        / day
       </span>
      </span>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
      <Link href="/Detail-Car-Rent">Rent Now</Link>
      </button>
     </div>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-md">
     <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">
       Rolls-Royce
      </h2>
      <i className="far fa-heart text-gray-500">
      </i>
     </div>
     <p className="text-gray-500">
      Sport
     </p>
     <img alt="Blue Rolls-Royce car" className="w-full h-40 object-cover my-4" height="200" src="/car%20(11).png" />
     <div className="flex justify-between items-center text-gray-500">
      <div className="flex items-center space-x-2">
       <i className="fas fa-gas-pump">
       </i>
       <span>
        70L
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-cogs">
       </i>
       <span>
        Manual
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-user-friends">
       </i>
       <span>
        4 People
       </span>
      </div>
     </div>
     <div className="flex justify-between items-center mt-4">
      <span className="text-xl font-bold">
       $96.00
       <span className="text-gray-500 text-sm">
        / day
       </span>
      </span>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
       Rent Now
      </button>
     </div>
    </div>
   
    <div className="bg-white p-4 rounded-lg shadow-md">
     <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">
       All New Rush
      </h2>
      <i className="far fa-heart text-gray-500">
      </i>
     </div>
     <p className="text-gray-500">
      SUV
     </p>
     <img alt="Gray All New Rush car" className="w-full h-40 object-cover my-4" height="200" src="/car%20(13).png" width="300"/>
     <div className="flex justify-between items-center text-gray-500">
      <div className="flex items-center space-x-2">
       <i className="fas fa-gas-pump">
       </i>
       <span>
        70L
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-cogs">
       </i>
       <span>
        Manual
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-user-friends">
       </i>
       <span>
        6 People
       </span>
      </div>
     </div>
     <div className="flex justify-between items-center mt-4">
      <span className="text-xl font-bold">
       $72.00
       <span className="text-gray-500 text-sm">
        / day
       </span>
      </span>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
       Rent Now
      </button>
     </div>
    </div>
   
    <div className="bg-white p-4 rounded-lg shadow-md">
     <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">
       CR - V
      </h2>
      <i className="fas fa-heart text-red-500">
      </i>
     </div>
     <p className="text-gray-500">
      SUV
     </p>
     <img alt="Brown CR - V car" className="w-full h-40 object-cover my-4" height="200" src="/car%20(12).png" width="300"/>
     <div className="flex justify-between items-center text-gray-500">
      <div className="flex items-center space-x-2">
       <i className="fas fa-gas-pump">
       </i>
       <span>
        80L
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-cogs">
       </i>
       <span>
        Manual
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-user-friends">
       </i>
       <span>
        6 People
       </span>
      </div>
     </div>
     <div className="flex justify-between items-center mt-4">
      <span className="text-xl font-bold">
       $80.00
       <span className="text-gray-500 text-sm">
        / day
       </span>
      </span>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
       Rent Now
      </button>
     </div>
    </div>
   
    <div className="bg-white p-4 rounded-lg shadow-md">
     <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">
       All New Terios
      </h2>
      <i className="far fa-heart text-gray-500">
      </i>
     </div>
     <p className="text-gray-500">
      SUV
     </p>
     <img alt="Blue All New Terios car" className="w-full h-40 object-cover my-4" height="200" src="/car%20(14).png" width="300"/>
     <div className="flex justify-between items-center text-gray-500">
      <div className="flex items-center space-x-2">
       <i className="fas fa-gas-pump">
       </i>
       <span>
        90L
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-cogs">
       </i>
       <span>
        Manual
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-user-friends">
       </i>
       <span>
        6 People
       </span>
      </div>
     </div>
     <div className="flex justify-between items-center mt-4">
      <span className="text-xl font-bold">
       $74.00
       <span className="text-gray-500 text-sm">
        / day
       </span>
      </span>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
       Rent Now
      </button>
     </div>
    </div>
  
    <div className="bg-white p-4 rounded-lg shadow-md">
     <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">
       MG ZX Exclucise
      </h2>
      <i className="far fa-heart text-gray-500">
      </i>
     </div>
     <p className="text-gray-500">
      Hatchback
     </p>
     <img alt="Blue MG ZX Exclucise car" className="w-full h-40 object-cover my-4" height="200" src="/car%20(16).png" width="300"/>
     <div className="flex justify-between items-center text-gray-500">
      <div className="flex items-center space-x-2">
       <i className="fas fa-gas-pump">
       </i>
       <span>
        70L
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-bolt">
       </i>
       <span>
        Electric
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-user-friends">
       </i>
       <span>
        4 People
       </span>
      </div>
     </div>
     <div className="flex justify-between items-center mt-4">
      <span className="text-xl font-bold">
       $76.00
       <span className="text-gray-500 text-sm">
        / day
       </span>
      </span>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
       Rent Now
      </button>
     </div>
    </div>
    
    <div className="bg-white p-4 rounded-lg shadow-md">
     <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">
       New MGZS
      </h2>
      <i className="far fa-heart text-gray-500">
      </i>
     </div>
     <p className="text-gray-500">
      SUV
     </p>
     <img alt="White New MGZS car" className="w-full h-40 object-cover my-4" height="200" src="/car%20(17).png" width="300"/>
     <div className="flex justify-between items-center text-gray-500">
      <div className="flex items-center space-x-2">
       <i className="fas fa-gas-pump">
       </i>
       <span>
        80L
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-cogs">
       </i>
       <span>
        Manual
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-user-friends">
       </i>
       <span>
        6 People
       </span>
      </div>
     </div>
     <div className="flex justify-between items-center mt-4">
      <span className="text-xl font-bold">
       $80.00
       <span className="text-gray-500 text-sm">
        / day
       </span>
      </span>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
       Rent Now
      </button>
     </div>
    </div>
  
    <div className="bg-white p-4 rounded-lg shadow-md">
     <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold">
       MG ZX Excite
      </h2>
      <i className="fas fa-heart text-red-500">
      </i>
     </div>
     <p className="text-gray-500">
      Hatchback
     </p>
     <img alt="Blue MG ZX Excite car" className="w-full h-40 object-cover my-4" height="200" src="/car%20(16).png" width="300"/>
     <div className="flex justify-between items-center text-gray-500">
      <div className="flex items-center space-x-2">
       <i className="fas fa-gas-pump">
       </i>
       <span>
        90L
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-bolt">
       </i>
       <span>
        Electric
       </span>
      </div>
      <div className="flex items-center space-x-2">
       <i className="fas fa-user-friends">
       </i>
       <span>
        4 People
       </span>
      </div>
     </div>
     <div className="flex justify-between items-center mt-4">
      <span className="text-xl font-bold">
       $74.00
       <span className="text-gray-500 text-sm">
        / day
       </span>
      </span>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
       Rent Now
      </button>
     </div>
    </div>
   
   </div>
  </div>
 </div>

{/* Show More Button */}
<div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Show More
            </button>
          </div>
      </div>
</div>
        </div>
</div>
  
  );
}