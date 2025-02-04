import React, { useState } from 'react'
import kids from '../Mma/img/kids.png';
import vip from '../Mma/img/вип1.png';
import big from '../Mma/img/big.png';
import SimpleModal from '../SimpleModal/SimpleModal';
import quotes1 from '../Mma/img/quotes1.jpg'

function Boxing() {

    const [modalMma, setmodalMma] = useState(false)


  return (
    <div className="boxing">
      <div className="container">

        <div className="mma__info">
          <div className="container">

            <div className="mma__info-form">
              <h1 className='mma__info-form-title'>Бокс представляет собой</h1>
              <div className="mma__info-form-text">
                <p className="mma__info-form-word">
                  Бокс как вид спорта представляет из себя спортивное единоборство. Поединок двух соперников проводится на ринге. Квадратный ринг со стороной 6,1 м окружен канатами с 4-х сторон. Длительность боя зависит от количества раундов, обычно продолжительность составляет от 3-х до 12 раундов.  </p>
              </div>
            </div>

            <div className="mma__info-mma">
              <h2 className="mma__info-mma-title">Бокс – это один из наиболее сильных и мужественных видов спорта, признан не только как эффективнейшее средство в разностороннем физическом развитии.</h2>
            </div>

            <div className="mma__info-quote">
              <div className="mma__info-quote-texts">
                <h1 className='mma__info-quote-title'>Интересные факты</h1>
                <p className="mma__info-quote-word">1. Выиграл 44 боя подряд нокаутом Ламар Кларк, что является абсолютным рекордом на сегодняшний день</p>
                <p className="mma__info-quote-word">2. Самым дорогим бой Майка Тайсона и Леннокса Льюиса, прошедший в 2002 году. За победу Тайсону заплатили 35 000 000 $.</p>
                <p className="mma__info-quote-word">3. 25 – именно столько раз подряд Джо Луис получал статус чемпиона, что является абсолютным рекордом.</p>
                <p className="mma__info-quote-word">4. Самым непродолжительным считается бой между Пэтом Браунсоном и Майклом Коллинзом, который завершился  за 4 секунды.</p>
              </div>
              <img src={quotes1} className='mma__info-quote-photo' />
            </div>



          </div>
        </div>

        <div className='price'>
                <div className="container">

                    <h1 className='price__title'>Стоимость обучения</h1>
                    <p className='price__text'>Ниже представлена информация о ценах:</p>

                    <div className="price__group">

                        <div className="price__big">

                            <img className='price__big-photo' src={kids} />

                            <div className="price__big-form">
                                <h1 className='price__big-form-title'>Детская группа</h1>

                                <table className='price__big-table'>

                                    <tr className='price__big-table-tr'>
                                        <td>Дни:</td>
                                        <td>
                                            <div action="" className='price__form'>
                                                <select className='price__form-body'>
                                                    <option className='price__form-body-choose'>Выберите Дни</option>
                                                    <option className='price__form-body-choose'>ВТ,ЧТ,СБ</option>
                                                    <option className='price__form-body-choose'>ПН,СР,ПТ</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className='price__big-table-tr'>
                                        <td>Время:</td>
                                        <td>
                                            <div className='price__form'>
                                                <select className='price__form-body'>
                                                    <option >Выберите Время</option>
                                                    <option >17:00-18:30</option>
                                                    <option >19:00-20:30</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className='price__big-table-tr'>
                                        <td>Цена:</td>
                                        <td>
                                            <div className='price__form'>
                                                <select className='price__form-body'>
                                                    <option >Выберите Цену</option>
                                                    <option >1500c</option>
                                                </select>
                                            </div>
                                        </td>

                                    </tr>

                                </table>

                                <button className='price__big-form-btn' onClick={() => setmodalMma(true)}>Записаться</button>

                            </div>

                        </div>

                        <div className="price__big">

                            <img className='price__big-photo' src={big} />

                            <div className="price__big-form">
                                <h1 className='price__big-form-title'>Взрослая группа</h1>

                                <table className='price__big-table'>
                                    <tr className='price__big-table-tr'>
                                        <td>Дни:</td>
                                        <td>
                                            <div action="" className='price__form'>
                                                <select className='price__form-body'>
                                                    <option className='price__form-body-choose'>Выберите Дни</option>
                                                    <option className='price__form-body-choose'>Через День</option>
                                                    <option className='price__form-body-choose'>Каждый День</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className='price__big-table-tr'>
                                        <td>Время:</td>
                                        <td>
                                            <div className='price__form'>
                                                <select className='price__form-body'>
                                                    <option >Выберите Время</option>
                                                    <option >18:30 до 20:30</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className='price__big-table-tr'>
                                        <td>Цена:</td>
                                        <td>
                                            <div className='price__form'>
                                                <select className='price__form-body'>
                                                    <option >Выберите Цену</option>
                                                    <option >2500c</option>
                                                    <option >1800c</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                </table>

                                <button className='price__big-form-btn' onClick={() => setmodalMma(true)}>Записаться</button>
                            </div>
                        </div>

                        <div className="price__big">
                            <img className='price__big-photo' src={vip} />

                            <div className="price__big-form">
                                <h1 className='price__big-form-title'>VIP тренировки</h1>

                                <table className='price__big-table'>
                                    <tr className='price__big-table-tr'>
                                        <td>Дни:</td>
                                        <td>
                                            <div action="" className='price__form'>
                                                <select className='price__form-body'>
                                                    <option className='price__form-body-choose'>Выберите Дни</option>
                                                    <option className='price__form-body-choose'>Через День</option>
                                                    <option className='price__form-body-choose'>Каждый День</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='price__big-table-tr'>
                                        <td>Время:</td>
                                        <td>
                                            <div className='price__form'>
                                                <select className='price__form-body'>
                                                    <option >Выберите Время</option>
                                                    <option >?</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='price__big-table-tr'>
                                        <td>Цена:</td>
                                        <td>
                                            <div className='price__form'>
                                                <select className='price__form-body'>
                                                    <option >Выберите Цену</option>
                                                    <option >5000c</option>
                                                </select>
                                            </div>
                                        </td>

                                    </tr>
                                </table>

                                <button className='price__big-form-btn' onClick={() => setmodalMma(true)}>Записаться</button>
                            </div>

                        </div>

                    </div>

                    <SimpleModal
                        isOpen={modalMma}
                        onClose={() => setmodalMma(false)}>
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

                </div>
            </div>

      </div>

    </div>
  )
}
export default Boxing