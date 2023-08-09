import React from 'react';
import css from './statistics.module.css';

const Statistics = ({ good, netural, bad, total, positive }) => {
  return (
    <>
      {/* <h2 className=""></h2> */}
      <ul className={css.list}>
        <li className={css.listItem}>Good: {good}</li>
        <li className={css.listItem}>Netural: {netural}</li>
        <li className={css.listItem}>Bad: {bad}</li>
        <li className={css.listItem}>Total: {total}</li>
        <li className={css.listItem}>Positive feedback: {positive}%</li>
      </ul>
    </>
  );
};

export { Statistics };
