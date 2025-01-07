

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";




const PopularCars = () => {
  const cars = [
    {
      id: 1,
      name: "Koenigsegg",
      type: "Sport",
      price: "$99.00",
      oldPrice: "",
      fuel: "90L",
      transmission: "Manual",
      capacity: "2 People",
      image: "/car%20(10).png",
      liked: true,
    },
    {
      id: 2,
      name: "Nissan GT - R",
      type: "Sport",
      price: "$80.00",
      oldPrice: "$100.00",
      fuel: "80L",
      transmission: "Manual",
      capacity: "2 People",
      image: "/car%20(9).png",
      liked: false,
    },
    {
      id: 3,
      name: "Rolls Royce",
      type: "Luxury",
      price: "$120.00",
      oldPrice: "",
      fuel: "100L",
      transmission: "Automatic",
      capacity: "4 People",
      image: "/car%20(11).png",
      liked: true,
    },
    {
      id: 4,
      name: "Mercedes AMG",
      type: "Sedan",
      price: "$150.00",
      oldPrice: "$170.00",
      fuel: "85L",
      transmission: "Automatic",
      capacity: "4 People",
      image: "/car%20(12).png",
      liked: false,
    },
  ];

  return (
    <><div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Popular Cars</h1>
          <a
            href="#"
            className="text-blue-600 hover:underline hover:text-blue-800 transition duration-200"
          >
            View All
          </a>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-2 duration-300"
            >
              {/* Car Image */}
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-[344px] h-[76px] md:h-48 object-cover" />
                {/* Heart Icon */}
                <span
                  className={`absolute top-3 right-3 text-2xl cursor-pointer ${car.liked ? "text-red-500" : "text-gray-300"}`}
                >
                  &#9829;
                </span>
              </div>

              {/* Car Info */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {car.name}
                </h2>
                <p className="text-gray-500 text-sm mb-3">{car.type}</p>

                {/* Features */}
                <div className="flex justify-between text-gray-600 text-xs mb-3">
                  <span>⛽ {car.fuel}</span>
                  <span>⚙️ {car.transmission}</span>
                  <span>👥 {car.capacity}</span>
                </div>

                {/* Price and Button */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bold text-gray-900">
                      {car.price}
                    </span>
                    {car.oldPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        {car.oldPrice}
                      </span>
                    )}
                  </div>
                  <button className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-600 transition duration-200">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div><div className="bg-gray-100 -mt-80">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recommendation Car</h1>

          {/* Car Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6">
        
            {/* Card 1 */}
            <div className="bg-white shadow rounded-lg  p-4">
              <img src="/car%20(13).png" alt="Car Image" className="w-full mt-6  rounded-md" />
              <div className="mt-24">
              <h2 className="text-xl font-semibold mt-3">All New Rush</h2>
              <p className="text-gray-500 text-sm">SUV</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-600">70L • Manual • 6 People</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-blue-600">
                  $72.00 <span className="line-through text-gray-400 text-sm">$80.00</span>
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Rent Now</button>
                </div>
              </div>
            </div>
            
            

            {/* Card 2 */}
            <div className="bg-white shadow rounded-lg  p-4">
              <img src="/car%20(12).png" alt="Car Image" className="w-full mt-6  rounded-md" />
              <h2 className="text-xl font-semibold mt-16">CR - V</h2>
              <p className="text-gray-500 text-sm">SUV</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-600">80L • Manual • 6 People</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-blue-600">$80.00</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Rent Now</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow rounded-lg p-4">
              <img src="/car%20(14).png" alt="Car Image" className="w-full mt-6 rounded-md" />
              <div className="mt-24">
              <h2 className="text-xl font-semibold mt-3">All New Terios</h2>
              <p className="text-gray-500 text-sm">SUV</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-600">90L • Manual • 6 People</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-blue-600">$74.00</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Rent Now</button>
                </div>

              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow rounded-lg p-4">
              <img src="/car%20(15).png" alt="Car Image" className="w-full mt-6 rounded-md" />
              <div className="mt-28">
              <h2 className="text-xl font-semibold mt-16">CR - V</h2>
              <p className="text-gray-500 text-sm">Hatchback</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-600">90L • Manual • 4 People</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-blue-600">$74.00</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Rent Now</button>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white shadow rounded-lg p-4">
              <img src="/car%20(16).png" alt="Car Image" className="w-full rounded-md" />
              <h2 className="text-xl font-semibold mt-3">MG ZX Exclusive</h2>
              <p className="text-gray-500 text-sm">SUV</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-600">80L • Manual • 6 People</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-blue-600">$80.00</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Rent Now</button>
              </div>
            </div>
            

            {/* Card 6 */}
            <div className="bg-white shadow rounded-lg p-4">
              <img src="/car%20(17).png" alt="Car Image" className="w-full rounded-md" />
              <h2 className="text-xl font-semibold mt-3">New MG ZS</h2>
              <p className="text-gray-500 text-sm">Hatchback</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-600">70L • Manual • 4 People</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-blue-600">
                  $76.00 <span className="line-through text-gray-400 text-sm">$80.00</span>
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Rent Now</button>
              </div>
            </div>
             {/* Card 7 */}
             <div className="bg-white shadow rounded-lg p-4">
              <img src="/car%20(16).png" alt="Car Image" className="w-full rounded-md" />
              <h2 className="text-xl font-semibold mt-3">MG ZX Excite</h2>
              <p className="text-gray-500 text-sm">SUV</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-600">80L • Manual • 6 People</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-blue-600">$80.00</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Rent Now</button>
              </div>
            </div>
             {/* Card 8 */}
             <div className="bg-white shadow rounded-lg p-4">
              <img src="/car%20(17).png" alt="Car Image" className="w-full rounded-md" />
              <h2 className="text-xl font-semibold mt-3">New MG ZS</h2>
              <p className="text-gray-500 text-sm">SUV</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-600">80L • Manual • 6 People</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="text-lg font-bold text-blue-600">$80.00</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Rent Now</button>
              </div>
            </div>
          </div>
          
          {/* Show More Button */}
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"><Link href="/Show-More">Show more car</Link></button>
          </div>
        </div></div></>
      
  );
};
export default PopularCars;
