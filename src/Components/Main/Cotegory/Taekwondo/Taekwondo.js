import React, { useState } from 'react'
import kids from '../Mma/img/kids.png';
import vip from '../Mma/img/вип1.png';
import big from '../Mma/img/big.png';
import SimpleModal from '../SimpleModal/SimpleModal';
import quotes1 from '../Mma/img/quotes1.jpg'

function Taekwondo() {

    const [modalMma, setmodalMma] = useState(false)


    return (
        <div className="boxing">
            <hr />


            <div className="mma__info">
                <div className="container">

                    <div className="mma__info-form">
                        <h1 className='mma__info-form-title'>Тхэквондо представляет собой</h1>
                        <div className="mma__info-form-text">
                            <p className="mma__info-form-word">
                                Тхэквондо – это единоборство, пришедшее к нам из Кореи. Существует несколько видов тхэквондо. Наиболее распространенным в мире есть спортивное тхэквондо ВТФ, чуть менее известным является его боевое направление. </p>
                        </div>
                    </div>

                    <div className="mma__info-mma">
                        <h2 className="mma__info-mma-title">Тхэквондо («путь кулака и ноги») – современное корейское боевое искусство, созданное на основе японского каратэ. Его основное отличие от каратэ – большое количество ударов ногами. </h2>
                    </div>

                    <div className="mma__info-quote">
                        <div className="mma__info-quote-texts">
                            <h1 className='mma__info-quote-title'>Интересные факты</h1>
                            <p className="mma__info-quote-word">1. Создателем современного тхэквондо является генерал Чхве Хон Хи. Он разработал боевое искусство в современном виде и дал ему название. А затем занялся его распространением как спортивной дисциплины.</p>
                            <p className="mma__info-quote-word">2. Известен случай, когда женщина спаслась от нападения акулы благодаря знанию тхэквондо.</p>
                            <p className="mma__info-quote-word">3. В тхэквондо существует система поясов. Их классификация может отличаться в зависимости от версии. Но чаще всего началом пути является белый пояс, а вершиной - чёрный девятого дана.</p>
                            <p className="mma__info-quote-word">4. Тхэквондо как вид спорта было зарегистрировано в 1955 году, а в 2000 году вошло в программу Олимпийских игр. Первыми чемпионами мира стали, конечно же, корейцы. Они остаются и абсолютными чемпионами по количеству завоеванных медалей. </p>
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
export default Taekwondo