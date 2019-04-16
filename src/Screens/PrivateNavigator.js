import { createStackNavigator } from 'react-navigation'

import { HomeScreen } from './Home'

export const HOME_SCREEN = 'HOME_SCREEN'

export const PrivateNavigator = createStackNavigator(
  {
    [HOME_SCREEN]: HomeScreen
  },
  {
    initialRouteName: HOME_SCREEN,
    headerMode: 'none',
    mode: 'modal',
  }
)
