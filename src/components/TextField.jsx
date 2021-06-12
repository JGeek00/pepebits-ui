import React, { useEffect, useState } from 'react';

const TextField = ({type, label, value, invalid, onChange}) => {
    const [inputFocus, setInputFocus] = useState(false);

    let fieldInput;

    useEffect(() => {
        if (value) {
            setInputFocus(true);
        }
        else {
            setInputFocus(false)
        }
    }, [value]);

    const handleFocus = (e) => {
        if (e.type === "focus" || e.type === "click") {
            setInputFocus(true);
            fieldInput.focus();
        }
        else if (e.type === "blur" && value === "") {
            setInputFocus(false);
        }
    }

    return (
        <div className={invalid ? "input invalid" : "input"}>
            <div 
                className={inputFocus ? "label focus" : "label"} 
                onClick={(e) => handleFocus(e)}
            >
                {label}
            </div>
            <input 
                type={type}
                className={inputFocus ? "field focus" : "field"} 
                value={value} 
                ref={(input) => {fieldInput = input}} 
                onFocus={(e) => handleFocus(e)} 
                onBlur={(e) => handleFocus(e)} 
                onChange={(e) => onChange(e.target.value)} 
            />
        </div>
    );
}
 
export default TextField;