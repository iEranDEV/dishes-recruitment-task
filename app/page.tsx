'use client';

import { FormEvent, useEffect, useState } from "react";
import Input from "./components/Input";
import { DishForm, DishType } from "@/types";
import { FormContext } from "./context/FormContext";
import DishTypeSection from "./components/dish_type/DishTypeSection";
import Button from "./components/Button";
import DetailsCarousel from "./components/details/DetailsCarousel";

export default function FormPage() {
	const [formData, setFormData] = useState<DishForm>({
		name: '',
		preparation_time: '00:00:00',
		type: DishType.None,
	});

	// Reset form details after type change
	useEffect(() => {
		setFormData({
			name: formData.name,
			preparation_time: formData.preparation_time,
			type: formData.type,
		})
	}, [formData.type]);

	// Submit function
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('submitted')
	}

	// Change value of form field
	const handleChange = (field: string, value: string) => {
		setFormData((prevData) => ({...prevData, [field]: value}))
	}

	return (
		<div className="h-full w-full flex justify-center items-center overflow-hidden">
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
					<form onSubmit={(e) => handleSubmit(e)} className="w-full flex flex-col gap-5">
						
						{/* Dish name input */}
						<Input title="Dish name" name="name" type="text" placeholder="e.g. Honey Roast Duck" />

						{/* Preparation time input (--:--:-- format) */}
						<Input title="Preparation time" name="preparation_time" type="time" placeholder="test"  />

						{/* Dish type select input */}
						<div className="flex flex-col gap-1">
							<label htmlFor="name" className="text-gray-500 font-semibold">Dish type <span className="text-gray-400">*</span></label>
							<DishTypeSection />
						</div>

						<hr />

						{/* Animated carousel of detail inputs */}
						<DetailsCarousel />

						<hr />

						{/* Submit button */}
						<Button />
					</form>
				</FormContext.Provider>
			</div>
		</div>
	)
}
