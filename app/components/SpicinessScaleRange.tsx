import { DishForm } from "@/types"
import { UseFormRegister } from "react-hook-form"

type SpicinessScaleRangeProps = {
    title: string,
    name: string,
    error: string | undefined,
    validators?: {[key: string]: any},
    register: UseFormRegister<DishForm>,
    value: number
}

export default function SpicinessScaleRange({ title, name, error, validators, register, value }: SpicinessScaleRangeProps) {

    // Get color depending on the input value
    const getColor = () => {
        if(value > 7) {
            return 'scale-red';
        } else if(value >= 4) {
            return 'scale-yellow';
        } else {
            return 'scale-green';
        }
    }

    return (
        <div className="flex flex-col gap-1 w-full">
            
            <label htmlFor={name} className="text-gray-500 font-semibold">{title} <span className="text-gray-400">*</span></label>
            
            <input className={`spiciness-scale ${getColor()}`} defaultValue={1} {...register(name, validators)} type="range" name={name} min={1} max={10} step={1} id={name} />

            {/* Measurement lines */}
            <div className="w-full flex justify-between text-gray-300 text-sm px-2">
                {Array.from({length: 10}, (_, i) => (
                    <div key={i + 1} className="flex flex-col gap-1 items-center select-none">
                        <span>|</span>
                        {(i + 1) % 3 === 1 && <span>{i + 1}</span>}
                    </div>
                ))}
            </div>
        </div>
    )
}