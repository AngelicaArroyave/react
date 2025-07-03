import { addHours } from 'date-fns'
import { createSlice } from '@reduxjs/toolkit'

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Birthday Party',
    notes: 'Remember to buy flowers for the guests',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '123ABC',
        name: 'John Doe'
    }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, {payload}) => {
            state.activeEvent = payload
        },
        onAddNewEvent: (state, {payload}) => {
            state.events.push(payload)
            state.activeEvent = null
        },
        onUpdateEvent: (state, {payload}) => {
            state.events = state.events.map(event => {
                if(event._id === payload._id) return payload

                return event
            })
        },
        onDeleteEvent: state => {
            if(state.activeEvent === null) return
            
            state.events = state.events.filter(event => event._id !== state.activeEvent._id)
            state.activeEvent = null
        }
    }
})

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions