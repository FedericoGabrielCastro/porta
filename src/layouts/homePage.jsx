import React from 'react'
import { useStyles } from '../styles/layouts/homePageStyle'

const HomePage = () => {
    const classes = useStyles()

    return (
        <main className={classes.content}>
            <section className={classes.titlesContent}>
                <h1 className={classes.title}>Federico Gabriel Castro</h1>
                <h2 className={classes.subTitle}>Frontend Developer</h2>
            </section>
                <div className={classes.customBox}>
                    <p>super gigant texts  super gigant texts  super gigant texts  super gigant texts  super gigant texts  super gigant texts  super gigant texts  super gigant texts &hellip; </p>
                </div>
        </main>
    )
}

export default HomePage
