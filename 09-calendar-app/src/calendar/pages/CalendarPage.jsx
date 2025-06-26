import { addHours } from 'date-fns'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'

import { CalendarEvent } from '../components/CalendarEvent'
import { CalendarModal } from '../components/CalendarModal'
import { getMessages } from '../../helpers/getMessages'
import { localizer } from '../../helpers/calendarLocalizer'
import { Navbar } from '../components/Navbar'

const events = [{
    title: 'Birthday Party',
    notes: 'Remember to buy flowers for the guests',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
        _id: '123ABC',
        name: 'John Doe'
    }
}]

export const CalendarPage = () => {
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }
        
        return { style }
    }

    const onDoubleClick = event => {
        console.log("🚀 onDoubleClick ~ event:", event)
        
    }

    const onSelect = event => {
        console.log("🚀 onSelect ~ event:", event)
        
    }

    const onViewChanged = event => {
        localStorage.setItem('lastView', event)
        setLastView(event)
    }

    return (
        <>
            <Navbar />

            <Calendar culture='es' localizer={localizer} events={events} defaultView={lastView} startAccessor="start" 
                    endAccessor="end" style={{ height: 'calc(100vh - 80px' }} messages={getMessages()}
                    eventPropGetter={eventStyleGetter} components={{ event: CalendarEvent }}
                    onDoubleClickEvent={onDoubleClick} onSelectEvent={onSelect} onView={onViewChanged} />

            <CalendarModal />
        </>
    )
}