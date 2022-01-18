import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className='Nav'>
            {/* HEADER */}
    <header class="l-header">
      <nav class="nav bd-grid">
        <div>
            <a href="#" class="nav__logo">Portfolio</a>
        </div>

        <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">

            <Link to="/Portfolio_reactjs/">
                <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
            </Link>

            <Link to="/Portfolio_reactjs/about">
                <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
            </Link>

            <Link to="/Portfolio_reactjs/skill">
                <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
            </Link>

            <Link to="/Portfolio_reactjs/work">
                <li class="nav__item"><a href="#work" class="nav__link">Work</a></li>
            </Link>

            <Link to="/Portfolio_reactjs/contact">
                <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
            </Link>
            </ul>
        </div>

        <div class="nav__toggle" id="nav-toggle">
            <i class='bx bx-menu'></i>
        </div>
      </nav>
    </header>
        </div>
    )
}

