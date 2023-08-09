import React, { Component } from 'react';

import { Statistics } from './statistics/statistics';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Section } from './section/section';
import { Notification } from './notification/notification';

export class App extends Component {
  state = {
    good: 0,
    netural: 0,
    bad: 0,
  };
  total = 0;
  positiveFeedbackPercentage = 0;

  changeStats = option => {
    // console.log(event.target.textContent);
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    console.log(this.state.good);
    console.log(this.state.netural + 'netural');

    this.total = this.state.good + this.state.netural + this.state.bad + 1;
    // console.log(this.total);
    return this.total;
  };

  countPositiveFeedbackPercentage = () => {
    return (100 * this.state.good) / this.countTotalFeedback();

    // setTimeout(
    //   () =>
    //     (this.total =
    //       this.state.good + this.state.netural + this.state.bad + 1),
    //   100
    // );
    // console.log(this.positiveFeedbackPercentage);
  };

  render() {
    return (
      <div
        style={{
          paddingLeft: '100px',
        }}
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.changeStats}
          ></FeedbackOptions>
        </Section>
        <Section title={'Statistic'}>
          {this.total > 0 ? (
            <Statistics
              good={this.state.good}
              netural={this.state.netural}
              bad={this.state.bad}
              total={this.total}
              positive={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message={'There is no feedback'}></Notification>
          )}
        </Section>
      </div>
    );
  }
}
