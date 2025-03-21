import { useState } from 'react'
import PropTypes from 'prop-types'

export const TodoAdd = ({ onNewTodo }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue({
            id: new Date().getTime() * 3,
            description: event.target.value,
            done: false
        })       
    }
    const onSubmit = (event) => {
        event.preventDefault()

        if(inputValue.description === '') return

        onNewTodo(inputValue)
        setInputValue('')
        document.querySelector('input').value = ''
    }

    return (
        <>
            <form onSubmit={ onSubmit }>
                <input type="text" className="form-control" placeholder="What to do?" onChange={ event => onInputChange(event) } />
                <button type="submit" className="btn btn-outline-primary mt-1"> Add </button>
            </form>
        </>
    )
}

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}