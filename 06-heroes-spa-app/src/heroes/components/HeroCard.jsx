import { Link } from 'react-router'

const CharactersByHero = ({ alter_ego, characters }) => {
    if(alter_ego === characters) return (<></>)

    return (
        <>
            {
                characters.split(', ').map(character => (
                    <div className="badge badge-outline">{ character }</div>
                ))
            }
        </>
    )
}

export const HeroCard = ({ hero }) => {
    const heroImageUrl = `/public/assets/${ hero.id }.jpg`

    return (
        <>
            <div className="card bg-base-100 w-60 shadow-sm mt-4 animate__animated animate__fadeIn">
                <figure>
                    <img
                        src={ heroImageUrl }
                        alt={ hero.superhero } />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{ hero.superhero }</h2>
                    <p>{ hero.alter_ego }</p>
                    <p className="text-gray-500">{ hero.first_appearance }</p>
                    <div className="card-actions justify-end">
                        {
                            <CharactersByHero alter_ego={ hero.alter_ego } characters={ hero.characters } />
                        }
                    </div>
                    <Link to={`/hero/${ hero.id }`}>
                        <button className="btn btn-primary btn-block">Show more</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
