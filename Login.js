import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Login = () => {
    
    const [ user, setUser ] = useState({
        email: "",
        password: ""
    })

    const onsub = (e) => {
        e.preventDefault()
        console.log(user)
    }

    const onchng = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        console.log(user)
    }
  return (
    <>
    <h6 className='text-center'> LOGIN </h6>
       <Form onSubmit={onsub}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={onchng} value={user.email} id="email" name="email"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={onchng} value={user.password} id="password" name="password"  />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form> 
    </>
  )
}

export default Login