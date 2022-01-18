import React from 'react'
import profile from '../img/profile.jpeg'

export default function About() {
    return (
        <div className='About' data-aos="zoom-out">
            {/* ABOUT  */}
        <section class="about section " id="about">
            <h2 class="section-title">About</h2>

            <div class="about__container bd-grid">
                <div class="about__img">
                    <img  src={profile} alt="" />
                </div>
                
                <div>
                    <h2 class="about__subtitle">Saya Fahmi Kurnia Dwiputra</h2>
                    <p class="about__text">Bersekolah di SMK Negeri 1 Kota Bekasi, Jurusan Rekayasa Perangkat Lunak. Menyukai kegiatan tentang mendesain Website, dan sedang menjalani Praktek Kerja Lapangan di PT. Brilyan Trimatra Utama</p>           
                </div>                                   
            </div>
        </section>
        </div>
    )
}
