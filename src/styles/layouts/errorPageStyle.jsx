import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({

    content: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginLeft: "15vh",
        width: "calc(100% - 15vh)",
        background: "#262626",
        color: "#fff",
        fontSize: "4em",
        textTransform: "uppercase",
        letterSpacing: "10px"
        // '@media (max-width: 673px)': {
        //     alignItems: "flex-start",
        // },
    },
}))