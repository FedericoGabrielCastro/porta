import { DARK_MODE_STATUS } from "../../types"
import { darkModeReducer, initialState } from '../darkModeReducer'

describe('should be test darkModeReducers', () => {
    
    test('should be load the initialState', () => {
        expect(darkModeReducer(undefined, {})).toEqual(initialState)
    })
})

describe('should be test the cases', () => {

    test('should DARK_MODE_STATUS', () => {
        expect(darkModeReducer(undefined, {
            type: DARK_MODE_STATUS,
        })).toBe(true)
    })

    test('should DEFAULT_STATE ', () => {
        expect(darkModeReducer(undefined, {})).toBe(false)
    })
})