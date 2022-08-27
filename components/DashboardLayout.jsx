import React, {useState, useRef, useEffect, useContext} from 'react'
import TransitionContext from '../context/TransContext'
import Shop from './Shop'



const DashboardLayout = ({children}) => {
  const {dashBoardRef} = useContext(TransitionContext)
  const [status, setStatus] = useState("Shop")
  const [el, setEl] = useState()
  const landingRef =useRef()
  const shopRef = useRef()

  useEffect(() =>  {
    shopRef.current.classList.add('active')

  },[])

  

  const shopPage = <Shop />

  const landingPage = <div className='landing-page'> <p>Здесь возможно что-нибудь будет:)</p></div>

  function currentDash ( status = currentStatus) {

    switch(status){
      case"Shop":
      return shopPage
      break

      case "Landing":
      return landingPage
      break

      default:
        return shopPage
    }

  }
   const handleNav = (e) => {
  
     setStatus(e.target.dataset.status)
     setEl(e.target) }

   if(status === "Shop") {
    el?.classList.add('active')
    landingRef.current?.classList.remove('active')
    

   } else {
    el?.classList.add('active')
    shopRef.current?.classList.remove('active')
   }
 


  
  return (
    <div ref={dashBoardRef} className='dashboard'>
        <div className='dash-nav'>
        
            <div ref={shopRef} data-status="Shop" onClick={(e) => handleNav(e)}>Магазин</div>
         
            <div ref={landingRef} data-status="Landing" onClick={(e) => handleNav(e)}>Лендинг</div>
            <div>и другое</div>
         
        </div>
        <div className='dash-content'>
          {currentDash(status)}
            
        </div>
    </div>
  )
}

export default DashboardLayout