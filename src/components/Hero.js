import React, { Component } from 'react';
import './Hero.css';
import Button from './Button';
import sunandpuddleslogo from '../img/sunandpuddleslogo.png';
import star from '../img/star.png'

class Hero extends Component {
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
          <Button buttonLabel='Download Today' buttonStyle='hero' />
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