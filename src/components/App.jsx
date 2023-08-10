import React, { useEffect, useState } from 'react';

import { Statistics } from './statistics/statistics';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Section } from './section/section';
import { Notification } from './notification/notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [netural, setNetural] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedbackPercentage, setPositiveFeedbackPercentage] =
    useState(0);

  const changeStats = option => {
    if (option === 'good') {
      setGood(value => value + 1);
    }
    if (option === 'netural') {
      setNetural(value => value + 1);
    }
    if (option === 'bad') {
      setBad(value => value + 1);
    }
  };
  useEffect(() => {
    setTotal(() => good + netural + bad);
    setPositiveFeedbackPercentage(() => (100 * good) / total);
  }, [good, netural, bad, total]);

  return (
    <div
      style={{
        paddingLeft: '100px',
      }}
    >
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'bad', 'netural']}
          onLeaveFeedback={changeStats}
        ></FeedbackOptions>
      </Section>
      <Section title={'Statistic'}>
        {total > 0 ? (
          <Statistics
            good={good}
            netural={netural}
            bad={bad}
            total={total}
            positive={positiveFeedbackPercentage}
          ></Statistics>
        ) : (
          <Notification message={'There is no feedback'}></Notification>
        )}
      </Section>
    </div>
  );
};
