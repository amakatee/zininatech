import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div className='dashboard'>
        <div className='dash-nav'>
            <div>Users</div>
            <div>Sales</div>
            <div>Charts</div>
        </div>
        <div className='dash-content'>
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout