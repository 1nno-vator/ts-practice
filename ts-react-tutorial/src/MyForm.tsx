import React, { useState } from 'react';

type submitForm = {
    name: string;
    description: string;
}

type MyFormProps = {
    onSubmit: (form: submitForm) => void;
}

function MyForm({ onSubmit }: MyFormProps) {
    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    const { name, description } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("E TARGET");
        console.log(e.target);
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: '' // 초기화
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" onChange={onChange} value={name}/>
            <input name="description" onChange={onChange} value={description}/>
            <button type="submit">등록</button>
        </form>
    )
}

export default MyForm;