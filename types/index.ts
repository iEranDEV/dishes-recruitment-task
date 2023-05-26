export enum DishType {
    Pizza = "pizza",
    Soup = "soup",
    Sandwich = "sandwich"
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

export enum FormStatus {
    FORM,
    OK,
    PENDING
}

export interface INotification {
    status: 'ok' | 'error',
    name?: string 
}