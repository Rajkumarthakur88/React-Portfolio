import { maxWidth } from '@mui/system'
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { navlink } from "../data/dummydata"
function FooterNav() {
    // const [responsive, setResponsive] = useState(false)
    // const showFooterNav = () => {
        // if (maxWidth >= 768) {
            // setResponsive(true)
        // }
    // }
    // showFooterNav()
    return (
        <>
            <nav className= "footer-nav ">
                <ul>
                    {navlink.map((links, i) => (
                        <Link to={links.url} key={i}>
                            <li className='footer-nav-li'>   {links.text}</li>
                        </Link>
                    ))}

                    {/* <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li> */}
                </ul>
            </nav>
        </>
    )
}

export default FooterNav