import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'


export default function Contact() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState(false)
    const [emailInvalid, setEmailInvalid] = useState(false)
    
    function isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmail(pattern.test(email));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length || email.length || text.length === 0) {
            setError(true);
        }
        if (!isValidEmail(email)){
            setEmailInvalid(true);
            setEmail('');
        }
        setName('');
        setEmail('');
        setText('');
    }

    const handleChange = (e) => {

    }

    return (
        <Form onSubmit={handleSubmit} onChange={handleChange}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                {error ? <Form.Control type="text" placeholder="This field is required" className='error' onChange={(e) => { setName(e.target.value) }} />
                :<Form.Control type="text" placeholder="Your name here" onChange={(e) => { setName(e.target.value) }} />}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                {error ? <Form.Control type="text" placeholder="This field is required" className='error' onChange={(e) => { setEmail(e.target.value) }} /> : emailInvalid ? <Form.Control type="text" placeholder="Invalid email" className='error' onChange={(e) => { setEmail(e.target.value) }} />
                :<Form.Control type="text" placeholder="example@email.com" onChange={(e) => { setEmail(e.target.value) }} />}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Comment</Form.Label>
                {error ? <Form.Control as='textarea' type="textarea" placeholder="This field is required" className='error' onChange={(e) => { setText(e.target.value) }} />
                :<Form.Control as='textarea' type="textarea" placeholder="What would you like to say?" onChange={(e) => { setText(e.target.value) }} />}
            </Form.Group>
            <Button className="contactBtn" type="submit">
                Submit
            </Button>
        </Form>
    )
}