import './App.css'
import { useState } from 'react'

import { AddCategory, StickerGrid } from './components'

export const StickerExpertApp = () => {
    const [categories, setCategories] = useState([])

    const onAddCategory = newCategory => {
        if(categories.includes(newCategory)) return

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-5">Sticker Expert App</h1>

            <AddCategory onNewCategory={ category => onAddCategory(category) } />

            {
                categories.map(category => (
                    <StickerGrid key={ category } category={ category } />
                ))
            }
        </>
    )
}
