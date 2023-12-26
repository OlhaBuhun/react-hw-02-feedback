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

export default FeedbackOptions

