import React from 'react'
import './Footer.css';

function Footer() {
  return (
   <footer className="footer">
            <p className='copyright'>
                moviemagice using <a href="https://www.themoviedb.org/">themoviedb</a> for get movies
            </p>
            <p className='copyright'>
            this website is developed from <a href="https://alquser.vercel.app/">Alquser Abdullah</a>
            </p>
   </footer>
  )
}

export default Footer