import React, { Component } from 'react';
import './Hero.css';
import Button from './Button';
import sunandpuddleslogo from '../img/sunandpuddleslogo.png';
import star from '../img/star.png';
import Modal from './Modal';

class Hero extends Component {
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
      <section className='heroSection'>
        {/* <div className='heroImage'></div> */}
        <div className='heroContent'>
          <h1 className='heroContentTitle'>
            Save up to 90% on your next purchase with <span className='magicalLineRed'>Coupon Clipper</span>. This is the best <span className='magicalLineRed'>money-saving</span> app online.
          </h1>
          <p className='heroContentCopy'>
            Know where the best deals are anywhere on the internet with Coupon Clipper. Get alerts for all your favorite products including groceries.
          </p>
          {/* <Button buttonLabel='Download Today' buttonStyle='hero' onClick={this.toggleModal}/> */}
          <button className='hero button' onClick={this.toggleModal}>Download Today</button>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>Coupon Clipper</Modal>
          <div className='starRating'>
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;