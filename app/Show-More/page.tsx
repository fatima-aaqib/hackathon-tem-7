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
     <img alt="White Koenigsegg car" className="w-full h-40 object-cover my-4" height="200" src="https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DfxEN3N8xANwTcZgh0xSakhl10kW0TD0Fp1jARHnGz-LXjh81sLYznNmpCiXWJt5B03mEHhUHxZ0HGBKGZE77BRP0crj8oghJWuNwrQugrcdCUW7QXq9BhMR3Twfmtz6qxCLBUUBFM2XEvZL4WFQQsjlEU1HLYymEBDMK2Wv4AFjF3zF0J4TxpifYy~1OHRo5glkadmvvM8qI11-Esja5uho861Nyr2meq3r2KGhgGVYIbny7ZUs446biS6ZRrZuMHv7EbnN7lrB9F71PB9ZTP5EAv~1Ij~Vap~VTczYAcRltKVz3bSlQCk0aUMfQCdU8KLb5YbhRFzMUwnZUzkHdw__" width="300"/>
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
     <img alt="Silver Nissan GT - R car" className="w-full h-40 object-cover my-4" height="200" src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q~tvt4~N6t2PCET8JqIKDxiSf6lfX2lKaPxN3lrVD93ezT925Xgi~HuW6m~BxPoCWcuE3Gu-urOOJlZdOtM317oPlGLby0uMFI7RayzVlTFIw5SzOPbHbvraAQV2NtD4VkhD7Y7BKt8iCchBRIRLD-hPS~g43EMcmd9NEM8NVAANiY2wuQKSvNyezEzW4F6uyXC0lOCXt6nmMRqCt-erXrrfyOmRIyduOycK04lXQwsYQBwBrA2IRQiVoQdV-sVZ6SfcruQNsXey2cABw0ihh1HoDLjloLEonLJquvJsH-Hk1qlqqJtHRG7xNZkwi6mmYq49a~yYFguNgc8~ZyxO-g__" width="300"/>
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
     <img alt="Blue Rolls-Royce car" className="w-full h-40 object-cover my-4" height="200" src="https://s3-alpha-sig.figma.com/img/2e45/bdb6/4d6f5df6dab1d18d948223ba47972f21?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRphuHBNx2qZ9iMqCYKY6WXr2seveWh6hcOqTEu1pVy9vuxzBbrBDh7fqsnGnrvNgz8ZlGdM2kyWTRAui-cTYham-P5JYI59dxJdTbX5C1nPLCRAiXFfNvbdjLH8b7JcAhCABOJPkrfCHhqTBgx4UdLGnZ9V5SF0IkmscLXfevagxMaOocI7WwscP~J90GS4us1HOoba6N32Dvf03VOjVg8YJuy59jxLwe2a5c5xI8uIwYA1rJ9CpkLKE~NNSHUmhgC~hMdqNRJTxECmIB~qvq0mN-jwPHvH53~pDLq7srmhwmWH7dKcSBT9ngZw6t-T23eTNSiwa29J0Kt79lYQxg__" />
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
     <img alt="Gray All New Rush car" className="w-full h-40 object-cover my-4" height="200" src="https://s3-alpha-sig.figma.com/img/5093/2266/1844e6b8d2bc7a68f501d79e35f5f4ab?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZEqGc86huvKROlQkHd21IgzUIhaSSBng-X7Og4yxB9aV54kxjUfBvho72TpVDp5c7MakzaPvFSnOeYdd~ydLAxWrcmhc3cItJwSsXgndNnjIx2HVQVusxMYdoQ2MMeoNEWz6RwQ~MHJGYLcxElA9w7WOk0YfYDhAvVYaJ~LN~KWvOGwMoMU~1ccdIOAaj5yDGaVxMJWtKEATaW1P7GIYIJEx0ozb9eDWDiuIcVJ62yCocuNJQOwChduiCZAF0J08bj0KlhoDkEYD0bkWk7M16~QJqGk-ChcnMDP6G-HwYw3g~u-u8nvxGamD1Q3cfAg4c-5bp5xVMEOeIqo3YBl-Mw__" width="300"/>
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
     <img alt="Brown CR - V car" className="w-full h-40 object-cover my-4" height="200" src="https://s3-alpha-sig.figma.com/img/92f7/4dec/074acdd579ecaf8742bac9eede524b1f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K3ekkeH8A-lyE40iGsuuePZAOynE2aXVm3EzlR1r53nxDzivdMlhfy8grI7-yRmD~znfvEjbECuDovCSF1qLQYz-C8Uj5fVSh98cRTE1iRd7O2VzEf7iWYgGxoAg4KkgtlraEQyn7xJ3WRBKvK5w4xxpTJYrOSxgAHtAVfawr9C1uS4N4yFgpJ6p2tC5a7KTtC-QMgxFia8MWi2EggsOhbfrZcQn2dhAB4nr3ra2cIAaU4Szg6ruMXO-ApIQkpRTSs7MSfSSaQ1Rj8Z8y4UVuWITvUlUMO~ipzrPARmITz~xLEcd4RVUA6WCW3LIa9FmczxM3GMqglrbGAUIoSTi5A__" width="300"/>
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
     <img alt="Blue All New Terios car" className="w-full h-40 object-cover my-4" height="200" src="https://s3-alpha-sig.figma.com/img/5093/2266/1844e6b8d2bc7a68f501d79e35f5f4ab?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZEqGc86huvKROlQkHd21IgzUIhaSSBng-X7Og4yxB9aV54kxjUfBvho72TpVDp5c7MakzaPvFSnOeYdd~ydLAxWrcmhc3cItJwSsXgndNnjIx2HVQVusxMYdoQ2MMeoNEWz6RwQ~MHJGYLcxElA9w7WOk0YfYDhAvVYaJ~LN~KWvOGwMoMU~1ccdIOAaj5yDGaVxMJWtKEATaW1P7GIYIJEx0ozb9eDWDiuIcVJ62yCocuNJQOwChduiCZAF0J08bj0KlhoDkEYD0bkWk7M16~QJqGk-ChcnMDP6G-HwYw3g~u-u8nvxGamD1Q3cfAg4c-5bp5xVMEOeIqo3YBl-Mw__" width="300"/>
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
     <img alt="Blue MG ZX Exclucise car" className="w-full h-40 object-cover my-4" height="200" src="https://s3-alpha-sig.figma.com/img/f699/abef/3f5cf908bc1ebc5bf5c91aca676e4157?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ERdH4Pk3na52VpiSiGk1pSOdAdgaSTY6v7hGnQcMnmnaga0MHuUhaSd-ShQZCdfZG~p~lbychrBeChTu3ecvy3b1C2Sq0I9cbcyZ1UAsZsqC4XC~CknA7-6nVLVR-Dg4-hnZ5AMO6fP52SoicZQ6jtrPeGAliRCQt89j3f-pPCW~7FHtB~VfPhEwcKcBdFJNhnqphQop-fEPdNAFMgBb0sKWH~ta5OjhuUnLlz9kVlEC~uVklZjl4enSnzWztHIK-Txn2dGPx0Ycd7lPm0s~Tu5CaziLpkRsZ-bbAqSq8zgf9VDYLW8LJsr6KpCzWUfoCrA8eHzPMbuDAmVmGofovA__" width="300"/>
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
     <img alt="White New MGZS car" className="w-full h-40 object-cover my-4" height="200" src="https://s3-alpha-sig.figma.com/img/2ed7/5540/73defa787d71b948931bdf156be51493?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VUFsapzzWqUJCeQw5wKctUNncRRT~977JXuQquu0VPBZ8D86622KqM7d3USyLBUMvnhc1QlAJLkCZ8R8vHnil0SPe2cL7KONkcv-sfCQqZImea1DABjEluzQywGZ94vC1IA5pjyBE5~sDR9BO815GFE9Iyk4dpbQjvVf7~9HzacnkivmtkVnL-TvG7hqhePs~8ocZ5A2YNFhRZCaKh3MRTyk~~AVZ0VmgHYPK2d3gatzChPS7iYr9lr~RXg1S0TiRz3OqnpUa0NX3ec0EqOzT5ovxz589DM7zNlL9BuHCTpZ4auz6NtfT~uS-woysZxLxbRAR7QWn9P3RwgEGbYQ2w__" width="300"/>
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
     <img alt="Blue MG ZX Excite car" className="w-full h-40 object-cover my-4" height="200" src="https://s3-alpha-sig.figma.com/img/94de/45fc/4c846ab6f28848a6e18426c5160ab67d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m-yjFK~De8uDY2PsqXpCH2hBQMeJze4zqjh9wGgN2K1lebTPQ7d8PhC0SMKbkIptH7uCkLzwSvWeTY9jbmS6xlNEDNYGxlvCBLE8diqABX93eru1qbhi~7GNxRUt586tbtgMIauSYBPVvJA6yW6k6eOBgwd~r-GopCLyAxDZMAYb~-bRwVef08eQGdwkypvDOUV0teC9K5VAiLNfLiMTx9zUirbjFTvPriBJKyYwQMAIEOqCDNKWdze3ISELp-Ss7qvvhyfFm-nmd8Qa9nzzqX2l-LIU9hofClNd0mhuofHcwFeWFF4mQ6bAfF1T9s8Tu64lLR-6Q2z3kRrFeUZWqQ__" width="300"/>
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

