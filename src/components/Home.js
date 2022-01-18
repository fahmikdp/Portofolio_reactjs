import React from 'react'
import homepoto from '../img/homepoto.png'


export default function Home() {
    return (
        <div className='Home'>
    <main class="l-main"> 
      {/* HOME */}
    <section class="home bd-grid" id="home">
        <div class="home__data" data-aos="fade-right">
            <h1 class="home__title">Halo,<br />Saya <span class="home__title-color">Fahmi</span><br /> Front-End Developer</h1>

            <a href="Contact" class="button">Contact</a>
        </div>

        <div class="home__social">
            <a href="" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
            <a href="https://github.com/fahmikdp" class="home__social-icon"><i class='bx bxl-github' ></i></a>
        </div>

        <div class="home__img" data-aos="fade-left">
            
            <img src={homepoto} alt="" />
                    
        </div>
    </section>
    </main> 
        </div>
    )
}
