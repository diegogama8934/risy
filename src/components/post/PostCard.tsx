'use client'

import { Chip } from "../common/Chip";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";
import { Post, FoodCategory } from "@/interfaces/Post";


export function PostCard({ category, description, title, images, id }: Post) {
  const fallbackImage = "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg";

  function getClassName(): string {
    if (category == FoodCategory.Compost) return "bg-lime-700 text-white";
    if (category == FoodCategory.Donation) return "bg-sky-700 text-white";
    if (category == FoodCategory.Sale) return "bg-purple-700 text-white";
    return "";
  }

  function getCategoryName(): string {
    if (category == FoodCategory.Compost) return "Composta";
    if (category == FoodCategory.Donation) return "Donación";
    if (category == FoodCategory.Sale) return "Venta";
    return "";
  }

  return (
    <Link
      href={`/users/post/${id}`}
      className="group relative block rounded-xl border border-border/40 bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-border/80"
    >
      {/* Mobile Design */}
      <div className="sm:hidden">
        <div className="relative w-full h-40">
          <Image
            src={images?.[0] ? images?.[0] : fallbackImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          {images?.length && images?.length > 1 && (
            <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs">
              <Images className="w-3 h-3" />
              <span>{images?.length}</span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <Chip
                className={`${getClassName()} rounded-full w-fit py-1 px-3 text-xs font-medium`}
                text={getCategoryName()}
              />
            </div>
            <p className="text-sm text-white/90 leading-relaxed line-clamp-2">{description}</p>
          </div>
        </div>
      </div>

      {/* Desktop Design */}
      <div className="hidden sm:block">
        <div className="relative w-full h-[280px]">
          <Image
            src={images?.[0] ? images?.[0] : fallbackImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {images?.length && images?.length > 1 && (
            <div className="absolute top-3 right-3 bg-black/60 text-white px-2.5 py-1.5 rounded-full flex items-center gap-1.5 text-sm">
              <Images className="w-4 h-4" />
              <span>{images?.length}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <Chip
                className={`${getClassName()} rounded-full w-fit py-1.5 px-3 text-sm font-medium`}
                text={getCategoryName()}
              />
            </div>
            <p className="text-base text-white/90 leading-relaxed line-clamp-2 mb-4">{description}</p>
            <div className="flex items-center text-white/80 text-sm font-medium">
              Ver más
              <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}