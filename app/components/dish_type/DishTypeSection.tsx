import DishTypeSelect from "./DishTypeSelect";
import pizzaImage from '@/public/pizza.svg'
import soupImage from '@/public/soup.svg'
import sandwichImage from '@/public/sandwich.svg'
import { DishForm, DishType } from "@/types";
import { UseFormClearErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { useRef } from "react";

type DishTypeSectionProps = {
    register: UseFormRegister<DishForm>,
    setValue: UseFormSetValue<DishForm>,
    error: string | undefined,
    clearErrors: UseFormClearErrors<DishForm>
}

export default function DishTypeSection({ register, setValue, error, clearErrors }: DishTypeSectionProps) {

    const typeRef = useRef<HTMLSelectElement | null>(null);
    const { ref, ...rest} = register('type', {required: 'This field is required'});

    const selectType = (type: DishType) => {
        setValue('type', type);
        clearErrors('type');
    }

    return (
        <>
            <div className="w-full grid grid-cols-3 gap-3">

            <select className="hidden" id="dishType" {...rest} ref={(e) => {
                ref(e);
                typeRef.current = e;
            }}>
                <option value=""></option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="sandwich">Sandwich</option>
            </select>

            <DishTypeSelect img={pizzaImage} type={DishType.Pizza} selectType={selectType} selected={typeRef.current?.value === 'pizza'} />
            <DishTypeSelect img={soupImage} type={DishType.Soup} selectType={selectType} selected={typeRef.current?.value === 'soup'} />
            <DishTypeSelect img={sandwichImage} type={DishType.Sandwich} selectType={selectType} selected={typeRef.current?.value === 'sandwich'} />
            </div>
            {error && <span className="w-full text-red-500 text-sm flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                {error}
            </span>}
        </>
    )
}