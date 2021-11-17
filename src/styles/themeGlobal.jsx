import React from 'react'
// import { useSelector } from 'react-redux'
import { createTheme } from "@material-ui/core/styles"

import { ThemeProvider } from '@material-ui/styles'
import { Paper } from "@material-ui/core"


const ThemeGlobal = (props) => {

    // const themeModeReducer = useSelector(store => store.themeModeReducer)

    const theme = createTheme ({    
        typography: {
            
        }
    })

    return (
        <ThemeProvider theme={theme}> 
            <Paper> 
                {props.children}
            </Paper>
        </ThemeProvider>

    )
}

export default ThemeGlobal
