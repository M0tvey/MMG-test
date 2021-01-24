import React, { useState, useRef } from 'react';

export default function Feedback(props) {
  let [showNameErr, setShowNameErr] = useState()
  let [showLastNameErr, setShowLastNameErr] = useState()
  let [showPhoneErr, setShowPhoneErr] = useState()
  let [showModal, setShowModal] = useState(false)
  const phoneRX = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

  const nameField = useRef(null)
  const lastNameField = useRef(null)
  const phoneField = useRef(null)

  const nameChange = e => setShowNameErr(nameField.current.selectionEnd <= 3 ? true : false)
  const LastNameChange = e => setShowLastNameErr(lastNameField.current.selectionEnd <= 3 ? true : false)
  const phoneChange = e => setShowPhoneErr(phoneRX.test(phoneField.current.value) ? false : true)

  const feedback = e => {
    e.preventDefault();      

    if (showNameErr === undefined) setShowNameErr(true)
    if (showLastNameErr === undefined) setShowLastNameErr(true)
    if (showPhoneErr === undefined) setShowPhoneErr(true)

    if (showNameErr === false && showLastNameErr === false && showPhoneErr === false) setShowModal(true)
  }

  const closeModal = () => {
    document.querySelector('.popup_overlay').classList.add('popup_overlay-close')

    setTimeout(() => {
      setShowModal(false)
    }, 500)
  }

  return (
    <>
      <h1 className="page_logo text-center-sm">Header</h1>

      <form action="/feedback" className="form home_feedback_form" onSubmit={feedback}>
        <div className="form_item">
          {showNameErr && <label htmlFor="name" className="form_error">Enter name</label>}
          <input type="text" className="form_field" id="name" ref={nameField} placeholder="Name" onChange={nameChange} />
        </div>

        <div className="form_item">
          {showLastNameErr && <label htmlFor="lastName" className="form_error">Enter last name</label>}
          <input type="text" className="form_field" id="lastName" ref={lastNameField} placeholder="Last Name" onChange={LastNameChange} />
        </div>

        <div className="form_item">
          {showPhoneErr && <label htmlFor="phone" className="form_error">Enter phone</label>}
          <input type="text" className="form_field" id="phone" ref={phoneField} placeholder="Phone" onChange={phoneChange} />
        </div>

        <div className="form_item">
          <button className="form_button bttn bttn_shadow">Submit</button>
        </div>
      </form>

      {showModal && (
        <div className="popup_overlay">
          <div className="popup_content">
            <p className="home_feedback_ok-text">Message sent</p>
            <button className="popup_close" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </>
  )
}