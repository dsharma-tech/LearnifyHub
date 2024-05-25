import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  // This line uses the useLocation hook provided by React Router to get information about the current URL location. useLocation returns an 
  // object with information about the current URL, such as the pathname.
  const location = useLocation()

  return (
    <>
      <section className='back'>
        
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
