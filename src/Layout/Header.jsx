import React from 'react'
import NavBar from '../Components/Header/NavBar'

const Header = ({ navScroll, navStyle, navPadding, navText }) => {
    return (
        <NavBar
            navScroll={navScroll}
            navStyle={navStyle}
            navPadding={navPadding}
            navText={navText}
        />
    )
}

export default Header