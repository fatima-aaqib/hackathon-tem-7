/* eslint-disable @next/next/no-img-element */

import { Bell, Heart, Search } from "lucide-react";

export default function NavBar() {
    return (

        <header className="border-b bg-white">
            <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 lg:px-6">
                {/* logo */}
                <div className="flex items-center gap-12">
                
                    <h3 className="text-xl font-bold text-blue-600 sm:text-2xl">MORENT</h3>
                    {/* search bar */}
                    <div className="relative hidden md:block">
                        <input type="search"
                            placeholder="Search something here"
                            className="w-[280px] rounded-lg border bg-gray-50 py-2.5 pl-4 pr-10 text-sm outline-none focus:border-blue-600 lg:w-[400px]" />
                        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />

                    </div>
                </div>
                {/* Icons */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* search icons mobile only */}
                    <button className="rounded-full p-2 hover:bg-gray-100 md:hidden">
                        <Search className="h-6 w-6 text-gray-600" />
                    </button>
                    {/* other icons on sm screen */}
                    <button className="hidden rounded-full p-2 hover:bg-gray-100 sm:block">
                        <Heart className="h-6 w-6 text-gray-600" />
                    </button>
                    <button className="hidden rounded-full p-2 hover:bg-gray-100 sm:block">
                        <Bell className="h-6 w-6 text-gray-600" />
                    </button>
                    {/* profile picture*/}
                    <button className="rounded-full p-2 hover:bg-gray-100">
                        <div className="h-8 w-8 rounded-full bg-gray-200">
                           
                            <img src="https://s3-alpha-sig.figma.com/img/f1f5/6cb5/7c6c5d88e94501a481b5f732536c2851?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o3Rx4DP6Md4sfr-geOWzMiecpDr8oAJmmU0QmRfMLXDsq96B1p63oz2cxB6EvRfD-LW~ZVFrdINPIYEkw9x6dmyiWPOtnqcBBXXQ9u-Us8kkEzSB8h6NDv3h6yx5x2mfK0ffo8dnInf6DhZHaWXWLmILwA-6nML-~vORnwd-SFozgREuIehrAFSehXaKlyXccIytONXDxKy1S1Udb5NRJQLzATAyysfsTMxSC-fk7qM1LGlPo5SDqjqTsPSZ87nCeUKrHLqvr4DSdI~1p504Fyf9KlZqrMNBgKGMU78qAmNrfSU6lEgXHEetJFIWVCW4XXPGoZQT1k9fxQ2sKc2MlQ__" alt=""
                            className="rounded-full" />
                        </div>
                    </button>
                </div>
            </div>
            {/* mobile search bar-only shown on mobile */}
            <div className="border-t p-4 md:hidden">
                <div className="relative">
                    <input type="search"
                        placeholder="Search something here"
                        className="w-full rounded-lg border bg-gray-50 py-2.5 pl-4 pr-10 text-sm outline-none focus:border-blue-600" />
                    <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
            </div>

        </header>

    )
}