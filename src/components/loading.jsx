import React from 'react'
import { useStyles } from '../styles/components/loadingStyle'

const Loading = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.content}>
            <div className={classes.loader}>
                <span><i>L</i></span>
                <span><i>0</i></span>
                <span><i>A</i></span>
                <span><i>D</i></span>
                <span><i>I</i></span>
                <span><i>N</i></span>
                <span><i>G</i></span>
                <span><i>.</i></span>
            </div>

        </div>
    )
}

export default Loading
