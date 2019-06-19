import React, { Component } from 'react';
import './Header.css';
import Button from './Button';
import logo from '../img/icon-small.png';
import Modal from './Modal';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <header>
        <nav>
          <div className='navLeft'>
            <a href=''>
              <img className='logo' src={logo} alt='Sun and Puddles' />
            </a>
            <a href=''>
              <h1>Coupon Clipper</h1>
            </a>
          </div>
          <div className='navRight'>
            <button className='small button' onClick={this.toggleModal}>Install</button>
            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}>Coupon Clipper</Modal>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
