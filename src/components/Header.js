import React from 'react'
import microbe from './microbe.png';
import './Header.css';
import {
  Link
} from "react-router-dom";
export default function Header() {
  return (
    <div>
      <nav>
        <ul>
          <Link to='/'>
            Home
          </Link>
          <Link to='api'>
            API
          </Link>
          <Link to='/about'>
            About
          </Link>
        </ul>
      </nav>
      <h1 className="homePageTitle">Seoul Covid API <img alt="An emoticon of a virus" className="homePageTitleImg" src={microbe}></img></h1>

    </div>
  )
}
