
type ButtonProps = {
    text: string,
    children: JSX.Element,
    color: string,
    submit?: boolean
}

export default function Button({ text, children, color, submit } : ButtonProps) {

    return (
        <button type={submit ? 'submit' : 'button'} className={`px-4 py-2 text-gray-50 rounded-lg flex items-center gap-3 ${color}`}>
            {children}
            <span>{text}</span>
        </button>
    )
}