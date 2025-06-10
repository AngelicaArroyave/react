import { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef = useRef()

    const onClick = () => {
        inputRef.current.focus() // O inputRef.current.select()
    }

    return (
        <>
            <h1> Focus Screen </h1>
            <hr />
            <input type="text" placeholder="Enter your name" className="form-control" ref={ inputRef } />
            <button className="btn btn-primary mt-2" onClick={ onClick }> Set focus </button>
        </>
    )
}