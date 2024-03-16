import React from 'react'
import NavBar from '../Components/Header/NavBar'

const Header = ({ navScroll, navStyle, navPadding, navText }) => {
    return (
        <NavBar
            navScroll={navScroll}
            navStyle={navStyle}
        />
    )
}

export default Header