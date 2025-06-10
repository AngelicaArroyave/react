import { Navigate, useNavigate, useParams } from 'react-router'
import { useMemo } from 'react'

import { getHeroByID } from '../helpers'

export const HeroPage = () => {
    const { id } = useParams()
    const hero = useMemo(() => getHeroByID(id), [id])
    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }

    if (!hero) return (<Navigate to="/marvel" />)

    return (
        <div className="flex flex-col items-center justify-center mt-10 mr-4 ml-4">
            <div className="card card-side bg-base-100 shadow-sm w-full lg:w-1/2 items-center">
                <figure>
                    <img src={ `/public/assets/${ id }.jpg` } alt={ hero.superhero } className="img-thumbnail w-50 animate__animated animate__fadeInUp" />
                </figure>
                <div className="card-body">
                    <h3 className="card-title text-4xl">{ hero.superhero }</h3>

                    <ul className="list">
                        <li className="list-row">
                            <b>Alter ego:</b> { hero.alter_ego }
                        </li>
                        <li className="list-row">
                            <b>Publisher:</b> { hero.publisher }
                        </li>
                        <li className="list-row">
                            <b>First appearance:</b> { hero.first_appearance }
                        </li>
                    </ul>

                    <h5 className="text-2xl">Characters</h5>

                    <p>{ hero.characters }</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary" onClick={ onNavigateBack }>Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
