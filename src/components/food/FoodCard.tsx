import { Food, FoodCategory } from "@/interfaces/Food";
import { Chip } from "../common/Chip";
import Image from "next/image";
import Link from "next/link";


export function FoodCard({ category, description, title, image, id }: Food) {
  function getClassName(): string {
    if (category == FoodCategory.Compost) return "bg-lime-700/90 text-white";
    if (category == FoodCategory.Donation) return "bg-sky-700/90 text-white";
    if (category == FoodCategory.Sale) return "bg-purple-700/90 text-white";
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
      href={`/food/${id}`}
      className="group flex gap-4 p-6 rounded-lg border border-border/40 bg-card hover:border-border/80 transition-all duration-200 shadow-sm hover:shadow-md"
    >

      <div className="flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="rounded-lg !w-24 !h-24 object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <Chip
            className={`${getClassName()} rounded-full w-fit py-1.5 px-3 text-sm font-medium shadow-sm`}
            text={getCategoryName()}
          />
        </div>
        <p className="text-muted-foreground leading-relaxed line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}