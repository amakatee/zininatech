import React from 'react'

const ThirdSection = () => {
  return (
    <div className='contact-video'>
        <video className='vid' width={500}  loop={true} muted={true} autoPlay={true} playsInline controls={false} >
            <source
            src='assets/water.mp4'
            type='video/mp4'
            >
            </source>
          </video>
        </div>
  )
}

export default ThirdSection