"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Post } from "@/components/post/Post";
import { useQuery } from "@tanstack/react-query";
import { getProvider } from "@/service/providers/getOne";


export default function ProviderPage() {
  const { id } = useParams();
  const { data: provider } = useQuery({
    queryKey: ["provider"],
    queryFn: () => getProvider(id as string),
  });
  
  const providerPosts = provider?.posts;

  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-1 flex flex-col items-center gap-4 p-8 border rounded-2xl bg-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{provider?.name}</h1>
          <Image
            src={provider?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdL3FeRfpb0YfZ168d3qcJg20m63e4AAXx8A&s"}
            alt={provider?.name || "user image"}
            width={100}
            height={100}
            className="rounded-full !w-64 !h-64 object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col"><b>Correo electrónico:</b> {provider?.email}</div>
          <div className="flex flex-col"><b>Teléfono:</b> {provider?.phoneNumber}</div>
          <div className="flex flex-col"><b>Dirección:</b> {provider?.address}</div>
        </div>
      </div>

      <div className="col-span-4 flex flex-col gap-4">
        {providerPosts?.map(post => <Post key={post.id} {...post} goToProvider={false} userInterested={false} />)}
      </div>
    </div>
  );
}