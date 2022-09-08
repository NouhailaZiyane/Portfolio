import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import "./Navbar.css"
export default function Navbar() {
    const [activatedLink, setActivatedLink]=useState('home')
    const [scrolled, setScrolled] = useState(false);

    const onUpdateActiveLink = (value) => {
        setActivatedLink(value);
      }
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  return (
    <div className='container'>
    <nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#home" onClick={() => onUpdateActiveLink('home')}>N Z</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#home" className={activatedLink === 'home' ? 'nav-link c' : 'nav-link d'} onClick={() => onUpdateActiveLink('home')}>Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#skills" className={activatedLink === 'skills' ? 'nav-link c' : 'nav-link d'} onClick={() => onUpdateActiveLink('skills')}>Skills</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#projects" className={activatedLink === 'projects' ? 'nav-link c' : 'nav-link d'} onClick={() => onUpdateActiveLink('projects')}>Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#pe" className={activatedLink === 'pe' ? 'nav-link c' : 'nav-link d'} onClick={() => onUpdateActiveLink('pe')}>Professional Exprience</a>
      </li>
      
    </ul>
    
  </div>
</nav></div>
  )
}
