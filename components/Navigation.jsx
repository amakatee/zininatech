import React, {useContext} from 'react'
import TransitionContext from '../context/TransContext'


const Navigation = () => {
    const ztLogo = "zitech"
    const ztContact = "Услуги"
    const zt2Line = "Цены "
    const zt3Line = " Контакты"
    const {ztRef, ztContRef, ztItemRef, ztItem1Ref, ztItem2Ref, ztContRef2, ztItem3Ref, ztContRef3} = useContext(TransitionContext)
  return (
      <div className='zt-cont'>
        <div className='zt-items'>

    <div  ref={ztItemRef} className='zt-item-l'><h1 ref={ztRef} className='zt-logo'>{ztLogo.split("").map((letter, i) => (
        <span className='zt-span' key={i}>{letter}</span>
      ))}</h1>
      </div>

      <div ref={ztItem1Ref} className='zt-item-l'><h1 ref={ztContRef} className='zt-contact'>{ztContact.split("").map((letter, i) => (
        <span className='zt-span' key={i}>{letter}</span>
      ))}</h1>
      </div>
      <div ref={ztItem2Ref} className='zt-item-l'><h1 ref={ztContRef2} className='zt-contact'>{zt2Line.split("").map((letter, i) => (
        <span className='zt-span' key={i}>{letter}</span>
      ))}</h1>
      </div>
      <div ref={ztItem3Ref} className='zt-item-l'><h1 ref={ztContRef3} className='zt-contact'>{zt3Line.split("").map((letter, i) => (
        <span className='zt-span' key={i}>{letter}</span>
      ))}</h1>
      </div>
      </div>

     

     </div>
  )

}

export default Navigation