

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
      image: "https://s3-alpha-sig.figma.com/img/2385/cc01/da9bb791587b8022c475d39822c50c17?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DfxEN3N8xANwTcZgh0xSakhl10kW0TD0Fp1jARHnGz-LXjh81sLYznNmpCiXWJt5B03mEHhUHxZ0HGBKGZE77BRP0crj8oghJWuNwrQugrcdCUW7QXq9BhMR3Twfmtz6qxCLBUUBFM2XEvZL4WFQQsjlEU1HLYymEBDMK2Wv4AFjF3zF0J4TxpifYy~1OHRo5glkadmvvM8qI11-Esja5uho861Nyr2meq3r2KGhgGVYIbny7ZUs446biS6ZRrZuMHv7EbnN7lrB9F71PB9ZTP5EAv~1Ij~Vap~VTczYAcRltKVz3bSlQCk0aUMfQCdU8KLb5YbhRFzMUwnZUzkHdw__",
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
      image: "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q~tvt4~N6t2PCET8JqIKDxiSf6lfX2lKaPxN3lrVD93ezT925Xgi~HuW6m~BxPoCWcuE3Gu-urOOJlZdOtM317oPlGLby0uMFI7RayzVlTFIw5SzOPbHbvraAQV2NtD4VkhD7Y7BKt8iCchBRIRLD-hPS~g43EMcmd9NEM8NVAANiY2wuQKSvNyezEzW4F6uyXC0lOCXt6nmMRqCt-erXrrfyOmRIyduOycK04lXQwsYQBwBrA2IRQiVoQdV-sVZ6SfcruQNsXey2cABw0ihh1HoDLjloLEonLJquvJsH-Hk1qlqqJtHRG7xNZkwi6mmYq49a~yYFguNgc8~ZyxO-g__",
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
      image: "https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q~tvt4~N6t2PCET8JqIKDxiSf6lfX2lKaPxN3lrVD93ezT925Xgi~HuW6m~BxPoCWcuE3Gu-urOOJlZdOtM317oPlGLby0uMFI7RayzVlTFIw5SzOPbHbvraAQV2NtD4VkhD7Y7BKt8iCchBRIRLD-hPS~g43EMcmd9NEM8NVAANiY2wuQKSvNyezEzW4F6uyXC0lOCXt6nmMRqCt-erXrrfyOmRIyduOycK04lXQwsYQBwBrA2IRQiVoQdV-sVZ6SfcruQNsXey2cABw0ihh1HoDLjloLEonLJquvJsH-Hk1qlqqJtHRG7xNZkwi6mmYq49a~yYFguNgc8~ZyxO-g__",
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
              <img src="https://s3-alpha-sig.figma.com/img/5093/2266/1844e6b8d2bc7a68f501d79e35f5f4ab?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZEqGc86huvKROlQkHd21IgzUIhaSSBng-X7Og4yxB9aV54kxjUfBvho72TpVDp5c7MakzaPvFSnOeYdd~ydLAxWrcmhc3cItJwSsXgndNnjIx2HVQVusxMYdoQ2MMeoNEWz6RwQ~MHJGYLcxElA9w7WOk0YfYDhAvVYaJ~LN~KWvOGwMoMU~1ccdIOAaj5yDGaVxMJWtKEATaW1P7GIYIJEx0ozb9eDWDiuIcVJ62yCocuNJQOwChduiCZAF0J08bj0KlhoDkEYD0bkWk7M16~QJqGk-ChcnMDP6G-HwYw3g~u-u8nvxGamD1Q3cfAg4c-5bp5xVMEOeIqo3YBl-Mw__" alt="Car Image" className="w-full  rounded-md" />
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

            {/* Card 2 */}
            <div className="bg-white shadow rounded-lg  p-4">
              <img src="https://s3-alpha-sig.figma.com/img/92f7/4dec/074acdd579ecaf8742bac9eede524b1f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K3ekkeH8A-lyE40iGsuuePZAOynE2aXVm3EzlR1r53nxDzivdMlhfy8grI7-yRmD~znfvEjbECuDovCSF1qLQYz-C8Uj5fVSh98cRTE1iRd7O2VzEf7iWYgGxoAg4KkgtlraEQyn7xJ3WRBKvK5w4xxpTJYrOSxgAHtAVfawr9C1uS4N4yFgpJ6p2tC5a7KTtC-QMgxFia8MWi2EggsOhbfrZcQn2dhAB4nr3ra2cIAaU4Szg6ruMXO-ApIQkpRTSs7MSfSSaQ1Rj8Z8y4UVuWITvUlUMO~ipzrPARmITz~xLEcd4RVUA6WCW3LIa9FmczxM3GMqglrbGAUIoSTi5A__" alt="Car Image" className="w-full  mt-24 rounded-md" />
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
              <img src="https://s3-alpha-sig.figma.com/img/5093/2266/1844e6b8d2bc7a68f501d79e35f5f4ab?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZEqGc86huvKROlQkHd21IgzUIhaSSBng-X7Og4yxB9aV54kxjUfBvho72TpVDp5c7MakzaPvFSnOeYdd~ydLAxWrcmhc3cItJwSsXgndNnjIx2HVQVusxMYdoQ2MMeoNEWz6RwQ~MHJGYLcxElA9w7WOk0YfYDhAvVYaJ~LN~KWvOGwMoMU~1ccdIOAaj5yDGaVxMJWtKEATaW1P7GIYIJEx0ozb9eDWDiuIcVJ62yCocuNJQOwChduiCZAF0J08bj0KlhoDkEYD0bkWk7M16~QJqGk-ChcnMDP6G-HwYw3g~u-u8nvxGamD1Q3cfAg4c-5bp5xVMEOeIqo3YBl-Mw__" alt="Car Image" className="w-full rounded-md" />
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

            {/* Card 4 */}
            <div className="bg-white shadow rounded-lg p-4">
              <img src="https://s3-alpha-sig.figma.com/img/92f7/4dec/074acdd579ecaf8742bac9eede524b1f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K3ekkeH8A-lyE40iGsuuePZAOynE2aXVm3EzlR1r53nxDzivdMlhfy8grI7-yRmD~znfvEjbECuDovCSF1qLQYz-C8Uj5fVSh98cRTE1iRd7O2VzEf7iWYgGxoAg4KkgtlraEQyn7xJ3WRBKvK5w4xxpTJYrOSxgAHtAVfawr9C1uS4N4yFgpJ6p2tC5a7KTtC-QMgxFia8MWi2EggsOhbfrZcQn2dhAB4nr3ra2cIAaU4Szg6ruMXO-ApIQkpRTSs7MSfSSaQ1Rj8Z8y4UVuWITvUlUMO~ipzrPARmITz~xLEcd4RVUA6WCW3LIa9FmczxM3GMqglrbGAUIoSTi5A__" alt="Car Image" className="w-full mt-24 rounded-md" />
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

            {/* Card 5 */}
            <div className="bg-white shadow rounded-lg p-4">
              <img src="https://s3-alpha-sig.figma.com/img/f699/abef/3f5cf908bc1ebc5bf5c91aca676e4157?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ERdH4Pk3na52VpiSiGk1pSOdAdgaSTY6v7hGnQcMnmnaga0MHuUhaSd-ShQZCdfZG~p~lbychrBeChTu3ecvy3b1C2Sq0I9cbcyZ1UAsZsqC4XC~CknA7-6nVLVR-Dg4-hnZ5AMO6fP52SoicZQ6jtrPeGAliRCQt89j3f-pPCW~7FHtB~VfPhEwcKcBdFJNhnqphQop-fEPdNAFMgBb0sKWH~ta5OjhuUnLlz9kVlEC~uVklZjl4enSnzWztHIK-Txn2dGPx0Ycd7lPm0s~Tu5CaziLpkRsZ-bbAqSq8zgf9VDYLW8LJsr6KpCzWUfoCrA8eHzPMbuDAmVmGofovA__" alt="Car Image" className="w-full rounded-md" />
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
              <img src="https://s3-alpha-sig.figma.com/img/2ed7/5540/73defa787d71b948931bdf156be51493?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VUFsapzzWqUJCeQw5wKctUNncRRT~977JXuQquu0VPBZ8D86622KqM7d3USyLBUMvnhc1QlAJLkCZ8R8vHnil0SPe2cL7KONkcv-sfCQqZImea1DABjEluzQywGZ94vC1IA5pjyBE5~sDR9BO815GFE9Iyk4dpbQjvVf7~9HzacnkivmtkVnL-TvG7hqhePs~8ocZ5A2YNFhRZCaKh3MRTyk~~AVZ0VmgHYPK2d3gatzChPS7iYr9lr~RXg1S0TiRz3OqnpUa0NX3ec0EqOzT5ovxz589DM7zNlL9BuHCTpZ4auz6NtfT~uS-woysZxLxbRAR7QWn9P3RwgEGbYQ2w__" alt="Car Image" className="w-full rounded-md" />
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
              <img src="https://s3-alpha-sig.figma.com/img/f699/abef/3f5cf908bc1ebc5bf5c91aca676e4157?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ERdH4Pk3na52VpiSiGk1pSOdAdgaSTY6v7hGnQcMnmnaga0MHuUhaSd-ShQZCdfZG~p~lbychrBeChTu3ecvy3b1C2Sq0I9cbcyZ1UAsZsqC4XC~CknA7-6nVLVR-Dg4-hnZ5AMO6fP52SoicZQ6jtrPeGAliRCQt89j3f-pPCW~7FHtB~VfPhEwcKcBdFJNhnqphQop-fEPdNAFMgBb0sKWH~ta5OjhuUnLlz9kVlEC~uVklZjl4enSnzWztHIK-Txn2dGPx0Ycd7lPm0s~Tu5CaziLpkRsZ-bbAqSq8zgf9VDYLW8LJsr6KpCzWUfoCrA8eHzPMbuDAmVmGofovA__" alt="Car Image" className="w-full rounded-md" />
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
              <img src="https://s3-alpha-sig.figma.com/img/2ed7/5540/73defa787d71b948931bdf156be51493?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Puqn6GaKFy9eejdUk9PcXBY5UEAjwA8KYnxmU~NLpRBccgVYpYn2SNKNKZ4qQTeAFyVd2RwdjjF8AIu-nRCGLUner8fVcnVoE~pYGQD1iPqn4BZe5g2SJJ9O2UpwuX9kOxIVQAalQ~xIV5ppfIrC1MO~cRT5wCnWth5jZtaF~nhDZwQ7RY0fswhaPpGbMzKb3gUGe-iztpHhmrLU6L2~oSPuv2VA4pBLf8j87jZ-QJAw3EokDoVvOjdkoCga1P9bOMyatB~-nY3LdE-KMX4H-H46bqSzYJJYy24Hj-4yLQVoGzgITbFB1lOz4EX6zT-BZO-oIJJ38FqotUSv-oQTLQ__" alt="Car Image" className="w-full rounded-md" />
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
