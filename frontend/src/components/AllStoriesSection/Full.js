import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CardColumns from 'react-bootstrap/CardColumns';
import styled from 'styled-components';
import { DeleteForever } from 'styled-icons/material/DeleteForever';
import { Edit } from 'styled-icons/boxicons-regular/Edit';

const StyledCardDeck = styled(CardColumns)`
background: none;
margin-top: 5%;
.card{
    background: none;
    border: none;
    cursor: pointer;
}
.card-img-top{
    width: 100%;
    height: 60px;
    object-fit: cover;
}
.card-body{
    padding: 0;
    color: white;
    background: rgb(17,17,17);
    height: 100%;
}
.card-title{
    margin-bottom: 0;
    padding: 0.5em 0;
    text-align: center;
    font-size: 17px;
    font-weight: 400;
}
.card-footer{
    padding: 0;
    text-align: center;
    background: #000;
    visibility: hidden;
    transition: 0.5s;
    opacity: 0;
    width: 50%;
float: right;
}
.right-side{
    border-bottom-left-radius: 35px;
}
.left-side{
    border-bottom-right-radius: 35px;
}
.card-footer .icon{
    font-size: 10px;
    padding: 0px 5px;
}
.card-footer:nth-child(1){
    border-bottom-left-radius: 35px;
}
.card:hover .card-footer{
    visibility: visible;
    transition: 0.5s;
    opacity: 1;
}
`;

export default props => {
    return (
        <StyledCardDeck>
            {props.stories.map((story, index) => {
                return (
                    <Card key={index} onClick={() => props.showStory(
                        story.title,
                        story.description,
                        story.theme,
                        story.fontSize,
                        story.color)}>
                        <Card.Img variant="top" src={story.theme} />
                        <Card.Body>
                            <Card.Title>{story.title}</Card.Title>
                        </Card.Body>
                        <Card.Footer className="right-side"
                            onClick={() => props.deleteClick(story._id)}>
                            <small className="text-muted">
                                <DeleteForever className="icon" />
                            </small>
                        </Card.Footer>
                        <Link to={`/write/${story._id}`}>
                            <Card.Footer className="left-side">
                                <small className="text-muted">
                                    <Edit className="icon" />
                                </small>
                            </Card.Footer>
                        </Link>
                    </Card>)
            })}
        </StyledCardDeck>
    )
};