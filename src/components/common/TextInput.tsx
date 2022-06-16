import React from "react";

interface ITextInput {
    placeholder: string;
}

const TextInput: React.FC<ITextInput> = ({placeholder}) => {
    return (
        <input className="form-control mr-sm-2" type="text" placeholder={placeholder}/>
    )
}

export default TextInput;