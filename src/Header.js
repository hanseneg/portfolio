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

    //option1
    //use 1 navbar and set display to none with media query at max-width 870px
    //use toggle to set display to back to showing or flex somehow

    //option 2
    //use 2 navbars and toggle them on and off 

    //option 3
    //use sandbox example and media query to move navbar to side when screen gets to 870px
    //use css to start display at none ans then toggle to show it 
    //toggle to show and hide navbar 

    const style = {}


    const [toggle, setToggle] = useState(false)
    const [display, setDisplay] = useState("none")
    const [widenav, setWideNav] = useState("inlineBlock")

    function toggleMenu(){
        setToggle(!toggle)
        if (toggle === true ) {
            setDisplay("none")
            setWideNav("inlineBlock")
        } else {
            setDisplay("block")
            setWideNav("none")
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
                    {/* { !toggle ? 
                        <>
                            <div class="menu-icon">
                                <i onClick={toggleMenu} class="fa fa-bars fa-2x"></i>
                            </div>
                        </>
                    :
                        <>
                            <div class="menu-icon2">
                                <i onClick={toggleMenu} class="fa fa-bars fa-2x"></i>
                            </div>
                            <div class="menu2">
                                <ul>
                                    <Link to='header' spy={true} smooth={true} activeClass='active'><li><a class="hoverable" >Home</a></li></Link>
                                    <Link to='about' spy={true} smooth={true} offset={-120} activeClass='active'><li><a class="hoverable" >About</a></li></Link>
                                    <Link to='site' spy={true} smooth={true} offset={-120} activeClass='active'><li><a class="hoverable" >Projects</a></li></Link>
                                    <Link to='contact' spy={true} smooth={true} activeClass='active'><li><a class="hoverable" >Links</a></li></Link>
                                    <Link to='contact' spy={true} smooth={true} activeClass='active'><li><a class="hoverable" >Contact</a></li></Link>
                                </ul>
                            </div>
                        </>
                    } */}
                    <div class="logo">
                        ETHAN HANSEN
                    </div>

                    <div class="menu-icon">
                        <i onClick={toggleMenu} class="fa fa-bars fa-2x"></i>
                    </div>



                    <div class="menu">
                        <ul>
                            <Link to='header' spy={true} smooth={true} activeClass='active'><li style={{display, widenav}}><a class="hoverable" >Home</a></li></Link>
                            <Link to='about' spy={true} smooth={true} offset={-120} activeClass='active'><li style={{display, widenav}}><a class="hoverable" >About</a></li></Link>
                            <Link to='site' spy={true} smooth={true} offset={-120} activeClass='active'><li style={{display, widenav}}><a class="hoverable" >Projects</a></li></Link>
                            <Link to='contact' spy={true} smooth={true} activeClass='active'><li style={{display, widenav}}><a class="hoverable" >Links</a></li></Link>
                            <Link to='contact' spy={true} smooth={true} activeClass='active'><li style={{display, widenav}}><a class="hoverable" >Contact</a></li></Link>
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

//use a toggle in the links to close side navbar
//use toggle to set navbars display from none to block
//use toggle to set menu icons display from block to none?