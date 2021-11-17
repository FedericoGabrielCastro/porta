import {makeStyles} from '@material-ui/core'

const customBoxShadow = "0 0 10px #337ab7,0 0 20px #337ab7,0 0 40px #337ab7, 0 0 80px #337ab7, 0 0 120px #337ab7,0 0 200px #337ab7,0 0 300px #337ab7, 0 0 400px #337ab7"

export const useStyles = makeStyles(({

    content: {
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        height: "100vh",
        width: "100%",
        background: "transparent",
        margin: "-10px",
    },
    loader: {
        display: "flex",
        alignItems: "flex-end",
        transform: "translateY(-35px)",
        '& span': {
            width: "10px",
            background: "#111",
            margin: "0 2px",
            height: "calc(10px * 1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            animation: `$animate 2s linear infinite`,
            animationDelay: "calc(0.25s * 1)",
            "&:nth-child(2)": {
                height: "calc(10px * 2)",
                animationDelay: "calc(0.25s * 2)",
            },
            "&:nth-child(3)": {
                height: "calc(10px * 3)",
                animationDelay: "calc(0.25s * 3)",
            },
            "&:nth-child(4)": {
                height: "calc(10px * 4)",
                animationDelay: "calc(0.25s * 4)",
            },
            "&:nth-child(5)": {
                height: "calc(10px * 5)",
                animationDelay: "calc(0.25s * 5)",
            },
            "&:nth-child(6)": {
                height: "calc(10px * 6)",
                animationDelay: "calc(0.25s * 6)",
            },
            "&:nth-child(7)": {
                height: "calc(10px * 7)",
                animationDelay: "calc(0.25s * 7)",
            },
            "&:nth-child(8)": {        
                height: "calc(10px * 8)",
                animationDelay: "calc(0.25s * 8)",
            },
        },
        '& i': {
            display: "block",
            color: "#fff",         
            transform: "translateY(30px)"
        }
    },

    // ### animations ###
    "@keyframes animate": {
        "0%": {
            background: "#fff",
            filter: "blur(2px)",
            boxShadow: `${customBoxShadow}`
        },
        "25%, 75%": {
            background: "#111",
            filter: "blur(0px)",
            boxShadow: "none"
        },
        "100%": {
            background: "#fff",
            filter: "blur(2px)",
            boxShadow: `${customBoxShadow}`
        }
    },
}))