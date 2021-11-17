import { THEME_MODE } from "../types"

export const initialState = true

export const themeModeReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case THEME_MODE:
        return !state
    default:
        return state
    }
}