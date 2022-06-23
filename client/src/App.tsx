import React from 'react';
import { 
          ApolloClient, 
          InMemoryCache, 
          ApolloProvider
        } from '@apollo/client';
import { CREATE_USER } from './graphql/Mutations';

import './App.css';
import CreateUser from './components/CreateUser';

function App() {
  

  const client = new ApolloClient({
    uri:'http://localhost:3002/graphql',
    cache : new InMemoryCache()
  })
  return (
    <>
    <ApolloProvider client={client}>
      <CreateUser></CreateUser>
    </ApolloProvider>
   </>   
  );
}

export default App;
