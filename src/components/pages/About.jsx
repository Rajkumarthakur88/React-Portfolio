import React from "react"
import Heading from "../common/Heading"
import { about } from "../data/dummydata"
import heroImg from '../data/images/profile-img2-removebg-preview.png'

function About() {


       // Function will execute on click of button
       const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Rajkumar_Thakur_Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Rajkumar_Thakur_Resume.pdf';
                alink.click();
            })
        })
    }



    return (
        <>
            <section className='about'>
                <div className='container flex'>
                    {about.map((val) => (
                        <>
                            {/* <div className='left' data-aos='fade-down-right'>
                                <img src={val.cover} alt='' />
                            </div> */}
                            {/* <div className="hero-img">
                                <img style={{ width: "350px" }} src={heroImg} alt="alt" />
                            </div> */}
                            <div className='right' data-aos='fade-down-left'>
                                <Heading title='About Me' />
                                <p>{val.desc}</p>
                                <Heading title='Work Experience' />
                                <h1>E Skill Web, Indore</h1>
                                <h4 className="">(Frontend Developer Intern)</h4>
                                <p>I completed my Frontend web development training from E-skill Web, Indore.During my training as a front-end web developer at ESkill Web Indore, I gained a strong foundation in HTML, CSS, and JavaScript. I learned how to create responsive and visually appealing websites using a variety of tools and frameworks such as Bootstrap, and Material-UI. I also gained experience with JavaScript libraries such as React-Js. Additionally, I learned how to use development tools such as Git. The training provided hands-on experience with real-world projects, which helped me to apply the skills I learned in a practical setting. Overall, my experience at ESkill Web Indore was valuable in helping me to become a proficient front-end web developer.</p>
                                <button className='primaryBtn' style={{fontSize:"16px",fontWeight:"600"}} onClick={onButtonClick} >Download CV</button>
                            </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    )
}

export default About