import { DishForm } from "@/types";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
    title: string,
    name: string,
    type: string,
    error: string | undefined,
    validators?: {[key: string]: any},
    register: UseFormRegister<DishForm>
}

export default function Input({ title, name, type, error, validators, register }: InputProps) {

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-gray-500 font-semibold">{title} <span className="text-gray-400">*</span></label>
            <input 
            type={type}
            step={type === 'time' ? 2 : 1}
            className={`bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-300'} px-2 py-1 rounded-lg`}
            defaultValue={type === 'time' ? '00:00:00' : undefined}
            {...register(name, validators)}
            />
            <span className="text-red-500">
                {error}
            </span>
        </div>
    )
}