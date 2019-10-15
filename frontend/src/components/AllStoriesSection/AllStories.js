import React, { useState } from 'react';
import gql from "graphql-tag";
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import query from '../../queries/getStories';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import LeftMenuBar from '../LeftMenuBar/LeftMenuBar'
import Empty from './Empty';
import Modal from '../Modal/Modal';
import styled from 'styled-components';

const StyledCol = styled(Card)`
 background: rgba(0,0,0,0.3); 
 border-right: 15px solid black;
`;

export default props => {
    const { loading, data } = useQuery(query);
    const [deleteStory] = useMutation(mutation);
    const [storyDescription, setStoryDescription] = useState('');
    const [storyTitle, setStoryTitle] = useState('');
    const [storyTheme, setStoryTheme] = useState('');
    const [storyFontSize, setStoryFontSize] = useState(0);
    const [storyColor, setStoryColor] = useState('');

    const [modalShow, setModalShow] = useState(false);

    const deleteHandler = (_id) => {
        deleteStory({
            variables: { _id },
            refetchQueries: [{ query }]
        });
    };

    const showStoryHandler = (title, description, theme, fontSize, color) => {
        setStoryDescription(description);
        setStoryTitle(title);
        setModalShow(true);
        setStoryTheme(theme);
        setStoryFontSize(fontSize);
        setStoryColor(color);
        console.log(fontSize);

        console.log(storyFontSize);

    }

    if (loading === false && data) {
        return <>
            <LeftMenuBar style={{ pointerEvents: "none" }}>
                <StyledCol md={8} as={Col}>
                    <Empty
                        isEmpty={data.getStories.length}
                        stories={data.getStories}
                        deleteClick={deleteHandler}
                        showStory={showStoryHandler} />
                </StyledCol>
            </LeftMenuBar>
            <Modal
                show={modalShow}
                title={storyTitle}
                story={storyDescription}
                theme={storyTheme}
                style={{ color: `${storyColor}` }}
                fontSize={{ fontSize: `${storyFontSize}px` }}
                onHide={() => setModalShow(false)} />
        </>
    }
    else {
        return <div>loading...</div>
    }
};

const mutation = gql`
mutation DeleteStory($_id: String!){
    deleteStory(_id: $_id)
}
`;