

const FormObjectState = ({ formData, setFormData }) => {
    const handleFormData = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("formData", JSON.stringify(formData));
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input onChange={handleFormData} value={formData.name} type="text" name="name" />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input onChange={handleFormData} value={formData.email} type="email" name="email" />
            </div>
            <div>
                <label htmlFor="">Phone: </label>
                <input onChange={handleFormData} value={formData.phone} type="tel" name="phone" />
            </div>
            <div>
                <label htmlFor="">Message</label>
                <textarea onChange={handleFormData} value={formData.message} name="message" id=""></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormObjectState
