import React from 'react'
import Navbar from '../Navbar'
import Matrix from '../Matrix'
import DashboardLayout from '../DashboardLayout'

const FirstSection = () => {
  return (
    <>
    <section className='main'>
      <Navbar />
      <Matrix />
      <DashboardLayout />
      </section> 
    </>
  )
}

export default FirstSection