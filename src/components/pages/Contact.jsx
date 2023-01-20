import React from "react"
import  Heading  from "../common/Heading"
import { contact,social } from "../data/dummydata"


function Contact() {
    return (
        <>
            <div className='contact'>
                <div className='container'>
                    <Heading title='Keep In Touch' />
                  <div style={{marginLeft:"25px"}}>
                  <p style={{marginLeft:"5px",fontSize:"20px"}} >Social Links</p>
                    {social.map((item) => (
                    <>
                        <a className="social-links" href={item.link}><i  data-aos='zoom-in'>{item.icon}</i></a>
                    </>
                ))}
                  </div>

                    <div className='content'>
                        {/* <div className='right'>
                            <form>
                                <div className='flex'>
                                    <input type='text' placeholder='Name' data-aos='flip-left' />
                                    <input type='email' placeholder='Email' data-aos='flip-right' />
                                </div>
                                <input type='email' placeholder='Subject' data-aos='flip-up' />
                                <textarea placeholder="Message" name='' id='' cols='30' rows='10' data-aos='flip-down'></textarea>
                                <button data-aos='zoom-in-up'>Submit</button>
                            </form>
                        </div> */}
                        <div className='right flexsb'>
                            {contact.map((item) => (
                                <div className='box' data-aos='zoom-in'>
                                    <i>{item.icon}</i>
                                    <p>{item.text1}</p>
                                    <p>{item.text2}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact