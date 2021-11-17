import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({

    content: {
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        background: "transparent",
    },
    formContent: {
        border: "3px double rgba(255,255,255,0.4)",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "16px",
        height: "60vh",
        width: "50%",
        margin: "20px"
    },
    contentAside: {
        height: "50vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        width: "20%"
    },
    contentSocial: {
        border: "3px double rgba(255,255,255,0.4)",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "16px",
        height: "50%",
    },
    contentThanks: {
        border: "3px double rgba(255,255,255,0.4)",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "16px",
        height: "40%",
    },
}))