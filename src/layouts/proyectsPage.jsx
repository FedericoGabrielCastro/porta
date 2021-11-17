import React from 'react'
import { useStyles } from '../styles/layouts/proyectsStyle'

const ProyectsPage = () => {
    const classes = useStyles()

    return (
        <main className={classes.content}>
            <div className={classes.boxContainer}>
                <section className={classes.infoProjectsContent}>

                </section>
                <aside className={classes.imageProjectsContent}>
                    
                </aside>
            </div>
        </main>
    )
}

export default ProyectsPage
