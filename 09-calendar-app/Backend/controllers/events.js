import { request, response } from 'express'

import { Event } from '../models/Event.js'

export const getEvents = async (req = request, res = response) => {
    const events = await Event.find().populate('user', 'name')

    res.status(200).json({
        ok: true,
        message: 'Events retrieved successfully',
        events
    })
}

export const createEvent = async (req = request, res = response) => {
    const event = new Event(req.body)

    try {
        event.user = req.uid
        const newEvent = await event.save()

        res.status(200).json({
            ok: true,
            message: 'Event created successfully',
            event: newEvent
        })
    } catch (error) {
        console.log("🚀 ~ createEvent ~ error:", error)
        res.status(500).json({
            ok: false,
            message: 'Error creating event'
        })
    }
}

export const updateEvent = async (req = request, res = response) => {
    const idEvent = req.params.id
    const uid = req.uid
    
    try {
        const event = await Event.findById(idEvent)

        if(!event) {
            return res.status(404).json({
                ok: false,
                message: 'Event not found'
            })
        }

        if(event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                message: 'You are not authorized to update this event'
            })
        }

        const newEvent = {
            ...req.body,
            user: uid
        }
        const updatedEvent = await Event.findByIdAndUpdate(idEvent, newEvent, { new: true })

        res.status(200).json({
            ok: true,
            message: 'Event updated successfully',
            event: updatedEvent
        })
    } catch (error) {
        console.log("🚀 ~ updateEvent ~ error:", error)
        res.status(500).json({
            ok: false,
            message: 'Error updating event'
        })
    }
}

export const deleteEvent = async (req = request, res = response) => {
    const idEvent = req.params.id
    const uid = req.uid

    try {
        const event = await Event.findById(idEvent)

        if(!event) {
            return res.status(404).json({
                ok: false,
                message: 'Event not found'
            })
        }

        if(event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                message: 'You are not authorized to update this event'
            })
        }

        const deletedEvent = await Event.findByIdAndDelete(idEvent)

        res.status(200).json({
            ok: true,
            message: 'Event deleted successfully',
            event: deletedEvent
        })
    } catch (error) {
        console.log("🚀 ~ deleteEvent ~ error:", error)
        res.status(500).json({
            ok: false,
            message: 'Error deleting event'
        })
    }
}