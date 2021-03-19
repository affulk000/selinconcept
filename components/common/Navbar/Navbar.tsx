import s from './Navbar.module.css';

import React, { FC } from 'react'

const Navbar: FC = () => {
    return (
        <div className={s.Header}>
            <nav className={s.navbar}>
                <ul className={s.navlink}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
