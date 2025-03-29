
import { PostCard } from "@/components/post/PostCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fakePosts } from "@/constants/Post";

export default function FoodPage({ }) {
  return (
    <div className="flex flex-col gap-4 p-8 w-full bg-white rounded-xl border shadow-sm">
      <h1 className="text-2xl font-bold">Alimentos</h1>

      <form className="flex gap-2">
        <Input placeholder="Busca un alimento" />
        <Button type="submit">Buscar</Button>
      </form>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {fakePosts.map((fakePost, index) => (
          <div
            key={fakePost.id}
            className={`${index % 3 === 1 ? 'sm:translate-y-8' : ''
              } transition-transform duration-300`}
          >
            <PostCard {...fakePost} />
          </div>
        ))}
      </div>
    </div>
  )
}