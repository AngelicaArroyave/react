import { Link, NavLink, useNavigate } from 'react-router'

export const Navbar = () => {
    const navigate = useNavigate()
    const onLogout = () => {
        navigate('/login', { replace: true })
    }

    return (
        <>
            <div className="navbar bg-neutral text-neutral-content shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabindex="0"
                            className="menu menu-sm dropdown-content bg-neutral-400 rounded-box z-1 mt-3 w-52 p-2 shadow text-gray">
                            <li>
                                <NavLink to="/marvel">Marvel</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dc">DC</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl" to="/">Associations</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "bg-info text-black" : ""} to="/marvel">Marvel</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "bg-info text-black" : ""} to="/dc">DC</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className="text-cyan-400 mr-3">Angie</span>
                    <div className="mr-5 hover:bg-info rounded-3xl w-10 h-10 flex items-center justify-center cursor-pointer" onClick={ onLogout }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M24 12H8m10.5-5c0 .577.665 1.562 1.228 2.294a7.5 7.5 0 0 0 1.745 1.662C22.2 11.445 23.2 12 23.99 12c-.79 0-1.79.556-2.517 1.044a7.5 7.5 0 0 0-1.745 1.662c-.563.732-1.228 1.717-1.228 2.294m-4-10V2.5h-.329A46 46 0 0 1 1.103.605L.75.5H.5v23h.25l.353-.105A46 46 0 0 1 14.171 21.5h.329V17" stroke-width="1"/></svg>
                    </div>
                </div>
            </div>
        </>
    )
}
