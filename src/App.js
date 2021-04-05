import React from 'react'
import './Style.css'
import Header from './Header'
import Site from './Site'
import Contact from './Contact'
import About from './About'
import { Element } from 'react-scroll'

export default function App() {
    return (
        <div>
            <Element id='header'>
                <Header />
            </Element>
            <Element id='about'>
                <About />
            </Element>
            <Element id='site'>
                <Site />
            </Element>
            <Element id='contact'>
                <Contact />
            </Element>
        </div>
    )
}