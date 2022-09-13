import {createContext, useRef, useEffect, useState} from "react"
import gsap from "gsap";
import {Power3, slowMo} from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { useLayoutEffect } from 'react';
import { useInView } from 'react-intersection-observer'

// import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger)








const TransitionContext = createContext()

export const TransContext = ({children}) => {

    const { ref: firstPageRef, inView:firstPageVis, entry } = useInView();
    const { ref: secondPageRef, inView:seconPageVis, entry:entrySecond } = useInView();
    
    const ztRef = useRef()
    const zt = gsap.utils.selector(ztRef)
    const dashBoardRef = useRef()
    const ztContRef = useRef()
    const ztCont = gsap.utils.selector(ztContRef)
    const ztItemRef = useRef()
    const ztItem1Ref = useRef()
    const ztItem2Ref = useRef()
    const ztContRef2 = useRef()
    const ztCont2 = gsap.utils.selector(ztItem2Ref)
    const  ztItem3Ref = useRef()
    const  ztContRef3 = useRef()
    const ztCont3 = gsap.utils.selector( ztContRef3)
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

  /* Second Page Tilte  */

  const secondTitleRef = useRef()
  const secTitle = gsap.utils.selector(secondTitleRef)
  const secTopRef1 = useRef()
  const secTopRef2 = useRef()
  const secTopRef3  = useRef()
  /* Second page title ends  */

  const imgRef = useRef()


  //  useLayoutEffect(() => { 
  //   Draggable.create(imgRef.current, {
  //     type: 'x'
  //   })

  //  }, [])
    

   useLayoutEffect(() => {
        gsap.set(logoLetter(".symbol-letter "), { display:"block"} )
        // gsap.fromTo(logoLetter(".symbol-letter "),{margin:"-10px"}, {margin: "-7px", duration:.5, transition:".7s ease"} )
        // gsap.fromTo(logoRef.current,  {y:0, x:0, }, {y:2, x:4, stagger:.1} )

         gsap.fromTo(logoLetter(".symbol-letter "), {y:0, x:0}, {y:3, x:7, stagger:.1,opacity:1, transition:'1s ease'} )

        // gsap.fromTo(navItemRef.current, {x: -100, opacity:0} , {x:0, opacity:1, duration:.5, transition:'1s ease'})
         



              

    },[])
  

    useLayoutEffect(() => {
        if(firstPageVis) {
          const tlMain = gsap.timeline({
            scrollTrigger: {
              trigger: entry.target,
            
              start: '30%',

              scrub:true,
              end: '100%',
               pin:true,
               pinSpacing: false,
    
            }
          })
          console.log(dashBoardRef.current)
          tlMain.fromTo(dashBoardRef.current,{y:0}, {y:'-20%',transition:'7s easeInOut' , ease: slowMo})
}

       
    
    
      }, [firstPageVis])

     
    
          

  
      // useLayoutEffect(() => {
      //   if(seconPageVis){
      //     const tlSecond = gsap.timeline({
      //       scrollTrigger: {
      //         trigger: entry.target,
            
      //         start: '30%',

      //         scrub:true,
      //         end: '90%',
             
    
      //       }

      //     })
      //     // tlSecond.fromTo(secondTitleRef.current , {y:'100%',  }  , {y:0,opacity:1})
      //     // tlSecond.fromTo(secTitle('.second-title-letter'), {y:'0', x:'0%'}, {y:'100%', x:'30%', stagger:.1, ease:slowMo})
      //     tlSecond.fromTo(secTopRef1.current, {y:'8%', opacity:0, transform:'scale(0.9)'}, {y:'0%', opacity:1,transform:'scale(1)', delay: .1})
      //     tlSecond.fromTo(secTopRef2.current, {y:'8%', opacity:0, transform:'scale(0.9)'}, {y:'0%', opacity:1,transform:'scale(1)', delay: .1})
      //     tlSecond.fromTo(secTopRef3.current, {y:'8%', opacity:0, transform:'scale(0.9)'}, {y:'0%', opacity:1,transform:'scale(1)', delay: .1})

         
         
      //   }
        
      

      // }, [seconPageVis])



      // }, [])

      useLayoutEffect(() => {
        // gsap.set(ztItemRef.current, {y:'-30%', x:'-40%'})
        
        gsap.to(ztItemRef.current, {y:'10%', x:'30%', delay:.3, duration:2})
        gsap.fromTo(zt('.zt-span'),{ margin: '-4px',y:0,x:0,}, {y:-1,x:-2,margin:"2px", stagger: .1})
        gsap.to(ztItem1Ref.current, {y:'80%', x:'-20%', delay:.3, duration:2})
        
        
   

        gsap.fromTo(ztCont('.zt-span'),{margin: '-5px',y:0,x:0,}, {y:-1,x:-2,margin:"1.2px", stagger: .1})
        gsap.to(ztItem2Ref.current, {y:'135%', x:'-20%', delay:.3, duration:2})

        gsap.fromTo(ztCont2('.zt-span'),{margin: '-5px',y:0,x:0,}, {y:-1,x:-2,margin:"1.2px", stagger: .1})
        
        gsap.to(ztItem3Ref.current, {y:'190%', x:'-20%', delay:.3, duration:2})
        gsap.fromTo(ztCont3('.zt-span'),{margin: '-5px',y:0,x:0,}, {y:-1,x:-2,margin:"1.2px", stagger: .1})





      },[])
  //  useLayoutEffect(() => {

  //   /* Matrix */
  //        gsap.set(matrixLine1(".matrix-letter "), {x:'-10%', margin: "-20px"})
  //        gsap.set(matrixLine2('.matrix-letter '), {margin: "-20px"})
  //        gsap.set(matrixLine3('.matrix-letter '), {margin: "-20px"})
  //        gsap.set(matrixLine4('.matrix-letter '), {margin: "-20px"})

  //        gsap.fromTo(matrixLine1('.matrix-letter'), {margin: "-20px",x:'-10%'}, {margin: "-1px",x:'10%', duration:1.1  })
  //        gsap.fromTo(matrixLine2('.matrix-letter'), {margin: "-20px"}, {margin: "-2px", duration:1.7  })
  //        gsap.fromTo(matrixLine3('.matrix-letter'),{margin: "-20px"}, {margin: "-2px", duration:1.5, })
  //        gsap.fromTo(matrixLine4('.matrix-letter'),{margin: "-20px"}, {margin: "-2px", duration:.9})

  //          gsap.fromTo(matrixLine1(".matrix-letter"), {y:0, x:0,opacity:0}, {y:-2,x:-4,opacity:1, stagger: .1,repeat:-1, duration: .7, delay:.3} )
  //          gsap.fromTo(matrixLine2(".matrix-letter"), {y:0,x: 0, opacity:0}, {y:3, x:-2,stagger: .1,opacity:1, repeat:-1,duration: 1.1, delay:.3})
  //        gsap.fromTo(matrixLine3(".matrix-letter "), {y:0, x:0, opacity:0}, {y:-1,x:-1,opacity:1, stagger: .1,repeat:-1, duration: 1.1 ,delay:.3})
  //       gsap.fromTo(matrixLine4(".matrix-letter"), {y:-3, x:-3,opacity:0}, {y:-1,x:4,opacity:1, stagger: .1,repeat:-1, duration: .01, delay:.3})


  //       //  gsap.fromTo(matrixLine1(".matrix-letter"), {y:'0%', x:'0%',opacity:0}, {y:'-2%',x:'-4%',opacity:1, stagger: .1,repeat:-1, duration: 1} )
  //       //  gsap.fromTo(matrixLine2(".matrix-letter"), {y:'0%',x: '0%', opacity:0}, {y:'3%', x:'-2%',stagger: .1,opacity:1, repeat:-1,duration: .7})
  //       //  gsap.fromTo(matrixLine3(".matrix-letter "), {y:'0%', x:'0%', opacity:0}, {y:'-1%',x:'-1%',opacity:1, stagger: .1,repeat:-1, duration: .4})
  //       //  gsap.fromTo(matrixLine4(".matrix-letter"), {y:'-3%', x:'-3%',opacity:0}, {y:'-1%',x:'4%',opacity:1, stagger: .1,repeat:-1, duration: .91})



  //   /* Matrix End */

  //   }, [])
    

    // useLayoutEffect(() => {
    //      gsap.set(matrixLine1(".matrix-letter "), {x:-3, margin: "-20px"})
    //      gsap.set(matrixLine2('.matrix-letter '), {margin: "-20px"})
    //      gsap.set(matrixLine3('.matrix-letter '), {margin: "-20px"})
    //      gsap.set(matrixLine4('.matrix-letter '), {margin: "-20px"})

    //      gsap.to(matrixLine1('.matrix-letter'), {margin: "0px", duration:1.1,  ease: Power3.easeInOut})
    //      gsap.to(matrixLine2('.matrix-letter'), {margin: "-1px", duration:.9,  ease: Power3.easeInOut})
    //      gsap.to(matrixLine3('.matrix-letter'), {margin: "-2px", duration:1.8, ease: Power3.easeInOut})
    //      gsap.to(matrixLine4('.matrix-letter'), {margin: "-1px", duration:1.4, ease: slowMo})

    //      gsap.fromTo(matrixLine1(".matrix-letter"), {y:0, x:0,opacity:0}, {y:-2,x:-4,opacity:1, stagger: .1,repeat:-1, duration: 1.1} )
    //      gsap.fromTo(matrixLine2(".matrix-letter"), {y:0,x: 0, opacity:0}, {y:3, x:-2,stagger: .1,opacity:1, repeat:-1,duration: 1.1})
    //      gsap.fromTo(matrixLine3(".matrix-letter "), {y:0, x:0, opacity:0}, {y:-1,x:-1,opacity:1, stagger: .1,repeat:-1, duration: 1.1})
    //      gsap.fromTo(matrixLine4(".matrix-letter"), {y:-3, x:-3,opacity:0}, {y:-1,x:4,opacity:1, stagger: .1,repeat:-1, duration: .01})





    // }, [])
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
            dashBoardRef,
            secondTitleRef,
            secondPageRef,
            secTopRef1,
            secTopRef2, 
            secTopRef3,
            imgRef,
            ztRef,
            ztContRef,
            ztItemRef,
            ztItem1Ref,
            ztItem2Ref,
            ztItem3Ref,
            ztContRef3
   
        }}
        >
            {children}

        </TransitionContext.Provider>
    )
}

export default TransitionContext