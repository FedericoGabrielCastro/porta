import React from 'react'
import Background from '../assets/bg.jpg'
import { useStyles } from '../styles/components/backgroundStyle'

const CustomBackground = () => {
    const classes = useStyles()

    return (
        <section className={classes.content}>
            <img className={classes.bg} 
                src={Background} 
                alt="img background"/>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </section>
    )
}

export default CustomBackground
