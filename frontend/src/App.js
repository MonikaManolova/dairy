import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import NavButtons from './components/NavigationBtns/NavigationBtns';
import AllStoriesSection from './components//AllStoriesSection/AllStories';
import WriteStory from './components/WriteStorySection/WriteStory';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql"
});

function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter >
        <div className="App">
          <NavButtons />
          <Route exact path="/write" component={WriteStory} />
          <Route path={"/write/:id"} component={WriteStory} />
          <Route exact path="/all-stories" component={AllStoriesSection} />
        </div>
      </BrowserRouter>
    </ApolloProvider>

  );
};

export default App;
