import React from 'react'
import { Equal, Shield, Award, ClipboardCheck, Users, GraduationCap } from 'lucide-react';

const ServiceSixSecond = () => {
    return (
        <>
        
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 mt-8">
          <p className="text-[#FCBC04] font-semibold uppercase tracking-wide">HOW WE WORK</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Code Of Conduct</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Efficiently navigate the world of blockchain with our streamlined approach, from discovery and planning to development and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-[#FCBC04] w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4 transition-colors duration-300 hover:bg-[#e6ab00]">
              <Equal size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#FCBC04] mb-2 transition-colors duration-300 hover:text-[#e6ab00]">Equality</h3>
            <p className="text-gray-600">
              We understand your business requirements and goals, analyzing challenges and opportunities to devise an effective blockchain strategy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-[#FCBC04] w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4 transition-colors duration-300 hover:bg-[#e6ab00]">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#FCBC04] mb-2 transition-colors duration-300 hover:text-[#e6ab00]">Integrity</h3>
            <p className="text-gray-600">
              We develop a tailored plan and roadmap, defining objectives, timelines, and milestones for successful implementation.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-[#FCBC04] w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4 transition-colors duration-300 hover:bg-[#e6ab00]">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#FCBC04] mb-2 transition-colors duration-300 hover:text-[#e6ab00]">Excellence</h3>
            <p className="text-gray-600">
              Our skilled team creates robust and scalable blockchain solutions, including smart contracts and decentralized applications (DApps).
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-[#FCBC04] w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4 transition-colors duration-300 hover:bg-[#e6ab00]">
              <ClipboardCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#FCBC04] mb-2 transition-colors duration-300 hover:text-[#e6ab00]">Accountability</h3>
            <p className="text-gray-600">
              Our skilled team creates robust and scalable blockchain solutions, including smart contracts and decentralized applications (DApps).
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-[#FCBC04] w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4 transition-colors duration-300 hover:bg-[#e6ab00]">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#FCBC04] mb-2 transition-colors duration-300 hover:text-[#e6ab00]">Collaboration</h3>
            <p className="text-gray-600">
              Our skilled team creates robust and scalable blockchain solutions, including smart contracts and decentralized applications (DApps).
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-[#FCBC04] w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4 transition-colors duration-300 hover:bg-[#e6ab00]">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#FCBC04] mb-2 transition-colors duration-300 hover:text-[#e6ab00]">Learning</h3>
            <p className="text-gray-600">
              We deploy your blockchain solution securely, integrate it into your infrastructure, provide training, and offer ongoing support and maintenance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );


        </>
    )
}

export default ServiceSixSecond