import { motion } from "framer-motion";

export default function DetailsCarouselElement({ children }: { children: JSX.Element}) {

    return (
        <motion.div 
        className="h-full bg-gray-50 flex flex-col gap-5 w-full" 
        initial={{x: -50, opacity: 0}} 
        animate={{x: 0, opacity: 1}}>
            {children}
        </motion.div>
    )
}