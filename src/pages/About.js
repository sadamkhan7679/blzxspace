
import React from 'react'
import './about.css'
import p2 from '../components/images/p2.jpg'
import HeaderTwo from 'components/HeaderTwo/HeaderTwo'


function About() {
  return (
    <div className='container'>
            <HeaderTwo/>
      <h2 id='about-heading'>About</h2>
      <div className='about-area'>
      <div className='imgArea'>
      <img src= {p2}/>
        </div>
        <div className='textArea'>
         <p> Bizxspace is a site dedicated to providing users a updated supply of business models from a large variety of companies! We cover all elements of a companies business model in our search page, users can view, or edit and update. Our site is completely free to use and easy to understand!</p>
        </div>
       
      </div>
    </div>
  )
}

export default About
