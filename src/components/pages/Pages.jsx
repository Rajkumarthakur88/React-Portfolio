import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "../common/Footer"
import FooterNav from "../common/FooterNav"
import Header from "../common/Header"
// import LabelBottomNavigation from "../common/LabelBottomNavigation"
import Home from "../home/Home"
import About from "./About"
// import Blog from "./Blog"
import Contact from "./Contact"
import Portfolio from "./Portfolio"
import Services from "./Services"
// import Testimonials from "./Testimonials "

function Pages() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    {/* <Route exact path='/services' component={Services} /> */}
                    <Route exact path='/portfolio' component={Portfolio} />
                    {/* <Route exact path='/testimonials' component={Testimonials} /> */}
                    {/* <Route exact path='/blog' component={Blog} /> */}
                    <Route exact path='/contact' component={Contact} />
                </Switch>
                <Footer />
                <FooterNav />
                {/* <LabelBottomNavigation /> */}
            </Router>
        </>
    )
}

export default Pages