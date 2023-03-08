import React, { useState } from 'react'

const Modal = () => {
    const [ openModal, setOpenModal ] = useState(false)
    
  return (
    <div className='Modal'>
     <h1>open modal</h1>
     <button className='openModalBtn' onClick={() => setOpenModal(true)} >Open</button>

     { openModal && <div className='openMod' style={{ backgroundColor : "black", width: "300px", height: "300px", color: "white" }}>
        <button onClick={() => setOpenModal(false)}>cross</button>
        Modal Body
        <button onClick={() => setOpenModal(false)}>cancel</button>
        <button>continue</button>
     </div>}


    </div>
  )
}

export default Modal
