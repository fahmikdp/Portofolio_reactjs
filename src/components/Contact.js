import React from 'react'

export default function Contact() {
    return (
        <div className='Contact' data-aos="zoom-out">
            {/* CONTACT */}
        <section class="contact section" id="contact">
            <h2 class="section-title">Contact</h2>

            <div class="contact__container bd-grid">
                <form action="" class="contact__form">
                    <input type="text" placeholder="Name" class="contact__input" />
                    <input type="mail" placeholder="Email" class="contact__input" />
                    <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea>
                    <input type="button" value="Kirim!" class="contact__button button" />
                </form>
            </div>
        </section>

    {/* FOOTER */}
    <footer class="footer">
        <p class="footer__title">Terimakasih telah mengunjungi website ini :)</p>
        <div class="footer__social">
            <a href="#" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
            <a href="#" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
            <a href="#" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
        </div>
        <p class="footer__copy">&copy; 2022. <b>Fahmi Kurnia</b> All Rights Reserved.</p>
    </footer>
        </div>
    )
}
