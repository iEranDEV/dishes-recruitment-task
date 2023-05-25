import { FormContext } from "@/app/context/FormContext"
import { AnimatePresence } from "framer-motion";
import { useContext } from "react"
import DetailsCarouselElement from "./DetailsCarouselElement";
import Input from "../Input";


export default function DetailsCarousel() {

    const formContext = useContext(FormContext);

    return (
        <div className="relative h-36">
            {formContext && <AnimatePresence>
                {{
                    'Pizza': <DetailsCarouselElement key={`pizza`}>
                        {/* Pizza details */}
                            <>
                                <Input title="Number of slices" name="no_of_slices" type="number" placeholder="Number of slices" />
                                <Input title="Diameter (cm)" name="diameter" type="number" placeholder="Diameter (cm)" />
                            </>
                        </DetailsCarouselElement>,
                    'Soup': <DetailsCarouselElement key={`soup`}>
                            {/* Soup details */}
                            <Input title="Spiciness scale (1-10)" name="spiciness_scale" type="number" placeholder="Spiciness scale" />
                        </DetailsCarouselElement>,
                    'Sandwich': <DetailsCarouselElement key={`sandwich`}>
                            {/* Sandwich details */}
                            <Input title="Slices of bread" name="slices_of_bread" type="number" placeholder="Slices of bread" />
                        </DetailsCarouselElement>,
                    'None': <div className="w-full h-full flex justify-center items-center">
                        <span className="text-gray-300 text-sm">Select type above and then fill details</span>
                    </div>
                }[formContext.formData.type]}
            </AnimatePresence>}
        </div>
    )
}