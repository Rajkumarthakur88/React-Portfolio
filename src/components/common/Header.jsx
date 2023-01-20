import { Menu } from "@mui/icons-material"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { navlink } from "../data/dummydata"
import logo from "../data/images/profile-img.jpg"
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
// import ToggleOnIcon from '@mui/icons-material/ToggleOn';
// import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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
                        <Link className='logo-div' to={"/"}> <img style={{ width: "50px", borderRadius: "50%" }} src={logo} alt=''  /></Link>
                        <button className="toggle-btn"  onClick={() => handleMode()}>
                            {
                                theme === 'light-theme' ? <span style={{ display: "flex", }}><FiberManualRecordIcon fontSize="5px" color="warning" /> <NightsStayIcon fontSize="5px" color="warning" /></span> : <span style={{ display: "flex" }}> <LightModeIcon fontSize="5px" color="warning" /><FiberManualRecordIcon fontSize="5px" color="warning" /></span>
                            }
                        </button>
                    </div>

                    <div className={responsive ? "hideMenu" : "nav"}>
                        {navlink.map((links, i) => (
                            <Link to={links.url} key={i}  className="nav-links">
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