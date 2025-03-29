"use client";
import { fakeProviders } from "@/constants/User";
import { useParams } from "next/navigation";
import Image from "next/image";
import { fakePosts } from "@/constants/Post";
import { Post } from "@/components/post/Post";


export default function ProviderPage() {
  const { id } = useParams();
  const fakeProvider = fakeProviders.find(provider => provider.id === id);
  const providerPosts = fakePosts.filter(post => post.userId === id);

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
        {providerPosts.map(fakePost => <Post key={fakePost.id} {...fakePost} goToProvider={false} userInterested={false} />)}
      </div>
    </div>
  );
}