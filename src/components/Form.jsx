import { useState } from "react";

function Form() {
    const initialValue = {
        Name: "",
        Email: "",
        Password: ""
    };
    function submitHandler() {

    }
    const [formData, setFormData] = useState(initialValue);
    function submitHandler(e) {
        e.preventDefault();
        alert(JSON.stringify(formData, undefined, 2))
        console.log(formData)
    }
    return (
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <input type="text" value={formData.Name} onChange={(e) => (setFormData({...formData, Name: e.target.value}))}/>
            <br />
            <label>Email</label>
            <input type="text" value={formData.Email}  onChange={(e) => (setFormData({...formData, Email: e.target.value}))}/>
            <br />
            <label>Password</label>
            <input type="text" value={formData.Password}  onChange={(e) => (setFormData({...formData, Password: e.target.value}))}/>
            <br />
            <button type="submit">Submit</button>
            <p>{JSON.stringify(formData)}</p>
        </form>
    )

}

export default Form;