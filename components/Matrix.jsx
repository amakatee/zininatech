import React, {useRef, useLayoutEffect} from 'react'
import gsap from 'gsap'
import { Power3 } from 'gsap'


const Matrix = () => {
    const matrixRef1 = useRef()
    const matrixRef2 = useRef()
    const matrixRef3 = useRef()
    const matrixLine1 = gsap.utils.selector(matrixRef1)
    const matrixLine2 = gsap.utils.selector(matrixRef2)
    const matrixLine3 = gsap.utils.selector(matrixRef3)
    const firstLine = "jfhgksjlvsjdklejf583648dchjf   ldkrls^% w"
    const secondLine = "jfhgksjlvsjdklejfw vsdrg的v发生的饭"
    const thirdLine = "jfhgksjlvsjdklejfw"


    useLayoutEffect(() => {
         gsap.set(matrixLine1(".matrix-letter "), {x:-3, margin: "-18px"})
         gsap.set(matrixLine2('.matrix-letter '), {margin: "-20px"})
         gsap.set(matrixLine3('.matrix-letter '), {margin: "-20px"})

         gsap.to(matrixLine1('.matrix-letter'), {margin: "0px", duration:1.2, ease:Power3.easeInOut })
         gsap.to(matrixLine2('.matrix-letter'), {margin: "-1px", duration:2, ease:Power3.easeInOut})
         gsap.to(matrixLine3('.matrix-letter'), {margin: "-2px", duration:1.6, ease:Power3.easeInOut})

         gsap.fromTo(matrixLine1(".matrix-letter"), {y:0, x:0,opacity:0}, {y:-2,x:-4,opacity:1, stagger: .1,repeat:-1, duration: 1.1, ease:Power3.easeInOut} )
         gsap.fromTo(matrixLine2(".matrix-letter"), {y:0,x: 0, opacity:0}, {y:3, x:-2,stagger: .1,opacity:1, repeat:-1,duration: 1.1, ease:Power3.easeInOut})
         gsap.fromTo(matrixLine3(".matrix-letter "), {y:0, x:0, opacity:0}, {y:-1,x:-1,opacity:1, stagger: .1,repeat:-1, duration: 1.1,ease:Power3.easeInOut})




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
    </section>
  )
}

export default Matrix