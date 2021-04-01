import React from 'react'

export default function Header() {
    return (
        <div>
            <header>
                <nav>
                    <div class="menu-icon">
                        <i class="fa fa-bars fa-2x"></i>
                    </div>
                    <div class="logo">
                        ETHAN HANSEN
                    </div>
                    <div class="menu">
                        <ul>
                            <li><a class="hoverable" href="#">Home</a></li>
                            <li><a class="hoverable" href="#">About</a></li>
                            <li><a class="hoverable" href="#">Projects</a></li>
                            <li><a class="hoverable" href="#">Work</a></li>
                            <li><a class="hoverable" href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <div className='bio'>
                    React Node.JS Express.JS Mongoose
                </div>
            </header>
            
        </div>
    )
}