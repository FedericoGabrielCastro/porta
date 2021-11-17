import React from 'react'
import { useStyles } from '../styles/components/navigationStyle'
import { NavLink } from 'react-router-dom'

import { IoHomeOutline } from "react-icons/io5"
import { GiSnakeTotem } from "react-icons/gi"
import { MdOutlineContactMail } from "react-icons/md"
import { FiFolder } from "react-icons/fi"

// import OptionsConfig from './optionsConfig'

const navigationOpt = [
    {icon: IoHomeOutline, url: "/" },
    {icon: FiFolder, url: "/proyectspage" },
    {icon: MdOutlineContactMail, url: "/contactpage"  },
    {icon: GiSnakeTotem, url: "/gamepage" },
]

const Navigation = () => {
    const classes = useStyles()

    return (

        <nav className={classes.content}>
            {
                navigationOpt.map((item) => {
                        
                    return (
                        <NavLink to={item.url} key={item.key} activeClassName={classes.buttonIconActive} exact>
                            <button  className={classes.buttonIcon}>
                                {<item.icon className={classes.icon}/>}           
                            </button>
                        </NavLink>
                    )
                })
            }
        </nav>
    )
}

export default Navigation
