import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = event => {
        setInputValue(event.target.value)
    }

    const onSubmit = event => {
        event.preventDefault()
        const clearInput = inputValue.trim()

        if(clearInput.length <= 1) return

        onNewCategory(clearInput)
        setInputValue('')
    }

    return (
        <>
            <form className='flex flex-col items-center mb-6' onSubmit={ onSubmit }>
                <label className="input">
                    <svg className="h-[1.5em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke-width="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="text" required placeholder="Search stickers" value={inputValue} onChange={event => onInputChange(event)} />
                </label>
            </form>
        </>
    )
}