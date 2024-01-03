import PropTypes from 'prop-types';


const FeedbackOptions = ({options, onLeaveFeedback} ) => (
  <ul>
    {options.map((option, index) => (
      <li key={index}>
       <button 
        type="button" 
        name={option}
        onClick={ onLeaveFeedback }>{option.toUpperCase()}</button>
      </li>
    ))}
  </ul>
)

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions

