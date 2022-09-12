import React, {useContext, useRef} from 'react'
import Navbar from '../Navbar'
import Matrix from '../Matrix'
import DashboardLayout from '../DashboardLayout'
import TransitionContext from '../../context/TransContext'
import Navigation from '../Navigation'


const FirstSection = () => {
  const {firstPageRef,ztRef} = useContext(TransitionContext)
 
  return (
    <>
    <section ref={firstPageRef}  className='main'>
      <Navigation />
   
      {/* <Navbar /> */}
     
      {/* <Matrix /> */}
      <DashboardLayout />
      </section> 
    </>
  )
}

export default FirstSection