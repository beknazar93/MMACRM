import React from 'react';
import adres from '../Footer/img/adres.png';
import tel from '../Footer/img/tel.png';
import email from '../Footer/img/email.png';



function Footer() {
    return (
        <section className='footer'>
            <div className="container">
                <h1 className='footer__title'>Наши контакты</h1>
                <p className='footer__text'>Адрес,Телефон и Электронная почта</p>

                <div className="footer__contact">

                    <div className="footer__contact-adres">
                        <img className='footer__contact-adres-photo' src={adres} />
                        <h1 className='footer__contact-adres-title'>Адрес</h1>
                        <a href="https://maps.app.goo.gl/Hkx3vfkwX56xYpey9" target="_blank" className='footer__contact-adres-text'>Гр: ОШ, Ул: Масалиева 44, -1 этаж</a>
                    </div>
                    <div className="footer__contact-tel">
                        <img className='footer__contact-tel-photo' src={tel} />
                        <h1 className='footer__contact-adres-title'>Телефон</h1>
                        <a href="https://wa.me/996999995776" target="_blank" className='footer__contact-tel-text'>Телефон: +996 999 99 57 76</a>
                    </div>
                    <div className="footer__contact-email">
                        <img className='footer__contact-email-photo' src={email} />
                        <h1 className='footer__contact-adres-title'>Эл Почта</h1>
                        <p className='footer__contact-email-text'>Почта: abytov247@gmail.com</p>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Footer
