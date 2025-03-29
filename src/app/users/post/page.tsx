"use client";

import { PostCard } from "@/components/post/PostCard";
import { Input } from "@/components/ui/input";
import { fakePosts } from "@/constants/Post";
import { Search, Loader2 } from "lucide-react";
import { useState, useCallback } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export default function PostsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearch = useDebounce(searchQuery, 300);

  const filteredPosts = useCallback(() => {
    if (!debouncedSearch) return fakePosts;
    
    return fakePosts.filter((post) => 
      post.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      post.description.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const posts = filteredPosts();

  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 lg:p-8 pb-8 sm:pb-12 lg:pb-16 w-full bg-white rounded-xl border shadow-sm">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Alimentos</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Explora y encuentra los alimentos que necesitas
        </p>
      </div>

      <form onSubmit={handleSearch} className="relative max-w-2xl w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input 
          placeholder="Busca un alimento por título o descripción" 
          className="pl-9 text-sm sm:text-base"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      {isLoading ? (
        <div className="flex items-center justify-center py-8 sm:py-12">
          <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin text-muted-foreground" />
        </div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
          <Search className="h-8 w-8 sm:h-12 sm:w-12 text-muted-foreground mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">No se encontraron resultados</h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Intenta con otros términos de búsqueda
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className={`${
                index % 3 === 1 ? 'sm:translate-y-8' : ''
              } transition-transform duration-300 hover:scale-[1.02]`}
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}