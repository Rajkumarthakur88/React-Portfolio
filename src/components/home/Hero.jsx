import React, { useEffect } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"
import heroImg from '../data/images/profile-img2-removebg-preview.png'
import AnimatedStyle from "../AnimatedStyle"
import { Link } from "react-router-dom"

function Hero() {
    return (
        <>
                <AnimatedStyle />
            <section className='hero'>
                {home.map((val, i) => (
                    <div className='heroContent'>
                        <h1 className='fontSize' data-aos='fade-right' >
                            {val.text}
                        </h1>
                        <h1 className='Hero-name'>
                            Rajkumar Thakur
                        </h1>
                        <h1 className="Hero-typewritter" style={{ fontSize: "30px" }}>
                            <Typewriter
                                options={{
                                    strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        {/* <p data-aos='fade-left'>{val.desc}</p> */}
                    <Link to={"/contact"}>    <button className='primaryBtn' data-aos='fade-up-right' style={{ fontSize: "16px", fontWeight: "600" }}>
                            Hire me
                        </button>
                        </Link>
                    </div>
                ))}
                <div className="hero-img">
                    <img style={{ width: "800px"}} src={heroImg} alt="alt" />
                </div>
            </section>
        </>
    )
}

export default Hero