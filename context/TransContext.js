import {createContext, useRef, useEffect, useState} from "react"
import gsap from "gsap";
import {Power3} from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import { useLayoutEffect } from 'react';
import { useInView } from 'react-intersection-observer'




const TransitionContext = createContext()

export const TransContext = ({children}) => {

    const { ref: firstPageRef, inView:firstPageVis, entry } = useInView();
    const { ref: secondPageRef, inView:seconPageVid, entry:entrySecond } = useInView();
  /*Navbar */
    const logoRef = useRef()
    const logoLetter = gsap.utils.selector(logoRef)
    const logoText = 'zininatech'
    const navItemRef = useRef()
    const navItemRef2 = useRef()
    const navItemRef3 = useRef()
  /*Navbar End */  
  


    useLayoutEffect(() => {
        if(firstPageVis) {
          const tlMain = gsap.timeline({
            scrollTrigger: {
              trigger: entry.target,
            
              start: '17%',
              end: '100%',
              pin:true,
              pinSpacing: false,
    
            }
          })
         /* Navbar */
        //  tlMain.set(logoLetter(".symbol-letter "), { display:"block"} )
        //  tlMain.set(navItemRef.current, {opacity: '0'})
        //  tlMain.to(logoLetter(".symbol-letter "), {margin: "-7px", transition:".9s ease"} )
        //  tlMain.fromTo(logoRef.current,  {y:0, x:0, }, {y:10, x:50, stagger:.1} )

        //  tlMain.fromTo(logoLetter(".symbol-letter "), {y:0, x:0}, {y:10, x:30, stagger:.1,opacity:1, duaration: .3,transition:'1s ease'} )

        //  tlMain.fromTo(navItemRef.current, {x: -100, opacity:0} , {x:0, opacity:1, duration:.5, transition:'1s ease'})

         /* NavbarEnd */
           
        //  const tlIntro = gsap.timeline({
        //   scrollTrigger: {
        //     trigger: entry.target,
          
        //     start: '0%',
        //     end: '5%',
         
  
        //   }
        

        //  })
        //  tlIntro.set(logoLetter(".symbol-letter "), { display:"block"} )
        //  tlIntro.set(navItemRef.current, {opacity: '0'})
        //  tlIntro.to(logoLetter(".symbol-letter "), {margin: "-7px", transition:".9s ease"} )
        //  tlIntro.fromTo(logoRef.current,  {y:0, x:0, }, {y:10, x:50, stagger:.1} )
        //  tlIntro.fromTo(logoLetter(".symbol-letter "), {y:0, x:0}, {y:10, x:30, stagger:.1,opacity:1, duaration: .3,transition:'1s ease'} )
        //  tlIntro.fromTo(navItemRef.current, {x: -100, opacity:0} , {x:0, opacity:1, duration:.5, transition:'1s ease'})

        }

       
    
    
      }, [firstPageVis])

    

    return (
        <TransitionContext.Provider
        value={{
         
            firstPageRef,
            secondPageRef,
            logoRef,
            logoLetter, 
            logoText, 
            navItemRef, 
            navItemRef2, 
            navItemRef3
        }}
        >
            {children}

        </TransitionContext.Provider>
    )
}

export default TransitionContext