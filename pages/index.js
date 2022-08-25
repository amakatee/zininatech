import FirstSection from '../components/stracture/FirstSection'
import SecondSection from '../components/stracture/SecondSection'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect } from 'react';
gsap.registerPlugin(ScrollTrigger)
export default function Home() {
  const { ref: firstPageRef, inView:firstPageVis, entry } = useInView();
  const { ref: seconPageRef, inView:seconPageVid, entry:entrySecond } = useInView();
  console.log(firstPageVis)
  
  useLayoutEffect(() => {
    if(firstPageVis) {
      const tlMain = gsap.timeline({
        ScrollTrigger: {
          trigger: entry.target,
          markers: true,
          start: '0%',
          end: '100%',
          pin:true,
          pinSpacing: false,

        }
      })

      console.log(tlMain)
    }


  }, [firstPageVis])

  return (
    <>
       <div ref={firstPageRef}>
      <FirstSection />
      </div>
      <div ref={seconPageRef}>
      <SecondSection />
      </div>
    </>

    
  )
}
