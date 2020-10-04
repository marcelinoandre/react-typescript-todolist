import React from 'react'

const Navbar = () => (
    <div className="uk-container">
        <nav className="uk-navbar">
            <div className="uk-navbar-left">
                <a href="#" className="uk-navbar-item uk-logo">My todos</a>
            </div>

            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li>
                        <a href="#">
                            <span uk-icon='icon: plus; ratio: 1.2'></span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>


)

export default Navbar

