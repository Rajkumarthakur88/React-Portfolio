import React, { useEffect } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"
import heroImg from '../data/images/profile-img2-removebg-preview.png'

function Hero() {
    return (
        <>
            <section className='hero'>
                {home.map((val, i) => (
                    <div className='heroContent'>
                        <h3 className='fontSize' data-aos='fade-right'>
                            {val.text}
                        </h3>
                        <h1  className='Hero-name'>
                            Rajkumar Thakur
                        </h1>
                        <h1 className="Hero-typewritter" style={{fontSize:"30px"}}>
                            <Typewriter
                                options={{
                                    strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p data-aos='fade-left'>{val.desc}</p>
                        <button className='primaryBtn' data-aos='fade-up-right'>
                            Download CV
                        </button>
                    </div>
                ))}
                <div className="hero-img">
                    <img style={{ width: "350px" }} src={heroImg} alt="alt" />
                </div>
            </section>
        </>
    )
}

export default Hero