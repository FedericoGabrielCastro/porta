import React from 'react'
import { useStyles } from '../styles/layouts/errorPageStyle'

const ErrorPage = () => {
    const classes = useStyles()

    return (
        <div className={classes.content}>
            Error 404 
        </div>
    )
}

export default ErrorPage
