import React from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'

const InputEmail = () => {
    //put email input for email_addresses
    return (
        <div> 
            <Row className="container">
                <Col></Col>
                    <Col xs={10}>
                        {/* make this the same background as other components? */}
                        <Card style={{backgroundColor: 'white'}}> 
                            <Card.Body>
                                <Card.Title as="h2">Join 6700+ in chance to win FREE stuff</Card.Title>
                                    <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default InputEmail