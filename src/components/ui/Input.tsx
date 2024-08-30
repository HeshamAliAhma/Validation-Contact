import { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    htmlFor: string,
    label: string,
    name: string,
    type: string,
    classMobile?:string,
    error?: string;
}
const inputClass = "mt-2 w-full rounded-sm border border-gray-300 focus:border-blue-600 focus:outline-none bg-white p-2 text-sm text-gray-700 font-bold"
const labelClass = "block text-sm font-medium text-gray-700"
const Input = ({ htmlFor, label, name, type, error,classMobile = "" , ...rest }: IProps) => {
    return (
        <div className={`col-span-6 ${classMobile}`}>
            <label htmlFor={htmlFor} className={labelClass}> {label} </label>
            <input type={type} id={htmlFor} name={name} className={`${inputClass} ${error ? 'border-red-500' : ''}`} {...rest} />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    )
}

export default Input




