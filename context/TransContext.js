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
    const dashBoardRef = useRef()
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
            
              start: '30%',

              scrub:true,
              end: '130%',
              pin:true,
              pinSpacing: false,
    
            }
          })
          console.log(dashBoardRef.current)
          tlMain.fromTo(dashBoardRef.current,{y:0}, {y:'-30%',transition:'7s easeInOut' ,ease:slowMo})
          


       
      
       

        }

       
    
    
      }, [firstPageVis])

      useLayoutEffect(() => 
      {
        gsap.fromTo(navItemRef.current, {x: "-100%", opacity:0} , {x:0, opacity:1, duration:.5, transition:'1s easeInOut', delay:.2})



      }, [])
   useLayoutEffect(() => {

    /* Matrix */
         gsap.set(matrixLine1(".matrix-letter "), {x:'-3%', margin: "-20px"})
         gsap.set(matrixLine2('.matrix-letter '), {margin: "-20px"})
         gsap.set(matrixLine3('.matrix-letter '), {margin: "-20px"})
         gsap.set(matrixLine4('.matrix-letter '), {margin: "-20px"})

         gsap.fromTo(matrixLine1('.matrix-letter'), {margin: "-20px"}, {margin: "0px", duration:1,  ease: Power3.slowMo })
         gsap.fromTo(matrixLine2('.matrix-letter'), {margin: "-20px"}, {margin: "-1px", duration:1.7,  ease: Power3.slowMo})
         gsap.fromTo(matrixLine3('.matrix-letter'),{margin: "-20px"}, {margin: "-2px", duration:1.5, ease: Power3.slowMo })
         gsap.fromTo(matrixLine4('.matrix-letter'),{margin: "-20px"}, {margin: "-1px", duration:2, ease: Power3.slowMo})

         gsap.fromTo(matrixLine1(".matrix-letter"), {y:'0%', x:'0%',opacity:0}, {y:'-2%',x:'-4%',opacity:1, stagger: .1,repeat:-1, duration: 1} )
         gsap.fromTo(matrixLine2(".matrix-letter"), {y:'0%',x: '0%', opacity:0}, {y:'3%', x:'-2%',stagger: .1,opacity:1, repeat:-1,duration: .7})
         gsap.fromTo(matrixLine3(".matrix-letter "), {y:'0%', x:'0%', opacity:0}, {y:'-1%',x:'-1%',opacity:1, stagger: .1,repeat:-1, duration: .4})
         gsap.fromTo(matrixLine4(".matrix-letter"), {y:'-3%', x:'-3%',opacity:0}, {y:'-1%',x:'4%',opacity:1, stagger: .1,repeat:-1, duration: .91})



    /* Matrix End */

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
            matrixLine4,
            dashBoardRef
        }}
        >
            {children}

        </TransitionContext.Provider>
    )
}

export default TransitionContext