import { useState } from "react"


const Form = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
        
    return (
        <div className="bg-amber-200 border-2">
            <label>
                First Name:
                <input 
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Last Name:
                <input 
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <textarea 
                name="message" 
                value={form.message}
                onChange={handleChange}
            />

            <p>
                {form.firstName} {form.lastName} <br />
                {form.email} <br />
                {form.message}
            </p>
        </div>
    )
}

export default Form
