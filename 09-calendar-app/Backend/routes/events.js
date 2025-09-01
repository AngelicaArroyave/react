import { check } from 'express-validator'
import { Router } from 'express'

import { fieldsValidators } from '../middlewares/fields-validators.js'
import { getEvents, createEvent, updateEvent, deleteEvent } from '../controllers/events.js'
import { isDate } from '../helpers/isDate.js'
import { jwtValidator } from '../middlewares/jwt-validator.js'

const eventsRouter = Router()

// Validate JWT está para todas las rutas, de manera que se puede usar en general
eventsRouter.use(jwtValidator)

eventsRouter.get('/', getEvents)

eventsRouter.post('/',
    [
        check('title', 'Title is required').not().isEmpty(),
        check('start', 'Start date is required').not().isEmpty(),
        check('end', 'End date is required').not().isEmpty(),
        check('title', 'Title must be at least 3 characters long').isLength({ min: 3 }),
        check('start', 'Start date must be a valid date').custom(isDate),
        check('end', 'End date must be a valid date').custom(isDate),
        fieldsValidators
    ],
    createEvent)

eventsRouter.put('/:id', [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').not().isEmpty(),
    check('end', 'End date is required').not().isEmpty(),
    check('title', 'Title must be at least 3 characters long').isLength({ min: 3 }),
    check('start', 'Start date must be a valid date').custom(isDate),
    check('end', 'End date must be a valid date').custom(isDate),
    fieldsValidators
], updateEvent)

eventsRouter.delete('/:id', deleteEvent)

export default eventsRouter