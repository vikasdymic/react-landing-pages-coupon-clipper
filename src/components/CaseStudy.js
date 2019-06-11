import React, { Component } from 'react';
import './CaseStudy.css';

class CaseStudy extends Component {
  render() {
    return (
      <section className='caseStudySection'>
        <h1 className='headingOne csHeading'>Coupon Clipper is <span className='magicalLineRed'>made by Apple</span></h1>
        <div className='caseStudies'>
          <div className='caseStudy'>
            <div className='caseStudyImage  caseOne' />
            <a
              className='caseStudyLink'
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLineRed'>5-star rating</span>
            </a>
          </div>
          <div className='caseStudy'>
            <div className='caseStudyImage  caseTwo' />
            <a
              className='caseStudyLink'
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLineRed'>real-time</span>
            </a>
          </div>{' '}
          <div className='caseStudy'>
            <div className='caseStudyImage  caseThree' />
            <a
              className='caseStudyLink'
              href=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='magicalLineRed'>tracking</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
export default CaseStudy;
