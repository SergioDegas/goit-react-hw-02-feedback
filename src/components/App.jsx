import { Component } from 'react';

import { GlobalStyle } from './GlobalStyle';
import Section from './Feedback/Section/Section';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';
import Notification from './Feedback/Notification';




export  class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const option= e.target.name
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  totalNumberReviews = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  positiveFeedbackPercentage = () => {
    const totalFeedback = this.totalNumberReviews();
    const goodFeedback = this.state.good;
    const percentage = Math.round((goodFeedback / totalFeedback) * 100);
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalNumberReviews()
    const positiveFeedback = this.positiveFeedbackPercentage()
     const options = Object.keys(this.state);
  return (
    <>
      <Section title="Please leave feedback">
      
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
    
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </>
  );
  }
}


