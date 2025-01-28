import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* First Blog Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/Boost-Business.jpg"
                  alt="blog"
                  width={400}
                  height={400}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Details
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Boost Your Car Rental Business with Google My Business
                  </h1>
                  <p className="leading-relaxed mb-3">
                    In today’s digital age, having a strong online presence is essential for car rental providers.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link href="/blog/rentbuiz" className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Blog Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/blog3.webp"
                  alt="blog"
                  width={400}
                  height={400}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Details
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Transform Your Rental Business: Unleash Cost Savings with Rental Car Manager
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Here’s how Rental Car Manager can transform your business and deliver significant cost savings.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link href="/blog/transformbuiz" className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Blog Card */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/blog2.png"
                  alt="blog"
                  width={400}
                  height={400}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Details
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Maximise Your Holiday Season Efficiency with Rental Car Manager’s DNR Days and Holiday Extra Fees Features
                  </h1>
                  <p className="leading-relaxed mb-3">
                    The festive season is a time for joy, family gatherings, and well-earned holidays.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link href="/blog/holidayseason" className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
