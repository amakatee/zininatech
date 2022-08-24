import React, {useState} from 'react'
import Shop from './Shop'


const DashboardLayout = ({children}) => {
  const [status, setStatus] = useState("")

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


  return (
    <div className='dashboard'>
        <div className='dash-nav'>
        
            <div onClick={() => setStatus("Shop")}>Shop</div>
         
            <div onClick={() => setStatus("Landing")}>Landing</div>
            <div>Charts</div>
        </div>
        <div className='dash-content'>
          {currentDash(status)}
            
        </div>
    </div>
  )
}

export default DashboardLayout