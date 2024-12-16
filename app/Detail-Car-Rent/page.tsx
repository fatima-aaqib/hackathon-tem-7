

/* eslint-disable @next/next/no-img-element */
export default function DetailCarRent(){
    return(
        
    <div className="bg-gray-100 font-sans">
            <div className="flex flex-col lg:flex-row">

                <div className="w-full lg:w-1/4 p-6 bg-white">
                    <div className="mb-6">
                        <h2 className="text-gray-600 font-semibold mb-2">TYPE</h2>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-blue-500" checked />
                                <span className="ml-2 text-gray-700">Sport (10)</span>

                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-blue-500" checked />
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
                    <div className="mb-6">
                        <h2 className="text-gray-600 font-semibold mb-2">CAPACITY</h2>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-blue-500" checked />
                                <span className="ml-2 text-gray-700">2 Person (10)</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-blue-500" />
                                <span className="ml-2 text-gray-700">4 Person (14)</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-blue-500" />
                                <span className="ml-2 text-gray-700">6 Person (12)</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox text-blue-500" checked />
                                <span className="ml-2 text-gray-700">8 or More (16)</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-gray-600 font-semibold mb-2">PRICE</h2>
                        <div className="flex items-center">
                            <input type="range" min="0" max="100" value="50" className="w-full" />
                            <span className="ml-2 text-gray-700">Max. $100.00</span>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-3/4 p-6">
                    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">

                        <div className=" lg:w-full bg-white p-6 rounded-lg shadow">
                            <div className="bg-blue-500 p-6 rounded-lg text-white">
                                <h2 className="text-xl font-semibold">Sports car with the best design and acceleration</h2>
                                <p className="mt-2">Safety and comfort while driving a futuristic and elegant sports car</p>
                                <img src="/images/View (1).png" alt="" className="mt-4 w-full rounded-lg" />
                                <img src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q~tvt4~N6t2PCET8JqIKDxiSf6lfX2lKaPxN3lrVD93ezT925Xgi~HuW6m~BxPoCWcuE3Gu-urOOJlZdOtM317oPlGLby0uMFI7RayzVlTFIw5SzOPbHbvraAQV2NtD4VkhD7Y7BKt8iCchBRIRLD-hPS~g43EMcmd9NEM8NVAANiY2wuQKSvNyezEzW4F6uyXC0lOCXt6nmMRqCt-erXrrfyOmRIyduOycK04lXQwsYQBwBrA2IRQiVoQdV-sVZ6SfcruQNsXey2cABw0ihh1HoDLjloLEonLJquvJsH-Hk1qlqqJtHRG7xNZkwi6mmYq49a~yYFguNgc8~ZyxO-g__" alt="" />
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <img src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q~tvt4~N6t2PCET8JqIKDxiSf6lfX2lKaPxN3lrVD93ezT925Xgi~HuW6m~BxPoCWcuE3Gu-urOOJlZdOtM317oPlGLby0uMFI7RayzVlTFIw5SzOPbHbvraAQV2NtD4VkhD7Y7BKt8iCchBRIRLD-hPS~g43EMcmd9NEM8NVAANiY2wuQKSvNyezEzW4F6uyXC0lOCXt6nmMRqCt-erXrrfyOmRIyduOycK04lXQwsYQBwBrA2IRQiVoQdV-sVZ6SfcruQNsXey2cABw0ihh1HoDLjloLEonLJquvJsH-Hk1qlqqJtHRG7xNZkwi6mmYq49a~yYFguNgc8~ZyxO-g__" alt="" className="w-[148px] h-[124px] rounded-lg border-2 bg-[#3563E9] border-blue-500" />
                                <img src="https://s3-alpha-sig.figma.com/img/2a70/cf86/a73f1fdfda8a78629de1874016c972fe?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q7fkHyvtApAEKXFWfTYUxRF~BprEc5Q5JINvIkmbfBa4GSCyQP9EHuGaCN~M7jr~HNaEGc9Nv23T20GvkJ4MEiM31b6PTaLSJS~mGx1C5jvEyfTAY6tsk-xJGqEIepdHaH9Z~coyS-fUCVt1dZNlO500fHlojzNVDAGedZEyuU98-fVIt9lW~5J3XQrj--2AelIAyVhVsA2dH76xhfMcM9AC9whGPKJ3~2fJYJTW1ZFSl0Ps1go62VFA9MHrxycIpU9ykXNJxZ8dujbNpgQoz4Ed1Wg09E769GXiRbbCNA6hWc~cOAwxeksP3fRwqaAAMbbOTQ-wbMHiE2xj5~W5yA__" alt="Interior of the sports car" className="w-[148px] h-[124px] rounded-lg"></img>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow">
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
                                <span className="ml-2 text-gray-600">440+ Reviewer</span>
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
                            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">Rent Now</button>
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
                </div>
    )
}