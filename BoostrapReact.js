import React from 'react'
import { Button } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';



const BoostrapReact = () => {
  const [ show, setShow ] = useState(false)
  return (
    <div>
      BoostrapReact
      <Button variant="success" >click</Button>
      <Alert show={show} style={{ position: 'absolute' }}  >ALERT</Alert>
      <Button className='btn btn-primary' onClick={() => setShow(!show) } >ShowAlert</Button>
    </div>
  )
}

export default BoostrapReact
