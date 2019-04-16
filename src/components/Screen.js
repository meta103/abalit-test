import React from 'react'
import { View, SafeAreaView } from 'react-native';

export const Screen = ({ style = {}, children, ...rest }) =>
  <React.Fragment>
    <SafeAreaView style={{ flex: 1, backgroundColor: '#52BBD2' }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {children}
      </View>
    </SafeAreaView>
  </React.Fragment>

