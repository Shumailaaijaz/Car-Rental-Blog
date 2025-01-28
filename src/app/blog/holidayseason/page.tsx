import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Image */}
      <div className="relative w-full h-64">
        <Image 
          src="/blog2.png" 
          alt="Holiday Car Rental" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-b-lg"
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          Maximise Your Holiday Season Efficiency with Rental Car Manager’s DNR Days and Holiday Extra Fees Features
        </h1>

        {/* Paragraphs with Divider Lines */}
        <p className="text-lg leading-relaxed mb-8">
          The festive season is a time for joy, family gatherings, and well-earned holidays. For car rental companies, however, it can also bring unique operational challenges. High demand, limited staff availability, and public holidays require careful planning to maintain smooth operations while maximising revenue.
        </p>

        <hr className="border-t border-gray-300 mb-8" />

        <p className="text-lg leading-relaxed mb-8">
          Rental Car Manager (RCM) offers two powerful features to help you navigate the holiday season efficiently: <strong>Do Not Rent (DNR) Days</strong> and <strong>Holiday Extra Fees</strong>. These tools can help you streamline operations, enhance customer satisfaction, and boost profitability. Here’s how:
        </p>

        <hr className="border-t border-gray-300 mb-8" />

        <h2 className="text-3xl font-semibold text-blue-600 mb-6">1. Simplify Holiday Operations with Do Not Rent (DNR) Days</h2>

        <p className="text-lg leading-relaxed mb-8">
          Public holidays often mean altered business hours or full closures. With RCM’s Do Not Rent Days, you can effortlessly manage these scenarios:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li><strong>Control Pickups and Drop-offs:</strong> Configure DNR Days to restrict pickups, drop-offs, or both on specific dates like Christmas Day or New Year’s Day.</li>
          <li><strong>Tailor for Specific Locations:</strong> Apply settings globally across all locations or customise them for individual branches.</li>
          <li><strong>Flexible Scheduling:</strong> Set DNR Days for single dates, extended periods (e.g., 15th to 30th December), or recurring days (e.g., every Sunday during December).</li>
          <li><strong>Manual Overrides:</strong> Enable manual overrides to grant exceptions if necessary, ensuring customer flexibility when needed.</li>
        </ul>

        <hr className="border-t border-gray-300 mb-8" />

        <h2 className="text-3xl font-semibold text-blue-600 mb-6">2. Boost Revenue with Holiday Extra Fees</h2>

        <p className="text-lg leading-relaxed mb-8">
          The holiday season often demands additional resources, from staff working overtime to managing higher operational costs. RCM’s Holiday Extra Fees feature allows you to offset these expenses and maximise revenue:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li><strong>Customised Charges:</strong> Add a fixed holiday surcharge to bookings made for pickup or drop-off on public holidays like Christmas or Boxing Day.</li>
          <li><strong>Effortless Integration:</strong> Once configured, holiday charges automatically appear on the Booking Fees tab, ensuring a seamless customer booking experience.</li>
          <li><strong>Location-Specific Options:</strong> Apply fees to all branches or tailor them for specific locations, depending on your business needs.</li>
        </ul>

        <hr className="border-t border-gray-300 mb-8" />

        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Prepare Your Business for the Festive Season</h2>

        <p className="text-lg leading-relaxed mb-8">
          As the holidays approach, now is the time to set up DNR Days and Holiday Extra Fees in your RCM system. These tools ensure your car rental business operates smoothly while optimising your revenue opportunities.
        </p>

        <p className="text-lg leading-relaxed mb-8">
          Let the festive season be a time of growth and satisfaction for your business. With RCM, you’re equipped to handle the holidays with confidence and ease.
        </p>

        <hr className="border-t border-gray-300 mb-8" />

        <p className="text-lg leading-relaxed">
          Not using Rental Car yet? Get in touch today to discover how our powerful tools can transform your car rental operations. <br />
          <strong>Happy Holidays from the team at Rental Car! 🎄</strong>
        </p>
      </div>
    </div>
  )
}

export default page
