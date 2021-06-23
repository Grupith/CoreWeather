import React from 'react'

const Dashboard = () => {
    return (
        <div className='dashboardCard'>
           <div className='dashboardName'>
                <p>Hello</p>
                <span className='name'>Dylan</span>
           </div>
           <p className='todaysDate'>Todays Date is <span className='date'>6-22-2021</span> </p>
           <h3 className='location'>Your based in <span className='city'>Milwaukee</span></h3>
        </div>
    )
}

export default Dashboard
