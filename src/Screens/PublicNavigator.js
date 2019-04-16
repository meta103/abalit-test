import { createStackNavigator } from 'react-navigation'

import { LoginScreen } from './LoginScreen'

export const LOGIN_SCREEN = 'LOGIN_SCREEN'

export const PublicNavigator = createStackNavigator(
  {
    [LOGIN_SCREEN]: LoginScreen
  },
  {
    initialRouteName: LOGIN_SCREEN,
    headerMode: 'none',
    mode: 'modal',
  }
)
