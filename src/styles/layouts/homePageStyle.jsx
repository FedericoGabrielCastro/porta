import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({

    content: {
       position: "absolute",
       display: "flex",
       flexDirection: "column",
       justifyContent: "space-around",
       alignItems: "center",
       height: "100vh",
       width: "100%",
       background: "transparent",
    },
    titlesContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        letterSpacing: "10px",
        textTransform: "uppercase",
        color: "#fff",
        fontSize: "4vw"
    },
    subTitle: {
        color: "#fff",
        letterSpacing: "4px",
        textTransform: "uppercase",
        fontSize: "2vw"
    },
    customBox: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "60%",
        height: "10vh",
        border: "3px double rgba(255,255,255,0.4)",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "16px",
        textAlign: "center",
        padding: "20px",
        overflow: "hidden",
        '& p': {
            color : "#fff",
            fontSize : "2vw",
            letterSpacing: "2px",
            whiteSpace: "nowrap",
            animation: `$typing 40s steps(1000) infinite`,
        } 
    },
    
    // ### animations ###
    "@keyframes typing": {
        "0%": {
            transform: "translateX(50%)"
        },
        "100%": {
            transform: "translateX(-110%)"
        },
    },
}))