import React from "react"
import Heading from "../common/Heading"
import { about } from "../data/dummydata"
import heroImg from '../data/images/profile-img2-removebg-preview.png'

function About() {
    return (
        <>
            <section className='about'>
                <div className='container flex'>
                    {about.map((val) => (
                        <>
                            {/* <div className='left' data-aos='fade-down-right'>
                                <img src={val.cover} alt='' />
                            </div> */}
                            <div className="hero-img">
                                <img style={{ width: "350px" }} src={heroImg} alt="alt" />
                            </div>
                            <div className='right' data-aos='fade-down-left'>
                                <Heading title='About Me' />
                                <p>{val.desc}</p>
                                <p>{val.desc1}</p>
                                <Heading title='Work Experience' />
                                <h1>AimforTech Solutions</h1>
                                <h4>(Frontend Developer Intern)</h4>
                                <p>I worked here as an Intern for 3 Months and sharpen my skills of frontend development</p>
                                <button className='primaryBtn'>Download CV</button>
                            </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}

export default About