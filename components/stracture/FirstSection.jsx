import React, {useContext, useRef} from 'react'
import Navbar from '../Navbar'
import Matrix from '../Matrix'
import DashboardLayout from '../DashboardLayout'
import TransitionContext from '../../context/TransContext'


const FirstSection = () => {
  const {firstPageRef} = useContext(TransitionContext)
  return (
    <>
    <section ref={firstPageRef}  className='main'>
      <Navbar />
      <Matrix />
      <DashboardLayout />
      </section> 
    </>
  )
}

export default FirstSection