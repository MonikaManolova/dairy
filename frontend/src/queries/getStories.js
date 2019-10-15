import gql from "graphql-tag";

export default gql`
query getStories{
getStories{
    _id
    title
    color
    description
    fontSize
    theme
  }
}
`;