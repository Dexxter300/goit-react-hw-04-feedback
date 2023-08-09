import css from './feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {/* <h1>Please leave feedback</h1> */}
      {options.map((option, index) => (
        <button
          key={index}
          className={css.button}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};
