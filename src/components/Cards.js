import React, { Component } from 'react';
import './Cards.css';
import Card from './Card';
import iconRocket from '../img/icon_rocket.png';
import iconTruck from '../img/icon_truck.png';
import iconShare from '../img/icon_share.png';
import iconLike from '../img/icon_like.png';

class Cards extends Component {
  render() {
    return (
      <section className='cardsSection'>
        <h1 className='headingOne'><span className='magicalLineRed'>Instant Savings</span> 100% of the Time</h1>
        <div className='cards'>
          <div className='cardWrapper'>
            <Card
              cardIcon={iconTruck}
              cardTitle='Real-Time Updates'
              cardText='Get alerted the moment your favorite item goes on sale. Coupon Clipper monitors big sites like Amazon, Ebay, and Walmart to find you the best deals.'
            />
          </div>
          <div className='cardWrapper'>
            <Card
              cardIcon={iconRocket}
              cardTitle='Instant Phone Alerts'
              cardText='Coupon Clipper sends results directly to your smartphone via its 5-star rated companion app. Available on Android, iOS, Windows, and Blackberry devices.'
            />
          </div>
          <div className='cardWrapper'>
            <Card
              cardIcon={iconLike}
              cardTitle='Always Learning'
              cardText='Coupon Clipper is driven by machine learning and learns from your purchase history to make better suggestions.'
            />
          </div>
          <div className='cardWrapper'>
            <Card
              cardIcon={iconShare}
              cardTitle='Follow-Up Phone Calls'
              cardText='Coupon Clipper automatically shares coupons from other people in your surrounding area. Powered by Google.'
            />
          </div>
        </div>
      </section>
    );
  }
}
export default Cards;
