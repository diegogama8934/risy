
import Image from "next/image";
import { Post } from "@/interfaces/Post";

export function PromotionedFoodCard({ post }: { post: Post }) {

  return (
    <div className="flex flex-col gap-2 p-2 bg-white rounded-md border">

      <div className="w-24 h-24">
        <Image
          src={post.images[0]}
          alt="Food"
          width={100}
          height={100}
          className="rounded-md object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1>{post.title}</h1>
      </div>

    </div>
  );
}