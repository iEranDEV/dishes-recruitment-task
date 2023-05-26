'use client';

import Input from "./components/Input";
import { DishForm } from "@/types";
import DishTypeSection from "./components/dish_type/DishTypeSection";
import Button from "./components/Button";
import { useForm } from "react-hook-form";
import DetailsCarousel from "./components/details/DetailsCarousel";

export default function FormPage() {
	const { register, handleSubmit, formState: { errors }, reset, watch, setValue} = useForm<DishForm>();

	const values = watch();

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
				<form onSubmit={handleSubmit((data) => console.log(data))} className="w-full flex flex-col gap-5">
					
					{/* Dish name input */}
					<Input title="Dish name" name="name" type="text" register={register} error={errors.name?.message} validators={{ required: 'This field is required'}} />

					{/* Preparation time input (--:--:-- format) */}
					<Input title="Preparation time" name="preparation_time" type="time" register={register} error={errors.preparation_time?.message} validators={{ required: 'This field is required'}} />

					{/* Dish type select input */}
					<div className="flex flex-col gap-1">
						<label htmlFor="name" className="text-gray-500 font-semibold">Dish type <span className="text-gray-400">*</span></label>
						<DishTypeSection register={register} setValue={setValue} error={errors.type?.message} />
					</div>

					<hr />

					{/* Animated carousel of detail inputs */}
					<DetailsCarousel errors={errors} values={values} register={register} />

					<hr />

					{/* Submit button */}
					<Button />
				</form>
			</div>
		</div>
	)
}
