import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStyles } from '../styles/components/navigationStyle'

import { BsFillLightbulbFill } from "react-icons/bs"
import { RiEnglishInput } from "react-icons/ri"

import { themeModeOnOFFAction } from '../redux/actions/themeModeAction'

const OptionsConfig = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    const themeModeReducer = useSelector(store => store.themeModeReducer)
    console.log(themeModeReducer)

    return (
        <section className={classes.contentConfig}>           
            <button className={classes.buttonIcon} onClick={() => dispatch(themeModeOnOFFAction()) }>
                <BsFillLightbulbFill className={classes.icon}/>     
            </button>
            <button className={classes.buttonIcon}>
                <RiEnglishInput className={classes.icon}/>     
            </button>
        </section>
    )
}

export default OptionsConfig
