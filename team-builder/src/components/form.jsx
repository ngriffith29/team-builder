import React, {useState} from 'react'

function Form(props) {
const [formState, setFormState] = useState({
    name: '',
    email: '',
    job: ''


})




const onInputChange = (e) => {
    setFormState({
        ...formState,
        [e.target.name]: e.target.value,
    })

}
const subForm = (e) => {
    e.preventDefault()
    console.log(formState.name)
    props.addToList(list => [...list, formState])
    setFormState({
        name: '',
        email: '',
        job: ''
    })
}

    return (
        <div>
          
            <form onSubmit={subForm}>
                <label htmlFor="name" >Name</label>
                <input onChange={onInputChange} type="text" name="name" value={formState.name}></input>

                <label htmlFor="email" >Email</label>
                <input onChange={onInputChange}  type="text" name="email" value={formState.email}></input>

                <label htmlFor="Job" >Job</label>
                <input onChange={onInputChange}  type="text" name="job" value={formState.job}></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
