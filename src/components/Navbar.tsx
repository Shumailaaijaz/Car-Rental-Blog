
"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


function Navbar() {
    const[navbar, setNavbar] = useState(false)
    return (

    <div>
        <nav className="flex w-full max-w-screen-xl h-15 bg-blue-500 fixed top-0 left-0 right-0 z-10 pt-0 justify-items-center justify-center">
            <div className=" flex-grow justify-between px-4 mx-auto lg:max-w-7xl md:flex md:px-8">
                  <div>
                    <div className="flex items-center justify-between pl-5 py-3 md:py-5 md:block "> {/*LOGO*/}
                      <div className="flex items-center">
                     <Image 
                      src="/car01.png" 
                      alt="logo" 
                      width={70} 
                      height={43.71} 
                      />
                      <h1 className="text-pretty font-extrabold">Car Rental</h1>
                      </div>
   
                         {/*Hamburger button for mobile*/}
                            <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus: border"
                                onClick={() => setNavbar(!navbar)}
                            >
                            {navbar ? (
                            <Image src="/close.png" width={30} height={30} alt="close" />
                            ) : (
                            <Image src="/menu.png" width={30} height={30} alt="menu" />
                            )}
                            </button>

                            </div>
                      </div>
                  </div>
                        <div>
                          <div
                            className={`flex-1 justify-self-center items-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                              navbar ? 'p-12 md:p-0 block' : 'hidden'
                            }`}
                          >
                            <ul className="h-screen md:h-auto justify-items-center flex ml-auto space-x-4 cursor-pointer hover:underline md:flex ">
                              <li className="pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                <Link href="/about" onClick={() => setNavbar(!navbar)}>
                                  About
                                </Link>
                              </li>
                              <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                                   Blog
 
                                </Link>
                              </li>
                              <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                <Link href="/gallery" onClick={() => setNavbar(!navbar)}>
                                   Gallery
                                </Link>
                              </li>
                              <li className="pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                                <Link href="/products" onClick={() => setNavbar(!navbar)}>
                                  Products
                                </Link>
                              </li>
                              
                            </ul>
                          </div>
                  </div>
            </div>
        </nav>
    </div>
                        
  )
}


export default Navbar
