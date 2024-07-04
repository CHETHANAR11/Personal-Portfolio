import React from 'react'
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <>
        <section id="about" className="aboutcontainer">

            <h2 className="abouttitle">About</h2>
            <div className="aboutcontent">
            <img src={getImageUrl("about/aboutimg.png")} alt='My Image' className="aboutimg"/>

            <ul className="aboutitems">

                <li className="aboutitem">
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor Icon"/>
                <div className="aboutitemtext">
                    <h3>Full Stack Developer</h3>
                    <p>I'm a Full Stack developer with experience in creating responsive websites.</p>
                </div>
                </li>

                <li className="aboutitem">
                <img src={getImageUrl("about/serverIcon.png")} alt="UI Icon"/>
                <div className="aboutitemtext">
                    <h3>Frontend Developer</h3>
                    <p>I have experience in crafting dynamic user interfaces with React.js for seamless web applications.</p>
                </div>
                </li>

                <li className="aboutitem">
                <img src={getImageUrl("about/uiIcon.png")} alt="cursor Icon"/>
                <div className="aboutitemtext">
                    <h3>App Developer</h3>
                    <p>I have experience in developing smooth, user-friendly interfaces using Flutter for great mobile apps.</p>
                </div>
                </li>

            </ul>

            </div>

        </section>
    </>
  )
}

export default About