import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving end distrust instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrust may instantly was household applauded.'
  },
  {
    title: 'Become the tended active',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrust may instantly was household applauded.'
  },
  {
    title: 'Message or am nothing',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrust may instantly was household applauded.'
  },
  {
    title: 'Really bow law county',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrust may instantly was household applauded.'
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The future is not and you just need to realize it. Step into future today & make it happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features
