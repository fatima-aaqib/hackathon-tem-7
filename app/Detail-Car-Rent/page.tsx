import Link from "next/link";



/* eslint-disable @next/next/no-img-element */
export default function DetailCarRent(){
    
  /* eslint-disable @next/next/no-img-element */
  
  
  
  
  
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
        image: "https://s3-alpha-sig.figma.com/img/2e45/bdb6/4d6f5df6dab1d18d948223ba47972f21?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRphuHBNx2qZ9iMqCYKY6WXr2seveWh6hcOqTEu1pVy9vuxzBbrBDh7fqsnGnrvNgz8ZlGdM2kyWTRAui-cTYham-P5JYI59dxJdTbX5C1nPLCRAiXFfNvbdjLH8b7JcAhCABOJPkrfCHhqTBgx4UdLGnZ9V5SF0IkmscLXfevagxMaOocI7WwscP~J90GS4us1HOoba6N32Dvf03VOjVg8YJuy59jxLwe2a5c5xI8uIwYA1rJ9CpkLKE~NNSHUmhgC~hMdqNRJTxECmIB~qvq0mN-jwPHvH53~pDLq7srmhwmWH7dKcSBT9ngZw6t-T23eTNSiwa29J0Kt79lYQxg__",
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
                    className="w-full h-40 md:h-48 object-cover" />
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
                <img src="https://s3-alpha-sig.figma.com/img/f699/abef/3f5cf908bc1ebc5bf5c91aca676e4157?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ERdH4Pk3na52VpiSiGk1pSOdAdgaSTY6v7hGnQcMnmnaga0MHuUhaSd-ShQZCdfZG~p~lbychrBeChTu3ecvy3b1C2Sq0I9cbcyZ1UAsZsqC4XC~CknA7-6nVLVR-Dg4-hnZ5AMO6fP52SoicZQ6jtrPeGAliRCQt89j3f-pPCW~7FHtB~VfPhEwcKcBdFJNhnqphQop-fEPdNAFMgBb0sKWH~ta5OjhuUnLlz9kVlEC~uVklZjl4enSnzWztHIK-Txn2dGPx0Ycd7lPm0s~Tu5CaziLpkRsZ-bbAqSq8zgf9VDYLW8LJsr6KpCzWUfoCrA8eHzPMbuDAmVmGofovA__" alt="Car Image" className="w-full rounded-md" />
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
                      <div className="flex justify-center flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
  
                          <div className=" lg: bg-white p-8 rounded-lg shadow">
                              <div className=" bg-blue-500 w-[500px] p-6 rounded-lg text-white">
                                  <h2 className="text-xl font-semibold">Sports car with the best design and acceleration</h2>
                                  <p className="mt-2">Safety and comfort while driving a futuristic and elegant sports car</p>
                                  <img src="/images/View (1).png" alt="" className="mt-4 w-full rounded-lg" />
                                  <img src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q~tvt4~N6t2PCET8JqIKDxiSf6lfX2lKaPxN3lrVD93ezT925Xgi~HuW6m~BxPoCWcuE3Gu-urOOJlZdOtM317oPlGLby0uMFI7RayzVlTFIw5SzOPbHbvraAQV2NtD4VkhD7Y7BKt8iCchBRIRLD-hPS~g43EMcmd9NEM8NVAANiY2wuQKSvNyezEzW4F6uyXC0lOCXt6nmMRqCt-erXrrfyOmRIyduOycK04lXQwsYQBwBrA2IRQiVoQdV-sVZ6SfcruQNsXey2cABw0ihh1HoDLjloLEonLJquvJsH-Hk1qlqqJtHRG7xNZkwi6mmYq49a~yYFguNgc8~ZyxO-g__" alt="" />
                              </div>
                              <div className="flex space-x-4 mt-4">
                                  <img src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q~tvt4~N6t2PCET8JqIKDxiSf6lfX2lKaPxN3lrVD93ezT925Xgi~HuW6m~BxPoCWcuE3Gu-urOOJlZdOtM317oPlGLby0uMFI7RayzVlTFIw5SzOPbHbvraAQV2NtD4VkhD7Y7BKt8iCchBRIRLD-hPS~g43EMcmd9NEM8NVAANiY2wuQKSvNyezEzW4F6uyXC0lOCXt6nmMRqCt-erXrrfyOmRIyduOycK04lXQwsYQBwBrA2IRQiVoQdV-sVZ6SfcruQNsXey2cABw0ihh1HoDLjloLEonLJquvJsH-Hk1qlqqJtHRG7xNZkwi6mmYq49a~yYFguNgc8~ZyxO-g__" alt="" className="w-[148px] h-[124px] rounded-lg border-2 bg-[#3563E9] border-blue-500" />
                                  <img src="https://s3-alpha-sig.figma.com/img/2a70/cf86/a73f1fdfda8a78629de1874016c972fe?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q7fkHyvtApAEKXFWfTYUxRF~BprEc5Q5JINvIkmbfBa4GSCyQP9EHuGaCN~M7jr~HNaEGc9Nv23T20GvkJ4MEiM31b6PTaLSJS~mGx1C5jvEyfTAY6tsk-xJGqEIepdHaH9Z~coyS-fUCVt1dZNlO500fHlojzNVDAGedZEyuU98-fVIt9lW~5J3XQrj--2AelIAyVhVsA2dH76xhfMcM9AC9whGPKJ3~2fJYJTW1ZFSl0Ps1go62VFA9MHrxycIpU9ykXNJxZ8dujbNpgQoz4Ed1Wg09E769GXiRbbCNA6hWc~cOAwxeksP3fRwqaAAMbbOTQ-wbMHiE2xj5~W5yA__" alt="Interior of the sports car" className="w-[148px] h-[124px] rounded-lg"></img>
                                  <img src="https://s3-alpha-sig.figma.com/img/b79c/e842/46da5a33b100b5e944d576a984fba3e1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WI6kIwzpryjvdmX2Rr-rjRLLf~JWNqiKvIX85OcwJqcYOFPhLbC2vW8lqyniv94CExSdeoFIPEfS~Okwas6v-RVoQ6~NmhBm-TU03WgtqR5XaQYTE5SEC8v2NvrcRVZ~wgA4Tkd6qhvoN16iJIhdDJ4RTtDwtapPOSAzDX9WeMAHIUt0YE5q0r2gcW5YJ6tgPqAa1gYsAk5R5cKOLOgNYl26hlTK21~gWYyY67GeqiaPgKsmoGeBe~hdDX9fURjRZXyEQRuupK5hPALWdRyK~FTYWsxc6Sx4~prnn~mVNgf3a1fufOaeuI92EiT3ynUjiOTENIyRXdmuZH-PNp4-PQ__" alt="" className="w-[148px] h-[124px] rounded-lg border-2 bg-[#3563E9] border-blue-500" />
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
                                  <img src="https://s3-alpha-sig.figma.com/img/9b76/706a/6ff04d2c5ee05f69f07eda85ba8c1846?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ez5-pce8sbgugMz4YZCl6fpaj4F8yWGZ7W5xEol40DKSK82uNnpMz1Fly0MEch3qaE0YgChmtPXmC3oi8CPaOsCfHduoYxCKLvUusiQTmgENXJGHmOt-UTQXG04ycYCj3K~H4~3GUC3wckBWY79YI2SxMOnqMd58QdtUs~aN1paCJRuvbdwSwNP2vwYGKWN3ABru0uAICG2kaSqLXO6jn9utGb5HEbU1PtsrzJ7EnxrzdjsTgLc6xIvs3oVFn~H4wE~RuP2Xy-vxfY2KcZlaPeF6DHpO~Q8I6v9ZwnKxndlvYejgdOo~vsJVy5sPV4I2e0uDIYZzM624DrmE4KgWhg__" alt="Profile picture of Alex Stanton" className="w-12 h-12 rounded-full"></img>
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
                                  <img src="https://s3-alpha-sig.figma.com/img/1f59/2390/d69545d7cf9ff5be12e2248ebf54993a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EWBPMAxrLU0ke91fm0PrSm8WY~jEimfXUW--h9hxjYnqSAFpB~SKNApCh9EfSGTEFYj1tuBdIVRJXauDmBb526Ri2pz7FLl9HTtW761hilpykuFZqqeTRlzR6rwmADrXsQHlZ-PRFkcnOPgNmpdhyQeZyCVNyUruOwuPzkUnSMyB3CE1yjdokEJkjDDovkvtY-GO8yhHcbjHvX4LD2j6wYWAiw9FBIXUul5Z~4kVxPB8sR2MyWQSj1MrqufUuMrHcKrPl3WAr5mgXVYekVTv~DC4Lr~~qwpqeVIDfHSGtikm2zV0hRrlPY0rYoHlDz6BmTH0pipTqwL7z9pYYtt92A__" alt="Profile picture of Skylar Dias" className="w-12 h-12 rounded-full"></img>
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