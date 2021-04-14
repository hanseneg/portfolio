import React, { useEffect, useState} from 'react'
import { Link } from 'react-scroll'


export default function Header() {
    let listener = null
    const [scrollState, setScrollState] = useState("top")
  
    useEffect(() => {
      listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 20) {
          if (scrollState !== "amir") {
            setScrollState("amir")
          }
        } else {
          if (scrollState !== "top") {
            setScrollState("top")
          }
        }
      })
      return () => {
        document.removeEventListener("scroll", listener)
      }
    }, [scrollState])
  

    return (
        <div>
            <header>
                <nav style={{
                    backgroundColor: scrollState === "top" ? "transparent" : "rgb(46, 45, 45)",
                    transition: 1.3,
                    position: "fixed"
                    }}>
                    <div class="menu-icon">
                        <i class="fa fa-bars fa-2x"></i>
                    </div>
                    <div class="logo">
                        ETHAN HANSEN
                    </div>
                    <div class="menu">
                        <ul>
                            <Link to='header' spy={true} smooth={true} activeClass='active'><li><a class="hoverable" /* href="#" */>Home</a></li></Link>
                            <Link to='about' spy={true} smooth={true} offset={-120} activeClass='active'><li><a class="hoverable" /* href="#" */>About</a></li></Link>
                            <Link to='site' spy={true} smooth={true} offset={-120} activeClass='active'><li><a class="hoverable" /* href="#" */>Projects</a></li></Link>
                            <Link to='contact' spy={true} smooth={true} activeClass='active'><li><a class="hoverable" /* href="#" */>Links</a></li></Link>
                            <Link to='contact' spy={true} smooth={true} activeClass='active'><li><a class="hoverable" /* href="#" */>Contact</a></li></Link>
                        </ul>
                    </div>
                </nav>
                <div className='languages'>
                    React Node.JS Express.JS Mongoose
                </div>
            </header>
        </div>
    )
}