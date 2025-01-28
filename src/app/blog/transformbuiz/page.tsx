import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Hero Image */}
      <div className="relative w-full h-64">
        <Image 
          src="/blog3.webp" 
          alt="Rental Business" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-b-lg"
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">
          Transform Your Rental Business: Unleash Cost Savings with Rental Car Manager
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          In today’s digital age, having a strong online presence is essential for car rental providers. One of the most effective tools to enhance visibility and attract customers is <strong>Google My Business (GMB)</strong>. This article explores how leveraging GMB can benefit your car rental business and provides a clear guide to get started.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Why Google My Business Matters</h2>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Enhanced Visibility:</strong> A well-optimized GMB profile ensures your car rental service appears prominently in local Google searches. This visibility is key to capturing the attention of travellers and locals searching for rental cars in your area.</li>
          <li><strong>Improved Customer Engagement:</strong> GMB allows direct interaction with potential customers through reviews, questions, updates, and more. Engaging with customers on GMB builds trust and credibility, encouraging more bookings.</li>
          <li><strong>Enhanced Local SEO:</strong> By optimising your GMB profile with accurate information, appealing photos, and regular updates, you can improve your local SEO rankings. This means more organic traffic and potential bookings for your car rental business.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Step-by-Step Guide to Setting Up Your Google My Business Account</h2>

        <ol className="list-decimal list-inside mb-6">
          <li><strong>Sign Up for Google My Business:</strong><br />
            Visit the Google My Business website and click on “Manage now” or “Start now” to begin the setup process.
          </li>
          <li><strong>Enter Your Business Details:</strong><br />
            Provide your business name, address, phone number, and website URL. Select the appropriate business category (e.g., car rental, vehicle hire).
          </li>
          <li><strong>Verify Your Business:</strong><br />
            Choose the verification method (usually by mail to your business address) and follow Google’s instructions to complete the verification process.
          </li>
          <li><strong>Optimise Your GMB Profile:</strong><br />
            Upload high-quality photos of your rental vehicles, facilities, and any unique features. Craft a compelling business description using relevant keywords to attract potential customers.
          </li>
        </ol>

        <h3 className="text-2xl font-medium mb-4 text-blue-600">Conclusion</h3>
        <p className="text-lg leading-relaxed">
          Google My Business is a powerful tool for NZ and AU car rental businesses aiming to increase their online visibility and attract more customers. By utilising its features effectively—enhancing visibility, engaging customers, and optimising your profile—you can position your business for success in the competitive car rental market.
        </p>
      </div>
    </div>
  )
}

export default page
