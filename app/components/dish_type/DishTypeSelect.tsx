import { DishType } from "@/types"
import Image from "next/image"
import { motion } from "framer-motion";

type DishTypeSelectProps = {
    img: any,
    type: DishType,
    selectType: Function,
    selected: boolean
}

export default function DishTypeSelect({ img, type, selectType, selected }: DishTypeSelectProps) {

    const name = type.toString();
    
    return (
        <motion.div 
        onClick={() => !selected && selectType(type)} 
        className={`w-full py-3 cursor-pointer flex flex-col justify-center items-center gap-4 rounded-lg border border-gray-300 relative`}>
            <div className="h-14 w-14 flex justify-center items-center rounded-full overflow-hidden bg-gray-50">
                <Image src={img} alt={name} className="h-10 w-10" />
            </div>

            <p className="text-sm font-semibold capitalize">{name}</p>

            {selected && <motion.div layoutId="dishType" className="z-50 absolute left-0 top-0 h-full rounded-lg border-2 border-emerald-500 w-full">
                
            </motion.div>}
        </motion.div>
    )
}