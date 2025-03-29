import { FoodCard } from "@/components/food/FoodCard";
import { fakeFoods } from "@/constants/Food";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export default function UserFeedPage() {



  return (
    <div className="flex flex-col gap-4 px-8 pt-8">
      <h1 className="text-3xl font-bold">Risy</h1>
      <form className="flex gap-2">
        <Input placeholder="Busca un alimento" />
        <Button type="submit">Buscar</Button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fakeFoods.map(fakeFood => <FoodCard key={fakeFood.id} {...fakeFood} />)}
      </div>
    </div>
  );
}