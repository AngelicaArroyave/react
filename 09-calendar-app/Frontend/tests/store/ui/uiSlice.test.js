import { onCloseDateModal, onOpenDateModal, uiSlice } from '../../../src/store/ui/uiSlice'

describe('Test in uiSlice', () => {
    test('You must have the default state', () => {
        expect(uiSlice.getInitialState()).toEqual({ isDateModalOpen: false })
    })

    test('should change the state of isDateOpen', () => {
        let state = uiSlice.getInitialState()
        state = uiSlice.reducer(state, onOpenDateModal())
        
        expect(state.isDateModalOpen).toBeTruthy()
        
        state = uiSlice.reducer(state, onCloseDateModal())
        expect(state.isDateModalOpen).toBeFalsy()
    })
})