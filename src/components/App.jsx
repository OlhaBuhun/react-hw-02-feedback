import { Component } from "react";
import { FeedbackListButton, FeedbackListLi, FeedbackListStyle, FeedbackListTitle, FeedbackListUl } from "./FeedbackList/FeedbackListStyled";
// import { FeedbackListUl, FeedbackListButton, FeedbackListStyle, FeedbackListTitle, FeedbackListLi } from "./FeedbackListStyled";
// import FeedbackList from "./FeedbackList/FeedbackList";

// export const App = () => {
//   return (
//     <
//       // style={{
//       //   height: '100vh',
//       //   display: 'flex',
//       //   justifyContent: 'center',
//       //   alignItems: 'center',
//       //   fontSize: 40,
//       //   color: '#010101'
//       // }}
//     >
//       <FeedbackList/>
//     </>
//   );
// };
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (e) =>
  {
    console.log(e.target.value);
    const total = e.target.value;
    this.setState((prevState) => ({[e.target.name]: prevState[e.target.name] +1} ))
    // return total
    console.log(total);
  }

  countTotalFeedback = () => {

    
  }

  countPositiveFeedbackPercentage = (e) => {

  }

  render(){
    return(
      <FeedbackListStyle>
      <FeedbackListTitle>Please leave feedback</FeedbackListTitle>
      <div>
        <FeedbackListButton type="button" name="good" onClick={this.handleClick}>Good</FeedbackListButton>
        <FeedbackListButton type="button" name="neutral" onClick={this.handleClick}>Neutral</FeedbackListButton>
        <FeedbackListButton type="button" name="bad" onClick={this.handleClick}>Bad</FeedbackListButton>
      </div>
      <FeedbackListTitle>Statistics</FeedbackListTitle>
      <FeedbackListUl>
        <FeedbackListLi>Good: {this.state.good}</FeedbackListLi>
        <FeedbackListLi>Neutral: {this.state.neutral}</FeedbackListLi>
        <FeedbackListLi>Bad: {this.state.bad}</FeedbackListLi>
        <FeedbackListLi>Total: {this.countTotalFeedback()}</FeedbackListLi>
      </FeedbackListUl>
    </FeedbackListStyle>

    )
  }
}

export default App;