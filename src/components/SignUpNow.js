import React, {useState} from 'react'
import useFormData from '../custom-hooks/useFormData'

const SignUpNow = () => {
    const INITIAL_STATE= {
        full_name: "",
        phone_number: "",
        email: "",
        comments: ""
    }
    
    const [clientForm, handleChange] = useFormData(INITIAL_STATE)
    //interested? Information input SIGN UP NOW! UI Timer to for users to get pressured?
    //how can we get you free stuff topic? lorem ipsum
    //put form inputs for potential clients
    return (
        <div>
            <form>
                <div>
                    <input
                    name="full_name"
                    value={clientForm.full_name}
                    placeholder="Full Name"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                    name="phone_number"
                    value={clientForm.phone_number}
                    placeholder="Phone Number"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                    name="email"
                    value={clientForm.email}
                    placeholder="Email Address"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                    name="comments"
                    value={clientForm.comments}
                    placeholder="Do you have anything in mind?"
                    onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default SignUpNow