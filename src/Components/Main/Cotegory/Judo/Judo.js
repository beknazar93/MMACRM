import React, { useState } from 'react'
import kids from '../Mma/img/kids.png';
import vip from '../Mma/img/вип1.png';
import big from '../Mma/img/big.png';
import SimpleModal from '../SimpleModal/SimpleModal';
import quotes1 from '../Mma/img/quotes1.jpg'

function Judo() {

    const [modalMma, setmodalMma] = useState(false)


    return (
        <div className="boxing">

            <hr />

            <div className="mma__info">
                <div className="container">

                    <div className="mma__info-form">
                        <h1 className='mma__info-form-title'>Дзюдо -- что за вид спорта?</h1>
                        <div className="mma__info-form-text">
                            <p className="mma__info-form-word">
                                Дзюдо – вид единоборств, в котором наряду с бросками разрешены удушающие и болевые приемы на руки. Спортсмены выступают в кимоно (свободная куртка с поясом и штаны) на специальных матах – татами. Для достижения победы атакующий борец должен либо выполнить бросок соперника на татами на спину, либо провести удержание на 30 секунд, либо болевой или удушающий приемы. </p>
                        </div>
                    </div>

                    <div className="mma__info-mma">
                        <h2 className="mma__info-mma-title">Дзюдо – олимпийский вид спорта, в котором разрешены броски, болевые и удушающие приемы. Болевые приемы разрешено проводить только на руки противника. В дзюдо очень важна ловкость, а также принципиально использование силы соперника.</h2>
                    </div>

                    <div className="mma__info-quote">
                        <div className="mma__info-quote-texts">
                            <h1 className='mma__info-quote-title'>Интересные факты</h1>
                            <p className="mma__info-quote-word">1. Дзигоро Кано, придумавший дзюдо, до 15 лет был физически слабым мальчиком и не выделялся крепким телосложением. Естественно, сверстники нередко избивали Кано. Именно поэтому он решил заняться единоборствами. В 22 года Кано создал новый вид единоборств под названием дзюдо.</p>
                            <p className="mma__info-quote-word">2. Ясухиро Ямасита единственный дзюдоист в мире, который  ушел из спорта непобежденным. Он провел 217 официальных поединков и ни в одном из них не проиграл.</p>
                            <p className="mma__info-quote-word">3. Основатель дзюдо Дзигоро Кано был строгим и одновременно душевным учителем. Он приучал к жестокой дисциплине, но никто не платил за свое обучение в его школе, вместо денег ему приносили рис и чай. Кано сам шил спортивную одежду для тренировок своим ученикам.</p>
                            <p className="mma__info-quote-word">4. В японской полиции дзюдо изучается с 1886 года. Специально для полиции был разработан комплекс приёмов для задержания преступников — Рэнкоховадза.</p>
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
    )
}
export default Judo