import { Link } from 'react-router'

export const HeroCardSearch = ({ hero }) => {
    const heroImageUrl = `/public/assets/${hero.id}.jpg`

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-10 mr-4 ml-4">
                <div className="card card-side bg-base-100 shadow-sm w-full lg:w-1/2 items-center">
                    <figure>
                        <img src={heroImageUrl} alt={hero.superhero} className="img-thumbnail w-50 animate__animated animate__fadeInUp" />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title text-4xl">{hero.superhero}</h3>

                        <p>{hero.alter_ego}</p>
                        <p className="text-gray-500">{hero.first_appearance}</p>

                        <Link to={`/hero/${hero.id}`}>
                            <button className="btn btn-primary btn-block">Show more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
