import React from 'react'

const SecondSection = () => {
  return (
    
    <div className='second-section'>
      <div className='column'>
      <div className='second-cont'>
        <h1 className='second-title'>Инфо</h1>
        <div className='topic-cont'>
        <h3 className='topic-title'><span className='topic-span'> 01</span> Стек</h3>
        <p className='topic-desc'>Фронт: HTML, CSS, SASS, NEXT js / React <br/> Бэк: Node js, Express <br/> Дизайн: Ваш готовый макет в Фигме, Фотошопе или идея(пример). В ином случае можно довериться моему вдохновению ¯\_(ツ)_/¯ </p>
        </div>
        <div className='topic-cont'>
        <h3 className='topic-title'><span className='topic-span'> 02</span> Процесс </h3>
        <p className='topic-desc'> По итогу вы получите сайт под ключ, готовый к SEO оптимизации с личным кабинетом и всеми необходимыми фичами. </p>
        </div>
        <div className='topic-cont'>
        <h3 className='topic-title'><span className='topic-span'> 03</span> Цены и сроки</h3>
        <p className='topic-desc'> В среднем сроки от 2 недель до 2х месяцев. За всем процессом можно будет наблюдать в процессе разработки. Цена начинается с 15к зависит от продукта и необходимости привлекать человека с аутсорса.</p>
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
          <h4 className='contact-title'> Емэйл для связи</h4>
          <form className='form'>
          <input />
          <button>Отправить</button>
          </form>
          <p className='contact-tel'>Или свяжитесь со мной в Телеграм</p>


        </div>

    </div>
    </div>
  )
}

export default SecondSection