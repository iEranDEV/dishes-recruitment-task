import { AnimatePresence } from "framer-motion";
import DetailsCarouselElement from "./DetailsCarouselElement";
import Input from "../Input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { DishForm, DishType } from "@/types";

type DetailsCarouselProps = {
    errors: FieldErrors<DishForm>,
    values: DishForm,
    register: UseFormRegister<DishForm>
}

export default function DetailsCarousel({ errors, values, register }: DetailsCarouselProps) {

    const getCarouselElement = () => {
        switch(values.type) {
            case DishType.Pizza:
                return (
                    <DetailsCarouselElement key={`pizza`}>
                        <>
                            <Input register={register} title="Number of slices" name="no_of_slices" type="number" error={errors.no_of_slices?.message} />
                            <Input register={register} title="Diameter (cm)" name="diameter" type="number" error={errors.diameter?.message}  />
                        </>
                    </DetailsCarouselElement>
                )
            case DishType.Soup:
                return (
                    <DetailsCarouselElement key={`soup`}>
                        <Input register={register} title="Spiciness scale (1-10)" name="spiciness_scale" type="number" error={errors.spiciness_scale?.message}  />
                    </DetailsCarouselElement>
                )
            case DishType.Sandwich:
                return (
                    <DetailsCarouselElement key={`sandwich`}>
                        <Input register={register} title="Slices of bread" name="slices_of_bread" type="number" error={errors.slices_of_bread?.message}  />
                    </DetailsCarouselElement>
                )
            default:
                return (
                    <div className="w-full h-full flex justify-center items-center">
                        <span className="text-gray-300 text-sm">Select type above and then fill details</span>
                    </div>
                )
        }
    }

    return (
        <div className="relative h-36">
            <AnimatePresence>
                {getCarouselElement()}
            </AnimatePresence>
        </div>
    )
}