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

    const [toggle, setToggle] = useState(false)
    const [display, setDisplay] = useState("none")

    function toggleMenu(){
        setToggle(!toggle)
        if (toggle === true ) {
            setDisplay("none")
        } else {
            setDisplay("block")
        }
      } 

    return (
        <div>
            <header>
                <nav style={{
                    backgroundColor: scrollState === "top" ? "transparent" : "rgb(46, 45, 45)",
                    transition: 1.3,
                    position: "fixed"
                    }}>
                    <Link to='header' spy={true} smooth={true} activeClass='active'>
                        <div class="logo">
                            ETHAN HANSEN
                        </div>
                    </Link>
                    <div class="menu-icon">
                        <i onClick={toggleMenu} class="fa fa-bars fa-2x"></i>
                    </div>
                    <div class="menu">
                        <ul>
                            <Link to='header' spy={true} smooth={true} activeClass='active'><li className='link1' style={{display}}><a class="hoverable" >Home</a></li></Link>
                            <Link to='about' spy={true} smooth={true} offset={-300} activeClass='active'><li className='link1' style={{display}}><a class="hoverable" >About</a></li></Link>
                            <Link to='site' spy={true} smooth={true} offset={-300} activeClass='active'><li className='link1' style={{display}}><a class="hoverable" >Projects</a></li></Link>
                            <Link to='contact' spy={true} smooth={true} offset={-290} activeClass='active'><li className='link1' style={{display}}><a class="hoverable" >Links</a></li></Link>
                            <Link to='contact' spy={true} smooth={true} offset={-290} activeClass='active'><li className='link1' style={{display}}><a class="hoverable" >Contact</a></li></Link>
                        </ul>
                    </div>
                    <div class="menu2">
                        <ul>
                            <Link to='header' spy={true} smooth={true} activeClass='active'><li className='link2'><a class="hoverable" >Home</a></li></Link>
                            <Link to='about' spy={true} smooth={true} offset={-120} activeClass='active'><li className='link2'><a class="hoverable" >About</a></li></Link>
                            <Link to='site' spy={true} smooth={true} offset={-120} activeClass='active'><li className='link2'><a class="hoverable" >Projects</a></li></Link>
                            <Link to='contact' spy={true} smooth={true} activeClass='active'><li className='link2'><a class="hoverable" >Links</a></li></Link>
                            <Link to='contact' spy={true} smooth={true} activeClass='active'><li className='link2'><a class="hoverable" >Contact</a></li></Link>
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