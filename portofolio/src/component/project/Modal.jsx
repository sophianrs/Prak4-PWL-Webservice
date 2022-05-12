import React from 'react'
import '../project/Modal.css'

function Modal({closedModal}) {
  return (
    <div className='ModalBG'>
        <div className='modalContainer'>
            <button onClick={ () => closedModal(false)}> X </button>
            <div className='title'>
                <h1>Are You Sure?</h1>
            </div>

            <div className='body'>
                <p>The Next Page Is Awesome</p>
            </div>
            <div className='footer'></div>
            <button onClick={ () => closedModal(false)}>Cancel</button>
            <button>Lanjut</button>
        </div>
    </div>
  )
}

export default Modal