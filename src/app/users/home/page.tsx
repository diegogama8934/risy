"use client";

import { PostCard } from "@/components/post/PostCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PromotionedPostCard } from "@/components/post/PromotionedPostCard";
import { DollarSign, Gift, Leaf, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getPosts } from "@/service/post/get";
import { useQuery } from "@tanstack/react-query";

export default function UserFeedPage() {


  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  console.log(posts);

  return (

    <div className="flex flex-col gap-8 p-4 sm:px-8 sm:pt-8 pb-12 bg-white rounded-xl border shadow-sm">
      <h1 className="text-xl sm:text-2xl font-bold">Bienvenido de nuevo, Diego</h1>

      <form className="flex flex-col sm:flex-row gap-2">
        <Input placeholder="Busca un alimento" className="w-full" />
        <Button type="submit" className="w-full sm:w-auto">Buscar</Button>
      </form>

      <div className="flex flex-col gap-2 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <h1 className="text-base sm:text-lg text-neutral-800 font-bold">Alimentos promocionados</h1>
            <span className="px-2 py-0.5 text-xs font-medium bg-lime-100 text-lime-700 rounded-full">Nuevo</span>
          </div>
          <Link
            href="/food/promoted"
            className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <span>Ver todos</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {posts?.map(post => <PromotionedPostCard key={post.id} post={post} />)}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        <Link
          href="/food/compost"
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-lime-500 to-lime-600 p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:from-lime-600 hover:to-lime-700"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative flex flex-col items-center gap-3">
            <div className="rounded-full bg-white/20 p-3 group-hover:bg-white/30 transition-colors duration-300">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-white">Composta</span>
          </div>
        </Link>
        <Link
          href="/food/sale"
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:from-rose-600 hover:to-rose-700"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative flex flex-col items-center gap-3">
            <div className="rounded-full bg-white/20 p-3 group-hover:bg-white/30 transition-colors duration-300">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-white">Venta</span>
          </div>
        </Link>
        <Link
          href="/food/donation"
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:from-sky-600 hover:to-sky-700"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative flex flex-col items-center gap-3">
            <div className="rounded-full bg-white/20 p-3 group-hover:bg-white/30 transition-colors duration-300">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-white">Donación</span>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {posts?.map((post, index) => (
          <div
            key={post.id}
            className={`${index % 3 === 1 ? 'sm:translate-y-8' : ''
              } transition-transform duration-300`}
          >
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}