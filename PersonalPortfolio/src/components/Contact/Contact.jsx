import React from 'react'
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
    <>
        <footer id="contact" className="contactcontainer">
            <div className="contacttext">
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className="contactlinks">
                <li className="contactlink">
                    <img src={getImageUrl("contact/emailIcon.png")} alt='Email Icon'/>
                    <a href="mailto:chethanasree.r@gmail.com">chethanasree.r@gmail.com</a>
                </li>

                <li className="contactlink">
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt='LinkedIn Icon'/>
                    <a href="https://www.linkedin.com/in/chethanasree11" target="__blank">chethanasree11</a>
                </li>

                <li className="contactlink">
                    <img src={getImageUrl("contact/githubIcon.png")} alt='Github Icon'/>
                    <a href="https://github.com/CHETHANAR11" target="__blank">CHETHANAR11</a>
                </li>
            </ul>
        </footer>
    </>
  )
}

export default Contact