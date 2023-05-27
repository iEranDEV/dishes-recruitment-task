import { INotification } from "@/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function NotificationElement({ data, removeNotification }: { data: INotification, removeNotification: Function }) {
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        if(timer >= 0) {
            const timetout = setTimeout(() => {
                setTimer((prev) => prev - 1);
            }, 1000)
    
            return () => {
                clearTimeout(timetout);
            }
        } else {
            removeNotification(data.name);
        }
    }, [timer]);

    return (
        <motion.div 
            className={`${data.status === 'ok' ? 'bg-emerald-500' : 'bg-red-500'} text-gray-50 w-64 rounded-lg p-4`}
            initial={{x: -50, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: -50, opacity: 0}}
        >
            <p className="text-sm">Successfully added new dish named <span className="font-semibold">{data.name}</span>!</p>
        </motion.div>
    )
}