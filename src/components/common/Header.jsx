import { Menu } from "@mui/icons-material"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { navlink } from "../data/dummydata"
import logo from "../data/images/profile-img.jpg"

function Header() {
    const [responsive, setResponsive] = useState(false)

    const [theme, setTheme] = useState("light-theme")

    const handleMode = () => {
        if (theme === "light-theme") {
            setTheme("dark-theme")
        }
        else {
            setTheme("light-theme")
        }
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (
        <>
            <header>
                <div className='container flexsb nav-div'>
                    <div className='logo logo-div'>
                        <Link className='logo-div' to={"/"}> <img style={{ width: "50px", borderRadius: "50%" }} src={logo} alt='' data-aos='zoom-in-right' /></Link>
                    </div>
                    <button className="toggle-btn" onClick={() => handleMode()}>
                        Toggle
                    </button>
                    <div className={responsive ? "hideMenu" : "nav"}>
                        {navlink.map((links, i) => (
                            <Link to={links.url} key={i} data-aos='zoom-in-left' className="nav-links">
                                {links.text}
                            </Link>
                        ))}
                    </div>
                    <button className='toggle' onClick={() => setResponsive(!responsive)}>
                        <Menu className='icon' />
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header