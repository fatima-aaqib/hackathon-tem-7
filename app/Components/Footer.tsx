export default function Footer(){
    return(
        <div className="bg-white text-gray-800">
    <footer className="bg-white py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h2 className="text-blue-600 text-2xl font-bold mb-2">MORENT</h2>
                    <p className="text-gray-600">Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-gray-800 font-semibold mb-2">About</h3>
                    <ul className="text-gray-600">
                        <li className="mb-1">How it works</li>
                        <li className="mb-1">Featured</li>
                        <li className="mb-1">Partnership</li>
                        <li className="mb-1">Bussiness Relation</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-gray-800 font-semibold mb-2">Community</h3>
                    <ul className="text-gray-600">
                        <li className="mb-1">Events</li>
                        <li className="mb-1">Blog</li>
                        <li className="mb-1">Podcast</li>
                        <li className="mb-1">Invite a friend</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-gray-800 font-semibold mb-2">Socials</h3>
                    <ul className="text-gray-600">
                        <li className="mb-1">Discord</li>
                        <li className="mb-1">Instagram</li>
                        <li className="mb-1">Twitter</li>
                        <li className="mb-1">Facebook</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-4 flex flex-wrap justify-between text-gray-600 text-sm">
                <p>©2022 MORENT. All rights reserved</p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:underline">Privacy & Policy</a>
                    <a href="#" className="hover:underline">Terms & Condition</a>
                </div>
            </div>
        </div>
    </footer>
</div>


    )
}