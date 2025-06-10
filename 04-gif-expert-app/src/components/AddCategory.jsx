import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = (event) => setInputValue(event.target.value)
    const onSubmit = (event) => {
        // Evita que se pierda la informacion
        event.preventDefault()

        const clearValue = inputValue.trim()

        if(clearValue <= 1) return

        onNewCategory(clearValue)
        setInputValue('')
    }

    return (
        <>
            <form onSubmit={ onSubmit } aria-label='form'>
                <input type="text" placeholder="Search Gifs" value={ inputValue } onChange={ event => onInputChange(event) } />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}