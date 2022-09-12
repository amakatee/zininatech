import React, {useRef, useLayoutEffect, useContext} from 'react'
import gsap from 'gsap'
import TransitionContext from '../context/TransContext'


const Navbar = () => {
    const { logoRef,ztRef, LogoLetter, logoText, navItemRef, navItemRef2, navItemRef3} = useContext(TransitionContext)
    // const logoRef = useRef()
    // const logoLetter = gsap.utils.selector(logoRef)
    // const logoText = 'zininatech'
    // const navItemRef = useRef()
    // const navItemRef2 = useRef()
    // const navItemRef3 = useRef()
    const ztLogo = "zininatech"
 
  

    // useLayoutEffect(() => {
    //     gsap.set(logoLetter(".symbol-letter "), { display:"block"} )
    //     gsap.fromTo(logoLetter(".symbol-letter "),{margin:"-10px"}, {margin: "-7px", duration:.5, transition:".7s ease"} )
    //     gsap.fromTo(logoRef.current,  {y:0, x:0, }, {y:10, x:50, stagger:.1} )

    //     gsap.fromTo(logoLetter(".symbol-letter "), {y:0, x:0}, {y:10, x:30, stagger:.1,opacity:1, transition:'1s ease'} )

    //     gsap.fromTo(navItemRef.current, {x: -100, opacity:0} , {x:0, opacity:1, duration:.5, transition:'1s ease'})




              

    // },[])
  return (
    <>
    <div className='navbar'>
        <h1 ref={logoRef} className='nav-logo'>{logoText.split(""). map((letter, i) => (
            <span key={i} className="symbol-letter">{letter}</span>
        ))}</h1>
        <div  className='nav-navigation'>
            <div className='nav-item invisible'><span ref={navItemRef} >Cайт</span></div>
            <div className='nav-item'><span ref={navItemRef2}>Обо мне</span></div>
            <div className='nav-item'><span ref={navItemRef3}>Контакты</span></div>
        </div>
        <p className='nav-desc'>Итерация свойственна человеку, рекурсия божественна. <br />
             <span >— L.P. Deutsch</span> </p>
    </div>
     <div><h1 ref={ztRef} className='zt-logo'>{ztLogo.split("").map((letter, i) => (
       <span className='zt-span' key={i}>{letter}</span>
     ))}</h1></div>
     </>
  )
}

export default Navbar