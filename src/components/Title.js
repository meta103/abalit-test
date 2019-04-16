import React from 'react'
import { Text } from 'react-native-elements'

export const Title = ({ style, ...rest }) => {
  return (
    <Text
      h4
      style={[
        style,
        { color: 'white' },
      ]}
      {...rest}
    />
  )
}
