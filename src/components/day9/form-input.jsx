import { useState } from 'react';

export function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    let props = {
        value: value,
        onChange: handleChange
    }
    return props;
}

export default function Form() {
    const firstName = useFormInput('Mary');
    const lastName = useFormInput('Poppins');

    return (
        <>
            <label>
                First name:
                <input {...firstName} />
            </label>
            <label>
                Last name:
                <input {...lastName} />
            </label>
            <p><b>Good morning, {firstName.value} {lastName.value}.</b></p>
        </>
    );
}
