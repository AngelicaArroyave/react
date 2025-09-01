export const events = [
    {
        id: '1',
        start: new Date('2026-01-01 13:00'),
        end: new Date('2026-01-01 15:00'),
        title: 'Test event 1',
        notes: 'Test notes 1'
    },
    {
        id: '2',
        start: new Date('2026-02-01 13:00'),
        end: new Date('2026-02-01 15:00'),
        title: 'Birthday party',
        notes: 'Buy food and drinks'
    }
]

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: null
}

export const calendarWithActiveEventState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: {...events[0]}
}