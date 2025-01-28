import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="bg-blue-500 text-blue-200 min-h-screen">
      {/* Hero Section with Image */}
      <div className="relative w-full h-64">
        <Image 
          src="/Boost-Business.jpg" 
          alt="Rental Business" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-white">
          Transform Your Rental Business: Unleash Cost Savings with Rental Car Manager
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          In the competitive world of vehicle rental operations, cost efficiency and customer satisfaction are paramount. RentalCarManager.com offers a comprehensive solution designed to streamline operations, reduce costs, and enhance the customer experience.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-white">Streamlined Operations for Your Staff</h2>
        <p className="text-lg leading-relaxed mb-6">
          Rental Car Manager simplifies the booking and checkout process, ensuring your staff can handle customer interactions quickly and efficiently. This intuitive workflow minimises the time spent on administrative tasks, allowing your team to focus on delivering exceptional customer service.
        </p>

        <h4 className="text-2xl font-medium mb-4 text-white">Key Features:</h4>
        <ul className="list-disc list-inside mb-6">
          <li>Ease of Use: The software is designed with an intuitive interface, ensuring minimal training is required.</li>
          <li>Efficient Booking Process: From online bookings to over-the-counter hires, Rental Car Manager ensures smooth transactions.</li>
        </ul>

        <h3 className="text-3xl font-semibold mb-4 text-white">Conclusion</h3>
        <p className="text-lg leading-relaxed">
          Rental Car Manager is the ultimate solution for vehicle rental operators looking to cut costs and enhance operational efficiency. With its comprehensive features and cost-effective implementation, you’ll see immediate and long-term benefits.
        </p>
      </div>
    </div>
  )
}

export default page
