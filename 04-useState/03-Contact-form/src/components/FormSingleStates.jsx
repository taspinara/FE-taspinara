

const FormSingleStates = ({ name, email, phone, message }) => {
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input value={name} type="text" />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input value={email} type="email" />
            </div>
            <div>
                <label htmlFor="">Phone: </label>
                <input value={phone} type="tel" />
            </div>
            <div>
                <label htmlFor="">Message</label>
                <textarea value={message} name="message" id=""></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormSingleStates
