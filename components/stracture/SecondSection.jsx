import React from 'react'

const SecondSection = () => {
  return (
    
    <div className='second-section'>
      <div className='column'>
      <div className='second-cont'>
        <h1 className='second-title'>Abour</h1>
        <div className='topic-cont'>
        <h3 className='topic-title'><span className='topic-span'> 01</span> Stak</h3>
        <p className='topic-desc'>Next js </p>
        </div>
        <div className='topic-cont'>
        <h3 className='topic-title'><span className='topic-span'> 02</span> Stak</h3>
        <p className='topic-desc'>Next js </p>
        </div>
        <div className='topic-cont'>
        <h3 className='topic-title'><span className='topic-span'> 03</span> Stak</h3>
        <p className='topic-desc'>Next js !bfjshdkfsjhdkj </p>
        </div>
        </div>
        {/* <div className='contact-video'>
        <video  loop={true} muted={true} autoPlay={true} playsInline controls={false} >
            <source
            src='assets/water.mp4'
            type='video/mp4'
            >
            </source>
          </video>
        </div> */}
        <div className='contact'>
          <h4 className='contact-title'> Leave your Email</h4>
          <form className='form'>
          <input />
          <button>Submit</button>
          </form>
          <p className='contact-tel'>or contact me in telegram</p>


        </div>

    </div>
    </div>
  )
}

export default SecondSection