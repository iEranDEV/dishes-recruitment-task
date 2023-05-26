import { DishForm, FormStatus } from "@/types";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import DishTypeSection from "./dish_type/DishTypeSection";
import Input from "./Input";
import DetailsCarousel from "./details/DetailsCarousel";
import SubmitButton from "./SubmitButton";


export default function Form({ addNotification }: { addNotification: Function }) {
    const form = useForm<DishForm>();
    const [status, setStatus] = useState(FormStatus.FORM);

	const values = form.watch();

    // On submit handler
	const onSubmit: SubmitHandler<DishForm> = async (data: DishForm) => {
        if(status === FormStatus.PENDING) return;

		let url = process.env.NEXT_PUBLIC_API_URL;
		if(url) {
			setStatus(() => (FormStatus.PENDING));
			await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then((res) => {
				if(!res.ok) {
                    res.json().then((res) => {
                        Object.keys(res).forEach((key) => form.setError(key, {
                            type: 'custom',
                            message: res[key]
                        }))
                        setStatus(() => (FormStatus.FORM));
                    })
				} else {
					res.json().then((res) => {
						setStatus(() => (FormStatus.OK));
                        addNotification({
                            status: 'ok',
                            name: res.name
                        })
                        form.reset();
					});
				}
			});
		} 
	}

	// Reset values after type change
	useEffect(() => {
		let arr = ['no_of_slices', 'diameter', 'spiciness_scale', 'slices_of_bread'];
		form.clearErrors(arr);
		form.unregister(arr);
	}, [values.type])

    return (
        <div className="flex flex-col gap-6 w-80 relative">

            <div className="flex flex-col gap-2">
                {/* Heading text */}
                <h1 className="text-3xl font-bold text-gray-800">Dish Form</h1>

                {/* Secondary description of form */}
                <span className="text-sm text-gray-400">
                    Fill form below and submit it to add new dish.
                </span>
            </div>

            {/* Form */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
                
                {/* Dish name input */}
                <Input 
                    title="Dish name" 
                    name="name" 
                    type="text" 
                    register={form.register} 
                    error={form.formState.errors.name?.message} 
                    validators={{ required: 'This field is required'}}
                />

                {/* Preparation time input (--:--:-- format) */}
                <Input 
                    title="Preparation time" 
                    name="preparation_time" 
                    type="time" 
                    register={form.register} 
                    error={form.formState.errors.preparation_time?.message} 
                    validators={{ validate: (v: string) => v !== '00:00:00' || 'This field is required' }}
                />

                {/* Dish type select input */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-gray-500 font-semibold">Dish type <span className="text-gray-400">*</span></label>
                    <DishTypeSection clearErrors={form.clearErrors} register={form.register} setValue={form.setValue} error={form.formState.errors.type?.message} />
                </div>

                <hr />

                {/* Animated carousel of detail inputs */}
                <DetailsCarousel errors={form.formState.errors} values={values} register={form.register} />

                <hr />

                <div className="w-full flex justify-between items-center">
                    {/* Cancel button */}
                    <span className="h-8 w-8">
                        <svg onClick={() => form.reset()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </span>

                    {/* Submit button */}
                    <SubmitButton status={status} />
                </div>
            </form>
        </div>
    )
}