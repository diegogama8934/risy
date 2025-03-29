
import { FoodCard } from "@/components/post/PostCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fakePosts } from "@/constants/Post";


export default function FoodPage({ }) {
  return (
    <div className="flex flex-col gap-4 px-8 pt-8 w-full">
      <h1 className="text-2xl font-bold">Alimentos</h1>

      <form className="flex gap-2">
        <Input placeholder="Busca un alimento" />
        <Button type="submit">Buscar</Button>
      </form>


      {fakePosts.map(fakePost => <FoodCard key={fakePost.id} {...fakePost} />)}
    </div>
  )
}