import {createContext, useRef, useEffect, useState} from "react"
import gsap from "gsap";
import {Power3, slowMo} from 'gsap'
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
  /*Matrix*/
  const matrixRef1 = useRef()
  const matrixRef2 = useRef()
  const matrixRef3 = useRef()
  const matrixRef4 = useRef()
  const matrixLine1 = gsap.utils.selector(matrixRef1)
  const matrixLine2 = gsap.utils.selector(matrixRef2)
  const matrixLine3 = gsap.utils.selector(matrixRef3)
  const matrixLine4 = gsap.utils.selector(matrixRef4)
  /*Matrix Ends*/ 


    useLayoutEffect(() => {
        if(firstPageVis) {
          const tlMain = gsap.timeline({
            scrollTrigger: {
              trigger: entry.target,
            
              start: '23%',

              scrub:true,
              end: '100%',
              pin:true,
              pinSpacing: false,
    
            }
          })


          /*Matrix */

         
          /* Mftrix Ends */
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
   useLayoutEffect(() => {
         gsap.set(matrixLine1(".matrix-letter "), {x:-3, margin: "-20px"})
         gsap.set(matrixLine2('.matrix-letter '), {margin: "-20px"})
         gsap.set(matrixLine3('.matrix-letter '), {margin: "-20px"})
         gsap.set(matrixLine4('.matrix-letter '), {margin: "-20px"})

         gsap.to(matrixLine1('.matrix-letter'), {margin: "0px", duration:1.1,  ease: Power3.easeInOut})
         gsap.to(matrixLine2('.matrix-letter'), {margin: "-1px", duration:.9,  ease: Power3.easeInOut})
         gsap.to(matrixLine3('.matrix-letter'), {margin: "-2px", duration:1.8, ease: Power3.easeInOut})
         gsap.to(matrixLine4('.matrix-letter'), {margin: "-1px", duration:1.4, ease: slowMo})

         gsap.fromTo(matrixLine1(".matrix-letter"), {y:0, x:0,opacity:0}, {y:-2,x:-4,opacity:1, stagger: .1,repeat:-1, duration: 1.1} )
         gsap.fromTo(matrixLine2(".matrix-letter"), {y:0,x: 0, opacity:0}, {y:3, x:-2,stagger: .1,opacity:1, repeat:-1,duration: 1.1})
         gsap.fromTo(matrixLine3(".matrix-letter "), {y:0, x:0, opacity:0}, {y:-1,x:-1,opacity:1, stagger: .1,repeat:-1, duration: 1.1})
         gsap.fromTo(matrixLine4(".matrix-letter"), {y:-3, x:-3,opacity:0}, {y:-1,x:4,opacity:1, stagger: .1,repeat:-1, duration: .01})





    }, [])
    

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
            navItemRef3,
            matrixRef1, 
            matrixRef2, 
            matrixRef3, 
            matrixRef4 , 
            matrixLine1, 
            matrixLine2, 
            matrixLine3, 
            matrixLine4
        }}
        >
            {children}

        </TransitionContext.Provider>
    )
}

export default TransitionContext