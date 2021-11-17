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
    boxContainer: {
        border: "3px double rgba(255,255,255,0.4)",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "row",
        height: "80vh",
        width: "80%",
        
    },
    infoProjectsContent: {
        border: "3px double rgba(255,255,255,0.4)",
        borderRadius: "16px",
        width: "30%",
        margin: "20px"
    },
    imageProjectsContent: {
        // border: "3px double rgba(255,255,255,0.4)",
        // borderRadius: "16px",
        width: "70%",
        margin: "20px"
    },

    // ### animations ### animation: `$typing 40s steps(1000) infinite`,
    // "@keyframes typing": {
    //     "0%": {
    //         transform: "translateX(50%)"
    //     },
    //     "100%": {
    //         transform: "translateX(-110%)"
    //     },
    // },
}))