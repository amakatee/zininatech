import React, {useRef, useLayoutEffect} from 'react'
import gsap from 'gsap'
import { Power1 } from 'gsap'


const Matrix = () => {
    const matrixRef1 = useRef()
    const matrixRef2 = useRef()
    const matrixRef3 = useRef()
    const matrixRef4 = useRef()
    const matrixLine1 = gsap.utils.selector(matrixRef1)
    const matrixLine2 = gsap.utils.selector(matrixRef2)
    const matrixLine3 = gsap.utils.selector(matrixRef3)
    const matrixLine4 = gsap.utils.selector(matrixRef4)
    const firstLine = "jfhgksjlvsjdklejf583648dchjf   ldkrls^% w"
    const secondLine = "jfhgksjlvsjdklejfw vsdrg的v发生的饭"
    const thirdLine = "jfhgksjlvsjdklejfw lvsjdklejfw vsdrg的v发生的饭"
    const fourthLine = "jfhgksjlvsjdklejfw lvsjdklejfw vsdrg的v发生的饭"



    useLayoutEffect(() => {
         gsap.set(matrixLine1(".matrix-letter "), {x:-3, margin: "-20px"})
         gsap.set(matrixLine2('.matrix-letter '), {margin: "-20px"})
         gsap.set(matrixLine3('.matrix-letter '), {margin: "-20px"})
         gsap.set(matrixLine4('.matrix-letter '), {margin: "-20px"})

         gsap.to(matrixLine1('.matrix-letter'), {margin: "0px", duration:1,transition:".3s easeInOut", ease:Power1.easeInOut })
         gsap.to(matrixLine2('.matrix-letter'), {margin: "-1px", duration:.8,transition:".5s easeInOut", ease:Power1.easeInOut})
         gsap.to(matrixLine3('.matrix-letter'), {margin: "-2px", duration:1.8,transition:".7s easeInOut", ease:Power1.easeInOut})
         gsap.to(matrixLine4('.matrix-letter'), {margin: "-1px", duration:1.4})

         gsap.fromTo(matrixLine1(".matrix-letter"), {y:0, x:0,opacity:0}, {y:-2,x:-4,opacity:1, stagger: .1,repeat:-1, duration: 1.1, ease:Power1.easeInOut} )
         gsap.fromTo(matrixLine2(".matrix-letter"), {y:0,x: 0, opacity:0}, {y:3, x:-2,stagger: .1,opacity:1, repeat:-1,duration: 1.1, ease:Power1.easeInOut})
         gsap.fromTo(matrixLine3(".matrix-letter "), {y:0, x:0, opacity:0}, {y:-1,x:-1,opacity:1, stagger: .1,repeat:-1, duration: 1.1,ease:Power1.easeInOut})
         gsap.fromTo(matrixLine4(".matrix-letter"), {y:-3, x:-3,opacity:0}, {y:-1,x:4,opacity:1, stagger: .1,repeat:-1, duration: .01})





    }, [])

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