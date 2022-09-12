import React, {useContext} from 'react'
import TransitionContext from '../context/TransContext'


const Navigation = () => {
    const ztLogo = "zininatech"
    const ztContact = "Услуги"
    const {ztRef, ztContRef, ztItemRef, ztItem1Ref} = useContext(TransitionContext)
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
      </div>

     

     </div>
  )

}

export default Navigation