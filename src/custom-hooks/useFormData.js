import {useState} from 'react'

//Handles any changes made on form input
const useFormData = (initial_state) => {
    const [useFormData, setFormData] = useState(initial_state)

    const handleChange = (e)=>{
        const {name, value} = e.target
        //Initial state must be an object in order to set changes
        setFormData(state => ({...state, [name]:value}))
    }
    return [useFormData, handleChange]
}

export default useFormData