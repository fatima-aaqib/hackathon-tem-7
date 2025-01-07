/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import PopularCars from "../Components/Popular-car.";



/* eslint-disable @next/next/no-img-element */
export default function DetailCarRent(){
    
  /* eslint-disable @next/next/no-img-element */
  
  
  
  
  
        
    
      return(
          
      <div className="bg-gray-100 font-sans">
              <div className="flex flex-col lg:flex-row">
  
                  <div className="w-full lg:w-[306px] p-6 bg-white">
                      <div className="mb-6">
                          <h2 className="text-gray-600 font-semibold mb-2">TYPE</h2>
                          <div className="space-y-2">
                              <label className="flex items-center">
                                  <input type="checkbox" defaultChecked  className="form-checkbox text-blue-500"  />
                                  <span className="ml-2 text-gray-700">Sport (10)</span>
  
                              </label>
                              <label className="flex items-center">
                                  <input type="checkbox" defaultChecked  className="form-checkbox text-blue-500"  />
                                  <span className="ml-2 text-gray-700">SUV (12)</span>
                              </label>
                              <label className="flex items-center">
                                  <input type="checkbox"  defaultChecked className="form-checkbox text-blue-500" />
                                  <span className="ml-2 text-gray-700">MPV (16)</span>
                              </label>
                              <label className="flex items-center">
                                  <input type="checkbox" defaultChecked  className="form-checkbox text-blue-500" />
                                  <span className="ml-2 text-gray-700">Sedan (20)</span>
                              </label>
                              <label className="flex items-center">
                                  <input type="checkbox" defaultChecked  className="form-checkbox text-blue-500" />
                                  <span className="ml-2 text-gray-700">Coupe (14)</span>
                              </label>
                              <label className="flex items-center">
                                  <input type="checkbox" defaultChecked  className="form-checkbox text-blue-500" />
                                  <span className="ml-2 text-gray-700">Hatchback (14)</span>
                              </label>
                          </div>
                      </div>
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
                                  <input type="checkbox" defaultChecked  className="form-checkbox text-blue-500"/>
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
  
                  <div className="w-full lg:w-3/4 p-6">
                      <div className="flex justify-center flex-col md:flex-row w-1/1 lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
  
                          <div className=" flex-col md:flex-row w-1/1 lg: bg-white p-8 rounded-lg shadow">
                              <div className=" flex-col md:flex-row w-1/1 bg-blue-500 lg:w-[500px] p-6 rounded-lg text-white">
                                  <h2 className="text-xl font-semibold">Sports car with the best design and acceleration</h2>
                                  <p className="mt-2">Safety and comfort while driving a futuristic and elegant sports car</p>
                                  <img src="/images/View (1).png" alt="" className="mt-4 md:w-1/1 w-full rounded-lg" />
                                  <img src="/car%20(10).png" alt="" className="mt-4 w-full rounded-lg" />
                              </div>
                              <div className="flex space-x-4 mt-4">
                                <img src="/Look%20(2).png"alt="" className="w-[148px] h-[124px] rounded-lg border-2 bg-[#3563E9] border-blue-500" />
                                  <img src="/view%202.png" alt="Interior of the sports car" className="w-[148px] h-[124px] rounded-lg"></img>
                                  <img src="/view%20(1).png" alt="" className="w-[148px] h-[124px] rounded-lg border-2 bg-[#3563E9] border-blue-500" />
                              </div>
                          </div>
  
                          <div className="w-[500px] lg:w-1/3 bg-white  p-6 rounded-lg shadow">
                              <div className="flex justify-between items-center">
                                  <h2 className="text-xl font-semibold">Nissan GT – R</h2>
                                  <i className="fas fa-heart text-red-500"></i>
                              </div>
                              <div className="flex items-center mt-2">
                                  <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                  <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                  <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                  <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                  <span className="text-gray-300"><i className="fas fa-star"></i></span>
                                  <span className="ml-2 text-gray-600"> ⭐ ⭐ ⭐ ⭐ 440+ Reviewer</span>
                              </div>
                              <p className="mt-4 text-gray-600">NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most unforgiving proving ground, the &quot;race track&quot;.</p>
                              <div className="mt-4">
                                  <div className="flex justify-between text-gray-600">
                                      <span>Type Car</span>
                                      <span>Sport</span>
                                  </div>
                                  <div className="flex justify-between text-gray-600 mt-2">
                                      <span>Capacity</span>
                                      <span>2 Person</span>
                                  </div>
                                  <div className="flex justify-between text-gray-600 mt-2">
                                      <span>Steering</span>
                                      <span>Manual</span>
                                  </div>
                                  <div className="flex justify-between text-gray-600 mt-2">
                                      <span>Gasoline</span>
                                      <span>70L</span>
                                  </div>
                              </div>
                              <div className="mt-6">
                                  <span className="text-2xl font-semibold">$80.00/</span>
                                  <span className="text-gray-500 line-through">$100.00</span>
                                  <span className="text-gray-600">days</span>
                              </div>
                              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"><Link href= "/Billing-Info">Rent Now</Link></button>
                          </div>
                      </div>
  
                      <div className="mt-6 bg-white p-6 rounded-lg shadow">
                          <div className="flex justify-between items-center">
                              <h2 className="text-xl font-semibold">Reviews</h2>
                              <span className="bg-blue-500 text-white px-3 py-1 rounded-full">13</span>
                          </div>
                          <div className="mt-4">
                              <div className="flex items-start space-x-4">
                                  <img src="/profill.png" alt="Profile picture of Alex Stanton" className="w-12 h-12 rounded-full"></img>
                                  <div>
                                      <h3 className="font-semibold">Alex Stanton</h3>
                                      <p className="text-gray-500 text-sm">CEO at Bukalapak</p>
                                      <p className="mt-2 text-gray-600">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                                      <div className="flex items-center mt-2">
                                          <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                          <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                          <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                          <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                          <span className="text-gray-300"><i className="fas fa-star"></i></span>
                                          <span className="ml-2 text-gray-500 text-sm">21 July 2022</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="flex items-start space-x-4 mt-6">
                                  <img src="/profille.png" alt="Profile picture of Skylar Dias" className="w-12 h-12 rounded-full"></img>
                                  <div>
                                      <h3 className="font-semibold">Skylar Dias</h3>
                                      <p className="text-gray-500 text-sm">CEO at Amazon</p>
                                      <p className="mt-2 text-gray-600">We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                                      <div className="flex items-center mt-2">
                                          <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                          <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                          <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                          <span className="text-yellow-500"><i className="fas fa-star"></i></span>
                                          <span className="text-gray-300"><i className="fas fa-star"></i></span>
                                          <span className="ml-2 text-gray-500 text-sm">20 July 2022</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="mt-4 text-center">
                              <button className="text-blue-500">Show All <i className="fas fa-chevron-down"></i></button>
                          </div>
                      </div>
  
                  </div>
                 
              </div>
               {/* Popular Cars */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <PopularCars />
              
              </div>
                  </div>
      )
  }