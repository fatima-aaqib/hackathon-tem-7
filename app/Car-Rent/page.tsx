import { ChevronDown } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export default function carrent(){
    return(

     <div className="bg-gray-100 font-sans">
  <div className="flex flex-col lg:flex-row min-h-screen">
 
   <div className="hidden md:block w-full lg:w-64 bg-white p-6">
    <div className="mb-8">
     <h2 className="text-gray-400 text-sm uppercase font-bold">
      Main Menu
     </h2>
     <ul className="mt-4">
      <li className="mb-4">
       <a className="flex items-center bg-[#3563E9] w-[220px] h-[56px] text-white rounded-lg" href="#">
        <i className="fas fa-home mr-3">
        </i>
        <span>
         Dashboard
        </span>
       </a>
      </li>
      <li className="mb-4">
       <a className="flex items-center text-gray-600" href="#">
        <i className="fas fa-car mr-3">
        </i>
        <span>
         Car Rent
        </span>
       </a>
      </li>
      <li className="mb-4">
       <a className="flex items-center text-gray-600" href="#">
        <i className="fas fa-chart-bar mr-3">
        </i>
        <span>
         Insight
        </span>
       </a>
      </li>
      <li className="mb-4">
       <a className="flex items-center text-gray-600" href="#">
        <i className="fas fa-money-check-alt mr-3">
        </i>
        <span>
         Reimburse
        </span>
       </a>
      </li>
      <li className="mb-4">
       <a className="flex items-center text-gray-600" href="#">
        <i className="fas fa-inbox mr-3">
        </i>
        <span>
         Inbox
        </span>
       </a>
      </li>
      <li className="mb-4">
       <a className="flex items-center text-gray-600" href="#">
        <i className="fas fa-calendar-alt mr-3">
        </i>
        <span>
         Calender
        </span>
       </a>
      </li>
     </ul>
    </div>
    <div className="mb-8">
     <h2 className="text-gray-400 text-sm uppercase font-bold">
      Preferences
     </h2>
     <ul className="mt-4">
      <li className="mb-4">
       <a className="flex items-center text-gray-600" href="#">
        <i className="fas fa-cog mr-3">
        </i>
        <span>
         Settings
        </span>
       </a>
      </li>
      <li className="mb-4">
       <a className="flex items-center text-gray-600" href="#">
        <i className="fas fa-question-circle mr-3">
        </i>
        <span>
         Help &amp; Center
        </span>
       </a>
      </li>
      <li className="mb-4">
       <a className="flex items-center text-gray-600" href="#">
        <i className="fas fa-moon mr-3">
        </i>
        <span>
         Dark Mode
        </span>
        <i className="fas fa-sun ml-auto">
        </i>
       </a>
      </li>
     </ul>
    </div>
    <div>
     <a className="flex items-center text-gray-600" href="#">
      <i className="fas fa-sign-out-alt mr-3">
      </i>
      <span>
       Log Out
      </span>
     </a>
    </div>
   </div>
   {/*Main Content */}
   <div className="flex-1  p-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
     {/*Details Rental*/} 
     <div className="col-span-1 lg:col-span-2 bg-white h-[900px] p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
       Details Rental
      </h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
       <img alt="Map showing route" className="w-full h-96 object-cover rounded-lg" height="400" src="/Maps%20(1).png" width="600"/>
      </div>
      <div className="flex items-center mb-4">
       <img alt="Nissan GT-R" className="w-28 h-16 object-cover rounded-lg mr-4" height="60" src="/Look%20(2).png" width="100"/>
       <div>
        <h3 className="text-lg font-bold">
         Nissan GT - R
        </h3>
        <p className="text-gray-500">
         Sport Car
        </p>
       </div>
       <span className="ml-auto text-gray-500">
        #9761
       </span>
      </div>
      <div>
       
      <div>
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

       </div>
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
            <br />
            <div className="flex items-center justify-between">
       <span className="text-gray-500">
        Total Rental Price
       </span>
       <span className="text-2xl font-bold">
        $80.00
       </span>
      </div>


     </div>
     {/*Top 5 Car Rental*/} 
     
<div>

<img src="/top%20(5).png" alt="" className="h-[400px]"/>



<br />







      {/*Recent Transaction */}
      <div className="h-[450px]">
     <div className="-mr-96 bg-white w-[524px]  p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
       <h2 className="text-xl font-bold">
        Recent Transaction
       </h2>
       <a className="text-blue-600" href="#">
        View All
       </a>
      </div>
      <ul>
       <li className="flex items-center justify-between mb-4">
        <img alt="Nissan GT-R" className="w-24 h-16 object-cover rounded-lg mr-4" height="60" src="/car%20(9).png" width="100"/>
        <div>
         <h3 className="text-lg font-bold">
          Nissan GT - R
         </h3>
         <p className="text-gray-500">
          Sport Car
         </p>
        </div>
        <div className="ml-auto text-right">
         <span className="text-gray-500">
          20 July
         </span>
         <span className="block text-xl font-bold">
          $80.00
         </span>
        </div>
       </li>
       <li className="flex items-center justify-between mb-4">
        <img alt="Koenigsegg" className="w-24 h-16 object-cover rounded-lg mr-4" height="60" src="/car%20(10).png" width="100"/>
        <div>
         <h3 className="text-lg font-bold">
          Koenigsegg
         </h3>
         <p className="text-gray-500">
          Sport Car
         </p>
        </div>
        <div className="ml-auto text-right">
         <span className="text-gray-500">
          19 July
         </span>
         <span className="block text-xl font-bold">
          $99.00
         </span>
        </div>
       </li>
       <li className="flex items-center justify-between mb-4">
        <img alt="Rolls-Royce" className="w-24 h-16 object-cover rounded-lg mr-4" height="60" src="/car%20(11).png" width="100"/>
        <div>
         <h3 className="text-lg font-bold">
          Rolls - Royce
         </h3>
         <p className="text-gray-500">
          Sport Car
         </p>
        </div>
        <div className="ml-auto text-right">
         <span className="text-gray-500">
          18 July
         </span>
         <span className="block text-xl font-bold">
          $96.00
         </span>
        </div>
       </li>
       <li className="flex items-center justify-between mb-4">
        <img alt="CR-V" className="w-24 h-16 object-cover rounded-lg mr-4" height="60" src="/car%20(12).png" width="100"/>
        <div>
         <h3 className="text-lg font-bold">
          CR - V
         </h3>
         <p className="text-gray-500">
          SUV
         </p>
        </div>
        <div className="ml-auto text-right">
         <span className="text-gray-500">
          17 July
         </span>
         <span className="block text-xl font-bold">
          $80.00
         </span>
        </div>
       </li>
      </ul>
      </div>,
     </div>
    </div>
   </div>
  </div>

</div>


 </div>
    )

}