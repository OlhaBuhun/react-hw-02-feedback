import styled from 'styled-components';

export const FeedbackListStyle = styled.div`
  display: block;
  margin: 40px;

`
export const FeedbackListTitle = styled.h2`
  font-size: 40px;
  color: green;
  text-shadow: 1px 1px 2px #000000;
`
export const FeedbackListButton = styled.button `
  display: inline-block;
  width: 80px;
  height: 40px;
  margin: 4px;
  border: 1px solid greenyellow;
  border-radius: 4cqb;
  cursor: pointer;

  transition: transform 250vs linear;

  &:hover {
    transform: scale(1,1);
  }
`
export const FeedbackListUl = styled.ul `
  margin-bottom: 20px;
  /* display: flex; */
  align-items: center;
  list-style: none;
`
export const FeedbackListLi = styled.li `
  padding: 10px;
  font-size: 20px;
`
