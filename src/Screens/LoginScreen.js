import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { Constants } from 'expo'
import { Button } from 'react-native-elements'
import { Title, Screen, FormInput } from '../components'
import { HOME_SCREEN } from '../Screens/Home'

export class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  login = () => {
    this.props.navigation.navigate(HOME_SCREEN)
  }

  handleFormChange = ({ key, value }) => this.setState({ [key]: value })

  render() {
    return (
      <Screen style={styles.container}>
        <LoginHeader>
          <Title>Pet sharing</Title>
        </LoginHeader>
        <View style={styles.content}>
          <FormInput
            label="Email"
            value={this.state.email}
            onChangeText={value => this.handleFormChange({ key: 'email', value })}
          />
          <FormInput
            label="Contraseña"
            value={this.state.password}
            secureTextEntry
            onChangeText={value =>
              this.handleFormChange({ key: 'password', value })}
          />
          <Button
            onPress={this.login}
            style={styles.submitButton}
            backgroundColor='#52BBD2'
            title="Login"
          />
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate({ routeName: HOME_SCREEN })}
          >
            <Text>
              No tienes cuenta? Registrate aqui.
            </Text>
          </TouchableOpacity>
        </View>
      </Screen>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 16
  },
  header: {
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    height: 140,
    backgroundColor: '#52BBD2',
  },
  submitButton: {
    backgroundColor: '#52BBD2',
    marginVertical: 32,
    marginHorizontal: 8
  }
})
