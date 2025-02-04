import React from 'react';
import they from '../Programs/img/общие.png';
import kids from '../Programs/img/kids.png';
import vip from '../Programs/img/вип1.png';
import big from '../Programs/img/big.png';

function Programs() {
  return (
    <div className='programs'>
      <div className="container">

        <h1 className='programs__title'>Профессиональная школа ММА</h1>
        <p className='programs__text'>Наши программы обучения для любых возрастов</p>

        <div className="programs__kids">

          <div className="programs__kids-form">

            <div className="programs__kids-form-phots">
              <img className='programs__kids-form-photo' src={kids} />
            </div>

            <div className="programs__kids-form-word">
              <h1 className='programs__kids-form-title'>ДЕТСКАЯ ГРУППА</h1>
              <p className='programs__kids-form-text'>Всестороннее развитие ребенка. Любой уровень подготовки. Набор в течение всего года. Пробное занятие бесплатно.</p>
            </div>

          </div>

          <div className="programs__kids-big">

            <div className="programs__kids-big-phots">
              <img className='programs__kids-big-photo' src={big} />
            </div>

            <div className="programs__kids-big-word">
              <h1 className='programs__kids-form-title'>ВЗРОСЛАЯ ГРУППА</h1>
              <p className='programs__kids-big-text'>Запись в общие группы мма для взрослых. Любой уровень подготовки. Набор в течение всего года. Пробное занятие бесплатно.</p>
            </div>

          </div>

        </div>

        <div className="programs__class">

          <div className="programs__class-vip">

            <div className="programs__class-vip-form">
              <img className='programs__class-vip-photo' src={vip} />
            </div>

            <div className="programs__class-vip-texts">
              <h1 className='programs__class-vip-title'>VIP ЗАНЯТИЕ</h1>
              <p className='programs__class-vip-text'>Всестороннее развитие ребенка. Любой уровень подготовки. Набор в течение всего года. Пробное занятие бесплатно.</p>
            </div>
            
          </div>

          <div className="programs__class-they">

            <div className="programs__class-vip-form">
              <img className='programs__class-they-photo' src={they} />
            </div>

            <div className="programs__class-they-theys">
              <h1 className='programs__class-vip-title'>ОБЩИЕ ЗАНЯТИЕ</h1>
              <p className='programs__class-they-text'>Запись в общие группы мма для взрослых. Любой уровень подготовки. Набор в течение всего года. Пробное занятие бесплатно.</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Programs
