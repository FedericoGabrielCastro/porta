import React from 'react'
import { useStyles } from '../styles/layouts/contactPageStyle'

const ContactPage = () => {
    const classes = useStyles()

    return (
        <main className={classes.content}>
            <section className={classes.formContent}>

            </section>
            <aside className={classes.contentAside}>
                <div className={classes.contentSocial}>

                </div>
                <div className={classes.contentThanks}>

                </div>
            </aside>
        </main>
    )
}

export default ContactPage
