import React from 'react'
import {Link} from "react-router-dom"
import '/Users/gimsehan/Develop/CircleSearch/frontend/src/Components/TopPannel/Navbar.css'


function NavBar() {
    return (
        <div style={{display: 'flex' , background: '#C3EAA5', height: '60px'}}>
            <ul className='Navul' style={{listStyleType: 'none', color: 'white'}}>
                <li className='Navli'>
                <Link to="/">Home</Link>
                </li>
                <li className='Navli'>
                <Link to="/login">login</Link>
                </li>
                <li className='Navli'>
                <Link to="/register">register</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar