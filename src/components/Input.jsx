/**
 * 
 * @param {string} placeholder 
 * @param {string} value 
 * @param {(s: string) => void} onChange 
 * @returns {JSX.Element}
 * @returns 
 */

import { useId } from "react"

export function Input({ placeholder, value, onChange, label }) {
    const id = useId()
    return <div>
        <label className="form-label" htmlFor="{id}">{label}</label>
        <input type="text"
            id={id}
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)} />
    </div>
}