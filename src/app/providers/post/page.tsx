"use client"

import { fakePosts } from "@/constants/Post";
import { fakeProviders } from "@/constants/User";
import { Post } from "@/components/post/Post";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ProvidersPostPage() {
  const fakeProvider = fakeProviders.find(provider => provider.id === "1");
  const providerPosts = fakePosts.filter(post => post.userId === "1");

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {/* Provider Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-md lg:shadow-lg overflow-hidden">
              <div className="relative h-32 lg:h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="absolute -bottom-12 lg:-bottom-16 left-1/2 transform -translate-x-1/2">
                  <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
                    <Image
                      src={fakeProvider?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdL3FeRfpb0YfZ168d3qcJg20m63e4AAXx8A&s"}
                      alt={fakeProvider?.name || "user image"}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-16 lg:pt-20 pb-4 lg:pb-6 px-4 lg:px-6">
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 text-center mb-4 lg:mb-6">{fakeProvider?.name}</h1>
                
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center gap-2 lg:gap-3 text-gray-600">
                    <FaEnvelope className="text-blue-500 text-sm lg:text-base" />
                    <span className="text-xs lg:text-sm break-words">{fakeProvider?.email}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 lg:gap-3 text-gray-600">
                    <FaPhone className="text-blue-500 text-sm lg:text-base" />
                    <span className="text-xs lg:text-sm">{fakeProvider?.phoneNumber}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 lg:gap-3 text-gray-600">
                    <FaMapMarkerAlt className="text-blue-500 text-sm lg:text-base" />
                    <span className="text-xs lg:text-sm break-words">{fakeProvider?.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Posts Section */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-md lg:shadow-lg p-4 lg:p-6">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Publicaciones</h2>
              <div className="space-y-4 lg:space-y-6">
                {providerPosts.map(fakePost => (
                  <Post 
                    key={fakePost.id} 
                    {...fakePost} 
                    goToProvider={false} 
                    userInterested={false} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
