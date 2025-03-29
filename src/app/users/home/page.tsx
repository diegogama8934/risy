import { FoodCard } from "@/components/food/FoodCard";
import { fakeFoods } from "@/constants/Food";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PromotionedFoodCard } from "@/components/food/PromotionedFoodCard";
import { DollarSign, Gift, Leaf, ChevronRight } from "lucide-react";
import Link from "next/link";
export default function UserFeedPage() {



  return (
    <div className="flex flex-col gap-4 px-8 pt-8">
      <h1 className="text-2xl font-bold">Bienvenido de nuevo, Diego</h1>

      <form className="flex gap-2">
        <Input placeholder="Busca un alimento" />
        <Button type="submit">Buscar</Button>
      </form>

      <div className="flex flex-col gap-2 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-lg text-neutral-800 font-bold">Alimentos promocionados</h1>
          <button><ChevronRight className="w-6 h-6 !text-neutral-500" /></button>
        </div>
        <div className="flex gap-4 overflow-x-auto">
          {fakeFoods.map(fakeFood => <PromotionedFoodCard key={fakeFood.id} food={fakeFood} />)}
        </div>
      </div>

      <div className="flex gap-2">
        <Link href="/food/compost" className="flex-1 py-8 border rounded-md bg-lime-700 !text-white">
          <div className="flex flex-col items-center gap-2">
            <Leaf />
            <span>Composta</span>
          </div>
        </Link>
        <Link href="/food/sale" className="flex-1 py-8 border rounded-md bg-purple-700 !text-white">
          <div className="flex flex-col items-center gap-2">
            <DollarSign />
            <span>Venta</span>
          </div>
        </Link>
        <Link href="/food/donation" className="flex-1 py-8 border rounded-md bg-sky-700 !text-white">
          <div className="flex flex-col items-center gap-2">
            <Gift />
            <span>Donación</span>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fakeFoods.map(fakeFood => <FoodCard key={fakeFood.id} {...fakeFood} />)}
      </div>
    </div >
  );
}



// bg-[#84CC18]