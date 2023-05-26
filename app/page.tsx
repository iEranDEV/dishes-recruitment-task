'use client';

import Input from "./components/Input";
import { DishForm } from "@/types";
import DishTypeSection from "./components/dish_type/DishTypeSection";
import Button from "./components/Button";
import { useForm } from "react-hook-form";
import DetailsCarousel from "./components/details/DetailsCarousel";
import { useEffect } from "react";

export default function FormPage() {
	const { register, handleSubmit, unregister, formState: { errors }, reset, watch, setValue, clearErrors} = useForm<DishForm>();

	const values = watch();

	// Reset values after type change
	useEffect(() => {
		let arr = ['no_of_slices', 'diameter', 'spiciness_scale', 'splices_of_bread'];
		clearErrors(arr);
		unregister(arr);
	}, [values.type])

	return (
		<div className="min-h-screen py-20 w-full flex justify-center items-center">
			<div className="flex flex-col gap-6 w-80">
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
					<Input 
						title="Dish name" 
						name="name" 
						type="text" 
						register={register} 
						error={errors.name?.message} 
						validators={{ required: 'This field is required'}}
					/>

					{/* Preparation time input (--:--:-- format) */}
					<Input 
						title="Preparation time" 
						name="preparation_time" 
						type="time" 
						register={register} 
						error={errors.preparation_time?.message} 
						validators={{ validate: (v: string) => v !== '00:00:00' || 'This field is required' }}
					/>

					{/* Dish type select input */}
					<div className="flex flex-col gap-1">
						<label htmlFor="name" className="text-gray-500 font-semibold">Dish type <span className="text-gray-400">*</span></label>
						<DishTypeSection clearErrors={clearErrors} register={register} setValue={setValue} error={errors.type?.message} />
					</div>

					<hr />

					{/* Animated carousel of detail inputs */}
					<DetailsCarousel errors={errors} values={values} register={register} />

					<hr />

					<div className="w-full flex justify-between items-center">
						{/* Cancel button */}
						<div onClick={() => reset()}>
							<Button text="Cancel" color="bg-gray-400">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
								</svg>
							</Button>
						</div>

						{/* Submit button */}
						<Button text="Submit" submit color="bg-emerald-500">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
							</svg>	
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
