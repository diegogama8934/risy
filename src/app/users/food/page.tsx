
import { FoodCard } from "@/components/food/FoodCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fakeFoods } from "@/constants/Food";


export default function FoodPage({ }) {
  return (
    <div className="flex flex-col gap-4 px-8 pt-8 w-full">
      <h1 className="text-2xl font-bold">Alimentos</h1>

      <form className="flex gap-2">
        <Input placeholder="Busca un alimento" />
        <Button type="submit">Buscar</Button>
      </form>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {fakeFoods.map((fakeFood, index) => (
          <div
            key={fakeFood.id}
            className={`${index % 3 === 1 ? 'sm:translate-y-8' : ''
              } transition-transform duration-300`}
          >
            <FoodCard {...fakeFood} />
          </div>
        ))}
      </div>
    </div>
  )
}