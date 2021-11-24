import React from 'react';

function InputForm(props) {
    const {
        type,
        id,
        placeholder,
        name,
        required
    } = props;

    return (
        <div className="form-group">
            <input className="form-control" type={type} id={id} placeholder={placeholder} name={name} required={required} />
        </div>
    );
}

export default InputForm;