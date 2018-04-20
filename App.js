/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import AppWithNavigation from './src/navigators/AppNavigator'
import gql from 'graphql-tag'

const httpLink = new HttpLink({ uri: 'https://graphql-pokemon.now.sh/' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

client
  .query({
    query: gql`
      {
        pokemon(name: "Bulbasaur") {
          maxHP
        }
      }
    `
  })
  .then(result => console.log(result))

//https://help.shopify.com/api/storefront-api/graphql-explorer/graphiql
//https://graphql-demo.now.sh/graphiql

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={{ flex: 1 }}>
          <AppWithNavigation />
        </View>
      </ApolloProvider>
    )
  }
}
