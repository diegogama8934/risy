import Image from "next/image";
import { Post } from "@/interfaces/Post";

export function PromotionedPostCard({ post }: { post: Post }) {
  const fallbackImage = "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg";
  return (
    <div className="group relative flex flex-row sm:flex-col gap-3 p-2 sm:p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer">
      <div className="relative w-24 h-24 sm:w-full sm:aspect-square overflow-hidden rounded-lg flex-shrink-0">
        <Image
          src={post.images?.[0] ? post.images?.[0] : fallbackImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 640px) 96px, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xs lg:text-xl">{post.title}</h1>

        <div className="flex flex-col gap-1 sm:gap-2 flex-grow">
          <div className="flex items-start justify-between gap-2">
            <div className="bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs font-medium text-primary shadow-sm whitespace-nowrap">
              Promoted
            </div>
          </div>

          {post.description && (
            <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{post.description}</p>
          )}

          {post.price && (
            <div className="flex items-center gap-2 mt-auto">
              <span className="text-base sm:text-lg font-bold text-primary">${post.price}</span>
              {post.originalPrice && (
                <span className="text-xs sm:text-sm text-gray-400 line-through">${post.originalPrice}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}