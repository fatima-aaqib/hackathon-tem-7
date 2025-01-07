import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function BillingInfo(){
    return (
        <div>
            <div className="bg-gray-100">
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
             
                <div className="lg:col-span-2 space-y-4">
                 
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Billing Info</h2>
                            <span className="text-gray-500">Step 1 of 4</span>
                        </div>
                        <p className="text-gray-500 mb-4">Please enter your billing info</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700">Name</label>
                                <input type="text" placeholder="Your name" className="w-full p-2 border border-gray-300 rounded mt-1"/>
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone Number</label>
                                <input type="text" placeholder="Phone number" className="w-full p-2 border border-gray-300 rounded mt-1"/>
                            </div>
                            <div>
                                <label className="block text-gray-700">Address</label>
                                <input type="text" placeholder="Address" className="w-full p-2 border border-gray-300 rounded mt-1"/>
                            </div>
                            <div>
                                <label className="block text-gray-700">Town/City</label>
                                <input type="text" placeholder="Town/City" className="w-full p-2 border border-gray-300 rounded mt-1"/>
                            </div>
                        </div>
                    </div>
                   
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Rental Info</h2>
                            <span className="text-gray-500">Step 2 of 4</span>
                        </div>
                        <p className="text-gray-500 mb-4">Please select your rental date</p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold">Pick-Up</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                                    <div>
                                        <label className="block text-gray-700">Location</label>
                                        <select className="w-full p-2 border border-gray-300 rounded mt-1">
                                            <option>Select your city</option>
                                            <option>Select your city</option>
                      <option>Karachi</option>
                      <option>Islamabad</option>
                      <option>Lahore</option>
                      <option>peshawar</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Date</label>
                                        <select className="w-full p-2 border border-gray-300 rounded mt-1">
                                            <option>Select your date</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Time</label>
                                        <select className="w-full p-2 border border-gray-300 rounded mt-1">
                                            <option>Select your time</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Drop-Off</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                                    <div>
                                        <label className="block text-gray-700">Location</label>
                                        <select className="w-full p-2 border border-gray-300 rounded mt-1">
                                            <option>Select your city</option>
                                            <option>Select your city</option>
                      <option>Karachi</option>
                      <option>Islamabad</option>
                      <option>Lahore</option>
                      <option>peshawar</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Date</label>
                                        <select className="w-full p-2 border border-gray-300 rounded mt-1">
                                            <option>Select your date</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Time</label>
                                        <select className="w-full p-2 border border-gray-300 rounded mt-1">
                                            <option>Select your time</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Payment Method</h2>
                            <span className="text-gray-500">Step 3 of 4</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Card Number */}
                        <div>
                            <label htmlFor="card-number" className="block text-sm font-medium text-gray-600">
                                Card Number
                            </label>
                            <input
                                type="text"
                                id="card-number"
                                placeholder="Card number"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-indigo-300"
                            />
                        </div>
                        {/* Expiration Date */}
                        <div>
                            <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-600">
                                Expiration Date
                            </label>
                            <input
                                type="text"
                                id="expiration-date"
                                placeholder="DD / MM / YY"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-indigo-300"
                            />
                        </div>
                        {/* Card Holder */}
                        <div>
                            <label htmlFor="card-holder" className="block text-sm font-medium text-gray-600">
                                Card Holder
                            </label>
                            <input
                                type="text"
                                id="card-holder"
                                placeholder="Card holder"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-indigo-300"
                            />
                        </div>
                        {/* CVC */}
                        <div>
                            <label htmlFor="cvc" className="block text-sm font-medium text-gray-600">
                                CVC
                            </label>
                            <input
                                type="text"
                                id="cvc"
                                placeholder="CVC"
                                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-indigo-300"
                            />
                        </div>



                            
                            {/* PayPal Section */}
                <div className="flex flex-wrap items-center p-4 border rounded-lg">
                    <input type="radio" name="payment-method" className="h-5 w-5 text-indigo-600 mr-4" />
                    <div className="flex justify-between w-full">
                        <span className="text-lg font-medium text-gray-600">PayPal</span>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                            alt="PayPal"
                            className="h-6"
                        />
                    </div>
                </div>
                {/* Bitcoin Section */}
                <div className="flex flex-wrap items-center p-4 border rounded-lg">
                    <input type="radio" name="payment-method" className="h-5 w-5 text-indigo-600 mr-4" />
                    <div className="flex justify-between w-full">
                        <span className="text-lg font-medium text-gray-600">Bitcoin</span>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
                            alt="Bitcoin"
                            className="h-6"
                        />
                    </div>
                    </div>
              
                        </div>
                    </div>
                            
                  
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Confirmation</h2>
                            <span className="text-gray-500">Step 4 of 4</span>
                        </div>
                        <p className="text-gray-500 mb-4">We are getting to the end. Just few clicks and your rental is ready!</p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <input type="checkbox" id="marketing" className="h-4 w-4 text-blue-600"/>
                                <label htmlFor="marketing" className="ml-2 text-gray-700">I agree with sending me marketing and newsletter emails. No spam, promised!</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="terms" className="h-4 w-4 text-blue-600"/>
                                <label htmlFor="terms" className="ml-2 text-gray-700">I agree with our terms and conditions and privacy policy.</label>
                            </div>
                            <button className="w-[140px] bg-blue-600 text-white p-2 rounded mt-4"> <Link href="/Car-Rent">Rent Now</Link></button>
                        </div>
                        <p className="text-gray-500 mt-4">All your data are safe</p>
                        <p className="text-gray-500">We are using the most advanced security to provide you the best experience ever.</p>
                    </div>
                </div>
              
                <div className="space-y-4">
                  
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-4">Rental Summary</h2>
                        <p className="text-gray-500 mb-4">Prices may change depending on the length of the rental and the price of your rental period.</p>
                        <div className="flex items-center space-x-4 mb-4">
                            <img src="/Look%20(2).png" alt="Image of Nissan GT-R" className="w-24 h-24 bg-[#3563E9] rounded"/>
                            <div>
                                <h3 className="text-lg font-semibold">Nissan GT-R</h3>
                                <div className="flex items-center">
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <i className="fas fa-star text-yellow-500"></i>
                                    <span className="ml-2 text-gray-500">(440 reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-700">Subtotal</span>
                                <span className="text-gray-700">$80.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-700">Tax</span>
                                <span className="text-gray-700">$0.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-700">Apply promo code</span>
                                <button className="text-blue-600">Apply now</button>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <span className="text-lg font-semibold">Total Rental Price</span>
                            <span className="text-lg font-semibold">$80.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    

        </div>
    )
}