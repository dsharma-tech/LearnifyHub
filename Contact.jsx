import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
        <div className='right row'>
            <h1>Contact us</h1>
            <div className='items grid2'>

              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@learnifyhub.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 44444</p>
              </div>
            </div>

            <form action='' className="form">
              <input type='text' placeholder='Name' id="name"/>
              <input type='email' placeholder='Email' id="name" />
              
              <textarea cols='30' rows='10'>
                Write your message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

          </div>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Contact
