'use client';

import { FormEvent, useState } from "react";
import Input from "./components/Input";
import { DishForm, DishType } from "@/types";
import { FormContext } from "./context/FormContext";
import DishTypeSection from "./components/DishTypeSection";
import { AnimatePresence, motion } from "framer-motion";

export default function FormPage() {
	const [formData, setFormData] = useState<DishForm>({
		name: '',
		preparation_time: '00:00:00',
		type: DishType.Pizza
	})

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('submitted')
	}

	const handleChange = (field: string, value: string) => {
		setFormData((prevData) => ({...prevData, [field]: value}))
	}

	return (
		<div className="h-full w-full flex justify-center items-center">
			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					{/* Heading text */}
					<h1 className="text-3xl font-bold text-gray-800">Dish Form</h1>

					{/* Secondary description of form */}
					<span className="text-sm text-gray-400">
						Fill form below and submit it to add new dish.
					</span>
				</div>

				{/* Form */}
				<FormContext.Provider value={{formData, handleChange}}>
					<form onSubmit={(e) => onSubmit(e)} className="w-full flex flex-col gap-3">
						<Input title="Dish name" name="name" type="text" placeholder="e.g. Honey Roast Duck" />
						<Input title="Preparation time" name="preparation_time" type="time" placeholder="test"  />

						{/* Select dish type */}
						<DishTypeSection />
						
						<hr />
						
						<div className="relative h-32">
							<AnimatePresence>
								{/*{
									'Pizza': <motion.span key="pizza" initial={{x: -500, opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: 500, opacity: 0}}>pizza</motion.span>,
									'Soup': <motion.span key="soup" initial={{x: -500, opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: 500, opacity: 0}}>soup</motion.span>,
									'Sandwich': <motion.span key="sandwich" initial={{x: -500, opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: 500, opacity: 0}}>sandwich</motion.span>
								}[formData.type]*/}
								{formData.type === DishType.Pizza && <motion.span key={crypto.randomUUID()} className="absolute" initial={{x: -500, opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: 500, opacity: 0}}>pizza</motion.span>}
								{formData.type === DishType.Soup && <motion.span key={crypto.randomUUID()} className="absolute" initial={{x: -500, opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: 500, opacity: 0}}>soup</motion.span>}
								{formData.type === DishType.Sandwich && <motion.span key={crypto.randomUUID()} className="absolute" initial={{x: -500, opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: 500, opacity: 0}}>sandwich</motion.span>}
							</AnimatePresence>
						</div>

						<hr />

						create dish
					</form>
				</FormContext.Provider>
			</div>
		</div>
	)
}
