import React, {useState, useRef, useEffect} from 'react'
import Shop from './Shop'


const DashboardLayout = ({children}) => {
  const [status, setStatus] = useState("Shop")
  const [el, setEl] = useState()
  const landingRef =useRef()
  const shopRef = useRef()

  useEffect(() =>  {
    shopRef.current.classList.add('active')

  },[])

  

  const shopPage = <Shop />

  const landingPage = <div>landing</div>

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
    <div className='dashboard'>
        <div className='dash-nav'>
        
            <div ref={shopRef} data-status="Shop" onClick={(e) => handleNav(e)}>Shop</div>
         
            <div ref={landingRef} data-status="Landing" onClick={(e) => handleNav(e)}>Landing</div>
            <div>ETC</div>
         
        </div>
        <div className='dash-content'>
          {currentDash(status)}
            
        </div>
    </div>
  )
}

export default DashboardLayout