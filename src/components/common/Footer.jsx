import React from 'react'
import { social } from "../data/dummydata"
function Footer() {
    return (
        <>
            <footer>
                {social.map((item) => (
                    <>
                        <a href={item.link}><i  data-aos='zoom-in'>{item.icon}</i></a>
                    </>
                ))}
                <p style={{color:"white"}}>Contact Me </p>
                <p style={{color:"white"}} data-aos='zoom-in'> Copyright@Rajkumar_Thakur <br /> All Rights Reserved 2023</p>
            </footer>

        </>
    )
}

export default Footer