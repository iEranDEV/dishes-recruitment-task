import { useContext } from "react"
import { FormContext } from "../context/FormContext"

type InputProps = {
    title: string,
    name: string,
    type: string,
    placeholder?: string,
}

export default function Input({ title, name, type, placeholder }: InputProps) {

    const formContext = useContext(FormContext);

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-gray-600 font-semibold">{title} *</label>
            <input 
            type={type}
            step={type === 'time' ? 2 : 1}
            name={name} 
            id={name} 
            className="bg-gray-50 border border-gray-300 px-2 py-1 rounded-lg"
            required
            placeholder={placeholder && placeholder}
            value={formContext?.formData[name]}
            onChange={(e) => formContext?.handleChange(name, e.target.value)} />
        </div>
    )
}