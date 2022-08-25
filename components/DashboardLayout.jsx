import React, {useState} from 'react'
import Shop from './Shop'


const DashboardLayout = ({children}) => {
  const [status, setStatus] = useState("Shop")
  const [dataset, setDataset] = useState("Shop")
  const [el, setEl] = useState()

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
     console.log(e.target.dataset.status)
     setStatus(e.target.dataset.status)
     setDataset(e.target.dataset.status)
    //  status === dataset ?  e.target.classList.add('active') :  e.target.classList.remove('active')
     
     setEl(e.target)
    

   }
   console.log(el)
   console.log(status, dataset)
   if(status === dataset) {
    el?.classList.add('active')

   } else {
    el?.classList.remove('active')
   }
  //  status === dataset ?  el.classList.add('active') :  el.classList.remove('active')


  
  return (
    <div className='dashboard'>
        <div className='dash-nav'>
        
            <div data-status="Shop" onClick={(e) => handleNav(e)}>Shop</div>
         
            <div  data-status="Landing" onClick={(e) => handleNav(e)}>Landing</div>
            <div>Charts</div>
        </div>
        <div className='dash-content'>
          {currentDash(status)}
            
        </div>
    </div>
  )
}

export default DashboardLayout