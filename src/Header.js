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
                    <p>Found my passion for web development while finishing my Bachelor's Degree in International Business and decided to make the jump into programming after my graduation. Started at V School and haven't looked back! I'm an auto enthusiast, sports fanatic, real estate aficionado, and a full stack web developer using programming languages like React, JavaScript, Node, Express and more. </p>
                </div>
            </header>
            
        </div>
    )
}