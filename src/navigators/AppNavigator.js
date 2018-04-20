import React from 'react'
import { 
  StackNavigator, 
  TabNavigator 
} from 'react-navigation'
import Login from '../components/Login'
import PokemonList from '../components/PokemonList'
import DetailScreen from '../components/Detail'

const LoginScreen = StackNavigator(
  {
    Login: { 
      screen: Login,
      navigationOptions: {
        header: null
      }
    }
  }
)

const PokemonScreen = StackNavigator(
  {
    Pokemon: {
      screen: PokemonList,
    },
    Detail: {
      screen: DetailScreen
    }
  }
)

const RootStackNavigator = props => {
  console.log(props.loggedin)
  return StackNavigator(
    // {
    //   Login: {
    //     path: '/login',
    //     screen: LoginScreen
    //   }
    // }, 
    {
      Pokemon: {
        path: '/pokemon',
        screen: PokemonScreen
      }
    },
    {
      headerMode: 'none',
      initialRouteName: props.loggedin 
      ? 'Pokemon' 
      : 'Login'
    }
  )
}

const AppNavigation = props => {
  let loggedin = true
  const Root = RootStackNavigator({ loggedin })
  return <Root />
}

export default AppNavigation