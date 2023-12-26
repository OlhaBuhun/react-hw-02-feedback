import { Component } from "react";
// import { FeedbackListButton, FeedbackListLi, FeedbackListStyle, FeedbackListTitle, FeedbackListUl } from "./FeedbackList/FeedbackListStyled";
// import FeedbackList from "./FeedbackList/FeedbackList";
// import { FeedbackListUl, FeedbackListButton, FeedbackListStyle, FeedbackListTitle, FeedbackListLi } from "./FeedbackListStyled";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statstics from "./Statistics/Statistics";

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
  { console.log(e.currentTarget
    );
    const option = e.target.name
    this.setState((prevState) => ({[option]: prevState[option] +1} ))
    console.log(option);
    // const options = [[option]: state[option]];
    return option
  }

  countTotalFeedback = () => {

    
  }

  countPositiveFeedbackPercentage = (e) => {

  }

  render(){
    return(
      <div>
          <h2>Please leave feedback</h2>
        
          < FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleClick} />
          <h2 >Statistics</h2>
          <Statstics options={['good', 'neutral', 'bad']} data={this.state.option}/>
    
      </div>

    )
  }
}

export default App;