export enum DishType {
    Pizza = "Pizza",
    Soup = "Soup",
    Sandwich = "Sandwich"
}

interface FormData {
    [key: string]: any
}

export interface DishForm extends FormData {
    name: string,
    preparation_time: string,
    type: DishType
}
