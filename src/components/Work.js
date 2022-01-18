import React from 'react'
// import jobsheetlandingpage from '../img/jobsheetlandingpage.png'
import jobsheetcrud from '../img/jobsheetcrud.png'

export default function Work() {
    return (
        <div>
            {/* WORK */}
        <section class="work section" id="work" data-aos="fade-down">
            <h2 class="section-title">Work</h2>

            <div class="work__container bd-grid">
                <a href="" class="work__img">
                    <img src={jobsheetcrud} alt="" />
                </a>
                <a href="" class="work__img">
                    {/* <img src={} alt="" /> */}
                </a>
                <a href="" class="work__img">
                    <img src="assets/img/work3.jpg" alt="" />
                </a>
                <a href="" class="work__img">
                    <img src="assets/img/work4.jpg" alt="" />
                </a>
                <a href="" class="work__img">
                    <img src="assets/img/work5.jpg" alt="" />
                </a>
                <a href="" class="work__img">
                    <img src="assets/img/work6.jpg" alt="" />
                </a>
            </div>
        </section>
        </div>
    )
}
