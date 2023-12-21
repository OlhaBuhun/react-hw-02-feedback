import React, { Component } from "react";
import { FeedbackListUl, FeedbackListButton, FeedbackListStyle, FeedbackListTitle, FeedbackListLi } from "./FeedbackListStyled";


class FeedbackList extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (e) =>
    {
      console.log(e.target.name);
      this.setState((prevState) => ({[e.target.name]: prevState[e.target.name] +1} ))
    }

  render() {
    return (
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
        </FeedbackListUl>
      </FeedbackListStyle>
    )
  }

};

export default FeedbackList

