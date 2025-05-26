import { HeroList } from '../components'

export const DCPage = () => {
    const publisher = 'DC Comics'

    return (
        <>
            <h1 className="text-3xl m-8">{ publisher }</h1>
            <div className="divider divider-info"></div>

            <HeroList publisher={ publisher } />
        </>
    )
}
