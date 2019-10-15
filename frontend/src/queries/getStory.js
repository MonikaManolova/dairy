import gql from "graphql-tag";

export default gql`
query GetStory($_id: String!){
getStory(_id: $_id){
    title
    color
    description
    fontSize
    theme
  }
}
`;