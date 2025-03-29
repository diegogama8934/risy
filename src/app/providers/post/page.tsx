"use client"


import { fakePosts } from "@/constants/Post";
import { fakeProviders } from "@/constants/User";
import { Post } from "@/components/post/Post";
import Image from "next/image";

export default function ProvidersPostPage() {
  const fakeProvider = fakeProviders.find(provider => provider.id === "1");
  const providerPosts = fakePosts.filter(post => post.userId === "1");


  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-1 flex flex-col items-center gap-4 p-8 border rounded-2xl bg-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{fakeProvider?.name}</h1>
          <Image
            src={fakeProvider?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdL3FeRfpb0YfZ168d3qcJg20m63e4AAXx8A&s"}
            alt={fakeProvider?.name || "user image"}
            width={100}
            height={100}
            className="rounded-full !w-64 !h-64 object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col"><b>Correo electrónico:</b> {fakeProvider?.email}</div>
          <div className="flex flex-col"><b>Teléfono:</b> {fakeProvider?.phoneNumber}</div>
          <div className="flex flex-col"><b>Dirección:</b> {fakeProvider?.address}</div>
        </div>
      </div>

      <div className="col-span-4 flex flex-col gap-4">
        {providerPosts.map(fakePost => {
          console.log(fakePost);
          return (
            <Post key={fakePost.id} {...fakePost} goToProvider={false} userInterested={false} />
          )
        })}
      </div>
    </div>
  );
}
