export enum DishType {
    Pizza = "Pizza",
    Soup = "Soup",
    Sandwich = "Sandwich",
    None = "None"
}

interface FormData {
    [key: string]: any
}

export interface DishForm extends FormData {
    name: string,
    preparation_time: string,
    type: DishType,
    no_of_slices?: number,
    diameter?: number,
    spiciness_scale?: number,
    slices_of_bread?: number
}
