import React, { Component } from "react";
import { FeedbackListUl, FeedbackListButton, FeedbackListStyle, FeedbackListTitle, FeedbackListLi } from "./FeedbackListStyled";


class FeedbackList extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = () =>
    this.setState((prevState) => ({ good: prevState.good +1 }))

  render() {
    return (
      <FeedbackListStyle>
        <FeedbackListTitle>Please leave feedback</FeedbackListTitle>
        <div>
          <FeedbackListButton type="button" onClick={this.handleClick}>Good</FeedbackListButton>
          <FeedbackListButton type="button">Neutral</FeedbackListButton>
          <FeedbackListButton type="button">Bad</FeedbackListButton>
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

