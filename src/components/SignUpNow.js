import React, {useState} from 'react'
import useFormData from '../custom-hooks/useFormData'
import {Card, Container, Row, Col, Alert} from 'react-bootstrap'

const SignUpNow = ({registerClient}) => {
    const INITIAL_STATE= {
        full_name: "",
        phone_number: "",
        email: "",
        comments: ""
    }
    
    const [clientForm, handleChange] = useFormData(INITIAL_STATE)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [registerError, setRegisterError] = useState(false)
    //interested? Information input SIGN UP NOW! UI Timer to for users to get pressured?
    //TODO:
    //[ ] - required below each NOT NULL inputs (errors)
    //[ ] - submit error handling

    const handleSubmit = async(e) => {
        e.preventDefault()
        const res = await registerClient(clientForm)
        if(!res.data){
            setRegisterError(res) //css on error
        }else {
            setSubmitSuccess(true) 
            setRegisterError(false)
            console.log(res)
        }
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={4} xs={2}></Col>
                        <Col>
                            <Card className="text-center mb-5">
                                <Card.Body>
                            <div>
                                <Card.Title>Interested?</Card.Title>
                                <h4>Sign up now and before it's too late!</h4>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-1">
                                    <input
                                    className="form-control input-sign-up"
                                    name="full_name"
                                    value={clientForm.full_name}
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="mt-1">
                                    <input
                                    className="form-control input-sign-up"
                                    name="phone_number"
                                    value={clientForm.phone_number}
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="mt-1">
                                    <input
                                    className="form-control input-sign-up"
                                    name="email"
                                    value={clientForm.email}
                                    placeholder="Email Address"
                                    onChange={handleChange}
                                    />
                                </div>
                                <div className="mt-1">
                                    <textarea
                                    className="form-control input-sign-up"
                                    name="comments"
                                    value={clientForm.comments}
                                    placeholder="Do you have anything in mind?"
                                    onChange={handleChange}
                                    />
                                </div>
                                {registerError && <div style={{fontSize: "12px", color: "red"}}>{registerError}</div>}
                                {submitSuccess ? 
                                <Alert className="mt-3" variant="success">
                                    Thank you for signing up!
                                </Alert>
                                :
                                <button className="btn btn-primary mt-3">Submit</button>
                                }
                            </form>
                            </Card.Body>
                            </Card>
                        </Col>
                    <Col lg={4} xs={2}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignUpNow