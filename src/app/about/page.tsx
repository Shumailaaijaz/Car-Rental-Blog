import React from 'react';
import Image from 'next/image';
import Carousel from '@/components/Carousel';

const AboutPage = () => {
  return (
    
    <div className="bg-white text-gray-900 min-h-screen mt-5
    ">
      <Carousel/>
      {/* Hero Image */}
      <div className="relative w-full h-72">
        <Image 
          src="/04.jpg" 
          alt="About Us - Rental Car Business" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-b-lg"
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-blue-600 mb-8">About Us</h1>

        {/* Introduction */}
        <p className="text-lg leading-relaxed mb-8">
          Welcome to <strong>Rental Car Manager</strong>, your trusted partner in vehicle rental solutions. With years of experience in the industry, we provide reliable and efficient car rental services to customers across New Zealand and Australia. Our commitment is to deliver high-quality vehicles, exceptional customer service, and hassle-free rental experiences.
        </p>

        <hr className="border-t border-gray-300 mb-8" />

        {/* Our Mission */}
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Our Mission</h2>
        <p className="text-lg leading-relaxed mb-8">
          Our mission is to simplify the car rental process by offering a seamless booking experience, flexible rental options, and a fleet of well-maintained vehicles to meet the diverse needs of our customers. We strive to exceed expectations by focusing on customer satisfaction, affordability, and convenience.
        </p>

        <hr className="border-t border-gray-300 mb-8" />

        {/* Our Core Values */}
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Our Core Values</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed mb-8">
          <li><strong>Customer First:</strong> We put our customers at the heart of everything we do, ensuring they have a positive and hassle-free rental experience.</li>
          <li><strong>Quality and Safety:</strong> Our fleet of vehicles is regularly serviced and maintained to the highest standards to guarantee safety and reliability.</li>
          <li><strong>Innovation:</strong> We embrace technology to streamline our operations and provide a modern, efficient service.</li>
          <li><strong>Sustainability:</strong> We are committed to environmentally responsible practices and offer eco-friendly vehicle options.</li>
        </ul>

        <hr className="border-t border-gray-300 mb-8" />

        {/* Why Choose Us */}
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Why Choose Us?</h2>
        <p className="text-lg leading-relaxed mb-8">
          At Rental Car Manager, we understand that every journey is unique. Whether you need a car for a weekend getaway, a business trip, or long-term rental, we’ve got you covered. Our diverse fleet, competitive pricing, and personalized service make us the preferred choice for vehicle rentals.
        </p>

        <hr className="border-t border-gray-300 mb-8" />

        {/* Final Note */}
        <p className="text-lg leading-relaxed">
          Thank you for choosing Rental Car Manager. We look forward to serving you and making your rental experience smooth and enjoyable. <br />
          <strong>Let’s make your journey unforgettable!</strong>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
