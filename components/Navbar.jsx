import React, {useRef, useLayoutEffect} from 'react'
import gsap from 'gsap'


const Navbar = () => {
    const logoRef = useRef()
    const logoLetter = gsap.utils.selector(logoRef)
    const logoText = 'zininatech'
 
  

    useLayoutEffect(() => {
        gsap.set(logoLetter(".symbol-letter "), { display:"block"} )
        gsap.fromTo(logoLetter(".symbol-letter "),{margin:"-100px"}, {margin: "-7px", duration:.5, transition:".7s ease"} )
        gsap.fromTo(logoRef.current,  {y:0, x:0, }, {y:10, x:50, stagger:.1} )

        gsap.fromTo(logoLetter(".symbol-letter "), {y:0, x:0}, {y:10, x:30, stagger:.1,opacity:1} )

              

    },[])
  return (
    <div className='navbar'>
        <h1 ref={logoRef} className='nav-logo'>{logoText.split(""). map((letter, i) => (
            <span key={i} className="symbol-letter">{letter}</span>
        ))}</h1>
        <div className='nav-navigation'>
            <div>Now</div>
            <div>About project</div>
            <div>Contact</div>
        </div>
    </div>
  )
}

export default Navbar