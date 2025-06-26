import { addHours } from 'date-fns'
import { useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import Modal from 'react-modal'
import 'react-datepicker/dist/react-datepicker.css'
import es from 'date-fns/locale/es'

registerLocale('es', es)

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}

Modal.setAppElement('#root')

export const CalendarModal = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [formValues, setFormValues] = useState({
        title: 'John',
        notes: 'Dae',
        start: new Date(),
        end: addHours(new Date(), 2)
    })
    const [startDate, setStartDate] = useState(new Date())

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const onDateChanged = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }

    const onCloseModal = () => {
        setIsOpen(false)
    }

    return (
        <Modal className="modal" isOpen={isOpen} style={customStyles} onRequestClose={onCloseModal} overlayClassName="modal-background" closeTimeoutMS={200}>
            <h1>Nuevo Evento</h1>
            <hr />

            <form className="container">
                <div className="form-group mb-2 customDatePickerWidth">
                    <label>Fecha y hora de inicio</label>
                    <DatePicker className='form-control' dateFormat="Pp" showTimeSelect locale="es" timeCaption="Hora"
                    selected={formValues.start} onChange={event => onDateChanged(event, 'start')} />
                </div>

                <div className="form-group mb-2 customDatePickerWidth">
                    <label>Fecha y hora fin</label>
                    <DatePicker className='form-control' dateFormat="Pp" showTimeSelect locale="es" timeCaption="Hora"
                    minDate={formValues.start} selected={formValues.end}
                    onChange={event => onDateChanged(event, 'end')} />
                </div>
                
                <hr />

                <div className="form-group mb-2">
                    <label>Título y notas</label>
                    <input type="text" className="form-control" placeholder="Title and notes" name="title"
                            autoComplete="off" value={formValues.title} onChange={onInputChanged} />
                    <small id="emailHelp" className="form-text text-muted">Descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea type="text" className="form-control" placeholder="Notes" rows="5" name="notes"
                                value={formValues.notes} onChange={onInputChanged}></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button type="submit" className="btn btn-outline-primary btn-block">
                    <i className="far fa-save"></i>
                    &nbsp;
                    <span>Guardar</span>
                </button>
            </form>
        </Modal>
    )
}
