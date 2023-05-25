import { motion } from "framer-motion";

export default function DetailsCarouselElement({ children }: { children: JSX.Element}) {

    return (
        <motion.div 
        className="absolute flex flex-col gap-5 w-full" 
        initial={{x: -200, opacity: 0}} 
        animate={{x: 0, opacity: 1}} 
        exit={{x: 200, opacity: 0}}>
            {children}
        </motion.div>
    )
}