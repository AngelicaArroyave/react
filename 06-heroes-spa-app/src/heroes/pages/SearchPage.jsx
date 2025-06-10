import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router'

import { getHeroesByName } from '../helpers'
import { useForm } from '../../hooks/useForm'
import { HeroCardSearch } from '../components/HeroCardSearch'

export const SearchPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    const heroes = getHeroesByName(q)
    const { searchText, onInputChange } = useForm({
        searchText: q
    })

    const onSearchSubmit = event => {
        event.preventDefault()
        
        navigate(`?q=${ searchText }`)
    }

    return (
        <>
            <h1 className="text-3xl m-8">Search</h1>
            <div className="divider divider-info"></div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 m-10">
                <div>
                    <h4 className="text-2xl">Searching</h4>
                    <div className="divider"></div>

                    <form className="grid grid-cols-3 gap-4 items-center" onSubmit={ onSearchSubmit }>
                        <input type="text" placeholder="Search a hero" className="col-span-2 input input-secondary" name="searchText" autoComplete="off" value={ searchText } onChange={ onInputChange } />

                        <button className="btn btn-neutral mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M18.425 18.425L23.5 23.5m-12.5-2C5.201 21.5.5 16.799.5 11S5.201.5 11 .5S21.5 5.201 21.5 11S16.799 21.5 11 21.5Z" stroke-width="1" /></svg>
                            
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-span-2">
                    <h4 className="text-2xl">Results</h4>
                    <div className="divider"></div>

                    {
                        (q === '') ? <div className="alert alert-info mb-3 animate__animated animate__fadeIn" aria-label="alert-info">Search a hero</div>
                        : (heroes.length === 0) && <div className="alert alert-error alert-soft animate__animated animate__fadeIn" aria-label="alert-danger">There's no results with<b>{ q }</b></div>
                    }

                    {
                        heroes.map(hero => (
                            <HeroCardSearch key={ hero.id } hero={ hero } />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
