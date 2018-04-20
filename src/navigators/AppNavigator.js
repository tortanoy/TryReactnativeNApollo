import React from 'react'
import { 
  StackNavigator, 
  TabNavigator 
} from 'react-navigation'
import Login from '../components/Login'
import ProductsList from '../components/Products'
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

const ProductsScreen = StackNavigator(
  {
    Products: {
      screen: ProductsList,
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
      Products: {
        path: '/products',
        screen: ProductsScreen
      }
    },
    {
      headerMode: 'none',
      initialRouteName: props.loggedin 
      ? 'Products' 
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