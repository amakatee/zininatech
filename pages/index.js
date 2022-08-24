import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Matrix from '../components/Matrix'
export default function Home() {
  return (
    <section className='main'>
      <Navbar />
      <Matrix />
    
     
   
    </section>
  )
}
