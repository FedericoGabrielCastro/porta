import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({

    content: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundPositionX: "center",
        overflow: "hidden",
        background: "#000",
        zIndex: "-1000",    
        "& span": {
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "4px",
            height: "4px",
            background: "#fff",
            borderRadius: "50%",
            boxShadow: "0 0 0 4px rgba(255,255,255,0.1), 0 0 0 8px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,1)",
            animation: `$animateStar 3s linear infinite`,
            "&:before": {
                content: "''",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "300px",
                height: "1px",
                background: "linear-gradient(90deg, #fff, transparent)"
            },
            "&:nth-child(2)": {
                top: 0,
                right: 0,
                animationDelay: 0,
                animationDuration: "1s"
            },
            "&:nth-child(3)": {
                top: 0,
                right: "80px",
                left: "initial",
                animationDelay: "0.2s",
                animationDuration: "3s"
            },
            "&:nth-child(4)": {
                top: "80px",
                right: "180px",
                left: "initial",
                animationDelay: "0.6s",
                animationDuration: "2s"
            },
            "&:nth-child(5)": {
                top: "300px",
                right: "180px",
                left: "initial",
                animationDelay: "0.6s",
                animationDuration: "1.5s"
            },
            "&:nth-child(6)": {
                top: 0,
                right: "400px",
                left: "initial",
                animationDelay: "1s",
                animationDuration: "3s"
            },
            "&:nth-child(7)": {
                top: 0,
                right: "600px",
                left: "initial",
                animationDelay: "1s",
                animationDuration: "3s"
            },
            "&:nth-child(8)": {
                top: "300px",
                right: 0,
                left: "initial",
                animationDelay: "1.2s",
                animationDuration: "1.75s"
            },
        },
    },
    bg: {
        objectFit: "cover",
        animation: `$animateBg 40s linear infinite`,
        opacity: ".7"
    },

    // ### animations ###
    "@keyframes animateBg": {
        "0%, 100%": {
           transform: "scale(1)"
        },
        "50%": {
            transform: "scale(1.2)"
        }
    },
    
    "@keyframes animateStar": {
        "0%": {
            transform: "rotate(315deg) translateX(0)",
            opacity: "1"
        },
        "70%": {
            opacity: ".5"
         },
        "100%": {
            transform: "rotate(315deg) translateX(-1000px)",
            opacity: "0"
        }
    },
}))