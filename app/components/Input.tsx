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
            step={type === 'time' ? 1 : 'any'}
            className={`bg-gray-50 border ${error ? 'border-red-500' : 'border-gray-300'} px-2 py-1 rounded-lg`}
            defaultValue={type === 'time' ? '00:00:00' : undefined}
            {...register(name, validators)}
            />
            {error && <span className="text-red-500 text-sm flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                {error}
            </span>}
        </div>
    )
}