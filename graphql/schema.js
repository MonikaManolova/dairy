const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Story{
    _id: ID!
    title: String!
    description: String!
    fontSize: String!
    color: String!
    theme: String!
}

input  StoryInput{
    title: String!
    description: String!
    fontSize: String!
    color: String!
    theme: String!
}

type RootQuery {
    getStories: [Story!]!
    getStory(_id: String!): Story!
}

type RootMutation {
    createStory(storyInput: StoryInput): Story
    deleteStory(_id: String!): String
    editStory(_id: String!, title: String, description: String, fontSize: String, color: String, theme: String): Story
}

schema {
    query: RootQuery
    mutation: RootMutation
}`);