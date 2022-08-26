import React, {useRef, useLayoutEffect, useContext} from 'react'
import gsap from 'gsap'
import { Power3, slowMo } from 'gsap'
import TransitionContext from '../context/TransContext'


const Matrix = () => {
    const {matrixRef1, matrixRef2, matrixRef3, matrixRef4 , matrixLine1, matrixLine2, matrixLine3, matrixLine4} = useContext(TransitionContext)

    const firstLine = "jfhgksjlvsjdklejf583648dchjf   ldkrls^% w"
    const secondLine = "jfhgksjlvsjdklejfw vsdrg的v发生的饭"
    const thirdLine = "jfhgksjlvsjdklejfw lvsjdklejfw vsdrg的v发生的饭"
    const fourthLine = "jfhgksjlvsjdklejfw lvsjdklejfw vsdrg的v发生的饭"



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
    <section className='matrix'>
        <div ref={matrixRef1} className='matrix-div'>{firstLine.split("").map((letter, i) => (
            <span key={i} className='matrix-letter'>{letter}</span>
         ))}
        </div>
        <div ref={matrixRef2} className='matrix-div'>{secondLine.split("").map((letter, i) => (
            <span key={i} className='matrix-letter'>{letter}</span>
         ))}
        </div>
        <div ref={matrixRef3} className='matrix-div'>{thirdLine.split("").map((letter, i) => (
            <span key={i} className='matrix-letter'>{letter}</span>
         ))}
        </div>
        <div ref={matrixRef4} className='matrix-div'>{fourthLine.split("").map((letter, i) => (
            <span key={i} className='matrix-letter'>{letter}</span>
         ))}
        </div>
    </section>
  )
}

export default Matrix