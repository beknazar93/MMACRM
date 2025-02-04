import React, { useState } from 'react';
import SimpleModal from '../Cotegory/SimpleModal/SimpleModal';

function Home() {
  const [modalinfo, setmodalinfo] = useState(false)
  return (
    <div className='home'>
      <div className="container">

        <SimpleModal
          isOpen={modalinfo}
          onClose={() => setmodalinfo(false)}>
          <h2>Оставить заявку</h2>
          <div className="home__modalform">

            <div className='home__modalform-kub'>
              <p className='home__modalform-kub-text'>Введите имя</p>
              <input className='home__modalform-kub-pole' placeholder='Введите имя' />
            </div>

            <div className='home__modalform-kub'>
              <p className='home__modalform-kub-text'>Введите E-mail</p>
              <input className='home__modalform-kub-pole' placeholder='Введите E-mail' />
            </div>

            <div className='home__modalform-kub'>
              <p className='home__modalform-kub-text'>Введите номер телефон</p>
              <input className='home__modalform-kub-pole' placeholder='Введите номер телефон' />
            </div>

          </div>
          <button className='home__modalbtn'>Оправить заявку</button>
        </SimpleModal>

        <div className="home__form">
          <h1 className='home__form-title'>Профессиональная  школа <br /> Единоборств в Оше </h1>
          <p className='home__form-text'>Сделай сегодня то, что другие не хотят, завтра<br />будешь жить так другие не могут.</p>
          <button className='home__form-btn' onClick={() => setmodalinfo(true)}>Записаться сейчас</button>
        </div>
        
      </div>
    </div>
  )
}
export default Home
