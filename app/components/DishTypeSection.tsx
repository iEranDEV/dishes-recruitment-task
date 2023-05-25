import DishTypeSelect from "./DishTypeSelect";
import pizzaImage from '@/public/pizza.svg'
import soupImage from '@/public/soup.svg'
import sandwichImage from '@/public/sandwich.svg'
import { DishType } from "@/types";

export default function DishTypeSection() {


    return (
        <div className="w-full grid grid-cols-3 py-2 gap-3">
            <DishTypeSelect img={pizzaImage} type={DishType.Pizza} />
            <DishTypeSelect img={soupImage} type={DishType.Soup} />
            <DishTypeSelect img={sandwichImage} type={DishType.Sandwich} />
        </div>
    )
}