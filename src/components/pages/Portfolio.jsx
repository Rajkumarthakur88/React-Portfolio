import React, { useState } from "react"
import Heading  from "../common/Heading"
import { portfolio } from "../data/dummydata"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]

function Portfolio() {

    const [list, setLists] = useState(portfolio)
    const [category, setCategory] = useState(allCategory)


    const filterItems = (category) => {
        const newItems = portfolio.filter((item) => item.category === category)
        setLists(newItems)
        if (category === "all") {
            setLists(portfolio)
            return
        }
    }


    return (
        <>
            <article className="portfolio-container">
                <div className='container'>
                    <Heading title='Portfolio' />
                    <div className='catButton'>
                        {category.map((category) => (
                            <button className='primaryBtn portfolio-btn' onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className='content grid3'>
                        {list.map((item) => (
                            <div className='box' data-aos='fade-up'>
                                <div className='img'>
                                    <img src={item.cover} alt='' />
                                </div>
                                <div className='overlay'>
                                    <h3>{item.title}</h3>
                                    <span>{item.name}</span>
                                    <VisibilityOutlinedIcon />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </>
    )
}

export default Portfolio