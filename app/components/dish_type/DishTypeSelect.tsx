import { DishType } from "@/types"
import Image from "next/image"
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { motion } from "framer-motion";

type DishTypeSelectProps = {
    img: any,
    type: DishType
}

export default function DishTypeSelect({ img, type }: DishTypeSelectProps) {

    const name = type.toString();
    const formContext = useContext(FormContext);

    const selected = formContext?.formData.type === type

    return (
        <motion.div 
        onClick={() => !selected && formContext?.handleChange('type', type)} 
        className={`w-full py-3 cursor-pointer flex flex-col justify-center items-center gap-4 rounded-lg border border-gray-300 relative`}>
            <div className="h-14 w-14 flex justify-center items-center rounded-full overflow-hidden bg-gray-50">
                <Image src={img} alt={name} className="h-10 w-10" />
            </div>

            <p className="text-sm font-semibold">{name}</p>

            {selected && <motion.div layoutId="dishType" className="z-50 absolute left-0 top-0 h-full rounded-lg border-2 border-emerald-500 w-full">
                
            </motion.div>}
        </motion.div>
    )
}