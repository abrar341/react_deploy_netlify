import React from 'react'
import { Link } from 'react-scroll';


export const Navbar = () => {
    return (
        <header>

            <div className="header-wrapper">
                <div>
                    <nav>
                        <Link to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                        <Link to='skills' smooth={true} duration={500}>
                            Skills
                        </Link>
                        <Link to='projects' smooth={true} duration={500}>
                            Projects
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
