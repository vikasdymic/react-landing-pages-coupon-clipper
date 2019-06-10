import React, { Component } from 'react';
import './Header.css';
import Button from './Button';
import logo from '../img/icon-small.png';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className='navLeft'>
            <a href='https://sunandpuddles.com'>
              <img className='logo' src={logo} alt='Sun and Puddles' />
            </a>
            <a href='https://thesulfurgroup.com'>
              <h1>Coupon Clipper</h1>
            </a>
          </div>
          <div className='navRight'>
            <Button buttonStyle='small' buttonLabel='Install' />
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
