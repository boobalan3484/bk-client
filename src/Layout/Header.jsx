import React from 'react'
import NavBar from '../Components/Header/NavBar'

const Header = ({ navScroll, navStyle, navPadding }) => {
    return (
        <NavBar
            navScroll={navScroll}
            navStyle={navStyle}
            navPadding={navPadding}
        />
    )
}

export default Header