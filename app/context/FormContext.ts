import { DishForm } from "@/types";
import { createContext } from "react";

export const FormContext = createContext<{formData: DishForm, handleChange: Function} | undefined>(undefined);