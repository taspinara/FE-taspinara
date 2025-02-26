import { useState } from "react"
import FormObjectState from "./components/FormObjectState";

const App = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    console.log(formData);
    

    return (
        <div>
            <FormObjectState formData={formData} setFormData={setFormData} />
        </div>
    )
}

export default App





















// import ContactForm from "./components/ContactForm"
// import Form from "./components/Form"

// const App = () => {
//     return (
//         <div>
//             {/* <ContactForm/> */}
//             <Form/>
//         </div>
//     )
// }

// export default App

