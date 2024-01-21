import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
    
        (e.target.name === 'email') ? setEmail(e.target.value) : setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password };
        axios.post('http://localhost:5000/register', data).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(`${err}`)
        })
    }
  return (
    <div className="container w-50 border p-5 rounded">
        <h5 className="pb-3">Register</h5>
        <Form className="d-flex flex-column" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label className="fw-bold">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => handleChange(e)} autoComplete="off" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formGroupPassword">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" name="password" onChange={(e) => handleChange(e)} autoComplete="off" />
                </Form.Group>
                <button type="submit" className="btn btn-dark">Login</button>
            </Form>
    </div>
  );
};

export default Register;
