import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from '../../src/store/calendar/calendarSlice'
import { calendarWithActiveEventState, calendarWithEventsState, events, initialState } from '../fixures/calendarStates'

describe('Test in calendarSlice', () => {
    test('Should return initial state', () => {
        const state = calendarSlice.getInitialState()

        expect(state).toEqual(initialState)
    })

    test('Should set active event', () => {
        const state = calendarSlice.reducer(calendarWithEventsState, onSetActiveEvent(events[0]))

        expect(state.activeEvent).toEqual(events[0])
    })

    test('onAddNewEvent should add new event', () => {
        const newEvent = {
            id: '3',
            start: new Date('2026-03-01 13:00'),
            end: new Date('2026-03-01 15:00'),
            title: 'Test event 3',
            notes: 'Test notes 3'
        }
        const state = calendarSlice.reducer(calendarWithEventsState, onAddNewEvent(newEvent))

        expect(state.events).toEqual([...events, newEvent])
    })

    test('onUpdateEvent should update event', () => {
        const updatedEvent = {
            id: '1',
            start: new Date('2026-01-01 13:00'),
            end: new Date('2026-01-01 15:00'),
            title: 'Test event 3!!',
            notes: 'This is a test'
        }

        const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updatedEvent))

        expect(state.events).toContain(updatedEvent)
    })

    test('onDeleteEvent should delete event', () => {
        const state = calendarSlice.reducer(calendarWithActiveEventState, onDeleteEvent())

        expect(state.activeEvent).toBe(null)
        expect(state.events).not.toContain(events[0])
    })

    test('onLoadEvents should load events', () => {
        const state = calendarSlice.reducer(initialState, onLoadEvents(events))

        expect(state.isLoadingEvents).toBeFalsy()
        expect(state.events).toEqual(events)

        const newState = calendarSlice.reducer(state, onLoadEvents(events))

        expect(state.events.length).toBe(events.length)
    })

    test('onLogoutCalendar should clear state', () => {
        const state = calendarSlice.reducer(calendarWithActiveEventState, onLogoutCalendar())

        expect(state).toEqual(initialState)
    })
})