import { DARK_MODE_STATUS } from "../../types"
import { darkModeAction } from '../darkModeAction'

describe('darkModeAction test', () => {
    
    test('should be test the type', () => {
        const action = darkModeAction()
        expect(action.type).toEqual(DARK_MODE_STATUS)
    })
        
})
