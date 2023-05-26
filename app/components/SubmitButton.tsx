import { FormStatus } from "@/types"

type SubmitButtonProps = {
    status: FormStatus
}

export default function SubmitButton({ status } : SubmitButtonProps) {

    return (
        <button type="submit" className={`px-4 py-2 text-gray-50 rounded-lg flex items-center gap-3 bg-emerald-500`}>
            {(status === FormStatus.FORM || status === FormStatus.OK )?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>              
            :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 animate-spin">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>          
            }
            <span>Submit</span>
        </button>
    )
}