import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import gql from "graphql-tag";
import { useMutation, useQuery } from '@apollo/react-hooks';
import query from '../../queries/getStories';
import getStory from '../../queries/getStory';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Textarea from './Textarea';
import Input from './Input';
import Button from './Button';
import LeftMenuBar from '../LeftMenuBar/LeftMenuBar';
import styled from 'styled-components';
import image from '../../images/black.png';
import first from './themeImages/first.jpg';
import third from './themeImages/third.jpg';

const StyledCol = styled(Col)`
background-size: cover;
border-right: 15px solid black;
`;
const themes = [first, third, first, third, third];

const WriteStory = props => {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [fontSize, setFontSize] = useState(20);
  const [isChangeSIzeIsCLicked, setIsChangeSIzeIsCLicked] = useState(false);
  const [isThemeClick, setIsThemeCLick] = useState(true);
  const [areSaveChanges, setAreSaveChanges] = useState(false);
  const [colorHex, setColorHex] = useState('#fff');
  const [theme, setTheme] = useState(image);
  const [isStorySave, setIsStorySave] = useState(false);

  const { data: storyData, refetch } = useQuery(getStory, {
    variables: { _id: props.match.params.id },
    skip: !props.match.params.id
  });
  const [createStory] = useMutation(mutationCreate);
  const [editStory] = useMutation(mutationEdit);


  useEffect(() => {
    if (storyData) {
      setTitle(storyData.getStory.title);
      setTheme(storyData.getStory.theme)
      setStory(storyData.getStory.description);
      setFontSize(+storyData.getStory.fontSize);
      setColorHex(storyData.getStory.color);
    }
  }, storyData);


  const saveChangesHandler = () => {
    editStory({
      variables: {
        _id: props.match.params.id,
        title: title,
        description: story,
        color: colorHex,
        fontSize: fontSize.toString(),
        theme
      },
      refetchQueries: [{query}]
    }).then(() => refetch())
      .then(() => setAreSaveChanges(true));
  }

  const saveStoryHandler = () => {
    createStory({
      variables: {
        title,
        description: story,
        color: colorHex,
        theme,
        fontSize: fontSize.toString()
      },
      refetchQueries: [{ query }]
    }).then(() => setIsStorySave(true))
  }


  if (isStorySave) { return <Redirect to='/all-stories' /> }
  if (areSaveChanges) { return <Redirect to='/all-stories' /> }
  return (
    <LeftMenuBar
      clearClick={() => setStory('')}
      clickUp={() => setFontSize(prevState => prevState + 1)}
      clickDown={() => setFontSize(prevState => prevState - 1)}
      size={fontSize}
      changeSize={() => setIsChangeSIzeIsCLicked(!isChangeSIzeIsCLicked)}
      isChangeSIzeIsCLicked={isChangeSIzeIsCLicked}
      handleChange={(color) => (setColorHex(color.hex))}
      color={colorHex}
      chooseTheme={(index) => {
        setIsThemeCLick(false);
        setTheme(themes[index]);
      }}
      themes={themes}>
      <StyledCol
        md={8}
        style={{
          backgroundImage: `url(${
            (storyData &&
              isThemeClick &&
              storyData.getStory.theme) || theme})`
        }}>
        <Row>
          <Input
            value={title}
            onChange={(event) => setTitle(event.target.value)} />
        </Row>
        <Textarea
          style={{ fontSize, color: `${colorHex}` }}
          value={story}
          onChange={(event) => setStory(event.target.value)} />
        {props.match.params.id ?
          <Button text="SAVE CHANGES" save={saveChangesHandler} /> :
          <Button text="SAVE" save={saveStoryHandler} />}
      </StyledCol>
    </LeftMenuBar >
  );
};

const mutationCreate = gql`
mutation CreateStory($title: String!, $description: String!, $color: String!, $fontSize: String!, $theme: String!){
  createStory(storyInput: {
      title: $title, 
      description: $description, 
      color: $color,
      fontSize: $fontSize,
      theme: $theme}){
        _id
        title
    }
}
`;

const mutationEdit = gql`
mutation EditStory($_id: String!, $title: String, $description: String, $color: String, $fontSize: String, $theme: String){
  editStory(
    _id: $_id,
    title: $title, 
      description: $description, 
      color: $color,
      fontSize: $fontSize,
      theme: $theme
  ){
    title
    description
    color
    fontSize
    theme
  }
}
`;

export default WriteStory;