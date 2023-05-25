import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export default function Button() {

    const formContext = useContext(FormContext);


    const active = true;

    return (
        <div className="w-full flex justify-end">
            <button type="submit" className={`px-4 py-2 text-gray-50 rounded-lg flex items-center gap-3 bg-emerald-500`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
                <span>Submit</span>
            </button>
        </div>
    )
}