import DishTypeSelect from "./DishTypeSelect";
import pizzaImage from '@/public/pizza.svg'
import soupImage from '@/public/soup.svg'
import sandwichImage from '@/public/sandwich.svg'
import { DishForm, DishType } from "@/types";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { useRef } from "react";

type DishTypeSectionProps = {
    register: UseFormRegister<DishForm>,
    setValue: UseFormSetValue<DishForm>,
    error: string | undefined
}

export default function DishTypeSection({ register, setValue, error }: DishTypeSectionProps) {

    const typeRef = useRef<HTMLSelectElement | null>(null);
    const { ref, ...rest} = register('type', {required: 'This field is required'});

    const selectType = (type: DishType) => {
        setValue('type', type)
    }

    return (
        <div className="w-full grid grid-cols-3 gap-3">

            <select className="hidden" id="dishType" {...rest} ref={(e) => {
                ref(e);
                typeRef.current = e;
            }}>
                <option value=""></option>
                <option value="Pizza">Pizza</option>
                <option value="Soup">Soup</option>
                <option value="Sandwich">Sandwich</option>
            </select>

            <DishTypeSelect img={pizzaImage} type={DishType.Pizza} selectType={selectType} selected={typeRef.current?.value === 'Pizza'} />
            <DishTypeSelect img={soupImage} type={DishType.Soup} selectType={selectType} selected={typeRef.current?.value === 'Soup'} />
            <DishTypeSelect img={sandwichImage} type={DishType.Sandwich} selectType={selectType} selected={typeRef.current?.value === 'Sandwich'} />

            <span>{error}</span>
        </div>
    )
}