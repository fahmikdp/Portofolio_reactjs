import React from 'react'
import skillimg from './img/work3.jpg'

export default function Skill() {
    return (
        <div className='Skill'>
            {/* SKILLS */}
        <section class="skills section" id="skills">
            <h2 class="section-title" data-aos="fade-down">Skills</h2>

            <div class="skills__container bd-grid">          
                <div>
                    <h2 class="skills__subtitle" data-aos="fade-down">Profesional Skills</h2>
                    <p class="skills__text" data-aos="fade-down">Selama di SMK saya mempelajari HTML, CSS, Javascript, PHP, Java, C++, dan sedikit Database</p>
                    <div class="skills__data" data-aos="fade-down" data-aos-duration="1000">
                        <div class="skills__names">
                            <i class='bx bxl-html5 skills__icon'></i>
                            <span class="skills__name">HTML5</span>
                        </div>
                        <div class="skills__bar skills__html">

                        </div>
                        <div>
                            <span class="skills__percentage">85%</span>
                        </div>
                    </div>
                    <div class="skills__data" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
                        <div class="skills__names">
                            <i class='bx bxl-css3 skills__icon'></i>
                            <span class="skills__name">CSS3</span>
                        </div>
                        <div class="skills__bar skills__css">
                            
                        </div>
                        <div>
                            <span class="skills__percentage">75%</span>
                        </div>
                    </div>
                    <div class="skills__data" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
                        <div class="skills__names">
                            <i class='bx bxl-javascript skills__icon' ></i>
                            <span class="skills__name">JAVASCRIPT</span>
                        </div>
                        <div class="skills__bar skills__js">
                            
                        </div>
                        <div>
                            <span class="skills__percentage">60%</span>
                        </div>
                    </div>
                    <div class="skills__data" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
                        <div class="skills__names">
                            <i class='bx bxs-paint skills__icon'></i>
                            <span class="skills__name">UX/UI</span>
                        </div>
                        <div class="skills__bar skills__ux">
                            
                        </div>
                        <div>
                            <span class="skills__percentage">85%</span>
                        </div>
                    </div>
                </div>
                
                <div data-aos="fade-down">              
                    <img src={skillimg} alt="" class="skills__img" />
                </div>
            </div>
        </section>
        </div>
    )
}
