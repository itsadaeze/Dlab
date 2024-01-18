import React from 'react'
import { NavLink } from 'react-router-dom'

const MyLink = ({to, children}) => {

    return (
        <>
            <NavLink exact to={to} className=""
            activeClassName='pc:[outline:1px_solid_#d0d5dd] mobile:text-[#6941C6] mobile:bg-[#F8F5FF]'>
                {children}
            </NavLink>
        </>
    )
}

export default MyLink;