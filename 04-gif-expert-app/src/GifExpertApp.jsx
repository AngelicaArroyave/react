import { AddCategory, GifGrid } from './components'
import { useState } from 'react'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Isuku Midoriya'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return

        // Forma 1 con Concat
        // setCategories(categories.concat('Rick and Morty'))
        
        // Forma 2 con Spread Operator
        setCategories([newCategory, ...categories])
        // setCategories(categories => ['Rick and Morty', ...categories])
    }

    return (
        <>
            <h1> Gif Expert App </h1>

            <AddCategory onNewCategory={ value => onAddCategory(value) } />
            
            { categories.map(category => (
                <GifGrid key={ category } category={ category }/>
            )) }
        </>
    )
}