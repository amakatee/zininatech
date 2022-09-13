import React, {useContext, useRef} from 'react'
import Navbar from '../Navbar'
import Matrix from '../Matrix'
import DashboardLayout from '../DashboardLayout'
import TransitionContext from '../../context/TransContext'
import Navigation from '../Navigation'
import Form from '../Form'

const FirstSection = () => {
  const {firstPageRef,ztRef} = useContext(TransitionContext)
 
  return (
    <>
    <section ref={firstPageRef}  className='main'>
      <Navigation />
      <Form />
   
      {/* <Navbar /> */}
     
      {/* <Matrix /> */}
      <DashboardLayout />
      </section> 
    </>
  )
}

export default FirstSection