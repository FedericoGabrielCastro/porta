import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({

    content: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        // background: "red",
        height: "50vh",
        width: "15vh",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: "1000"
    },
    buttonIcon: {
        position: "relative",
        height: "60px",
        width: "60px",
        cursor: "pointer",
        border: "3px double rgba(255,255,255,0.4)",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "20px",
    },
    buttonIconActive: {
        overflow: "hidden",
        '&:before': {
            content: "''",
            position: "absolute",
            height: "60px",
            width: "60px",
            borderRadius: "16px",
            background: "linear-gradient(#337ab7, #3d2068)",
            animation: `$animateActive 4s linear infinite`,
        },
        '& $icon': {
            height: "30px",
            width: "30px",
            // color: "#000"
        }
    },
    icon: {
        height: "20px",
        width: "20px",
        color: "#fff"
    },

    // ### animations ###
    "@keyframes animateActive": {
        "0%": {
           transform: "rotate(0deg)"
        },
        "100%": {
            transform: "rotate(360deg)"
        }
    },
}))