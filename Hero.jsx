import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO LEARNIFYHUB' title='Unparalleled expertise in online education' />
            <p>In a far-off land, hidden behind tall mountains, and far away from places like Vokalia and Consonantia, lies the home of knowledge—the Edu Hub.</p>
            
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
