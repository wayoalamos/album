import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

import { Card, CardSection, Input, Button, Spinner } from './common'
import { emailChanged, passwordChanged, loginUser } from '../actions'

class LoginForm extends Component {
  onButtonPress() {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Ingresar</Button>
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Usuario:"
            placeholder="ejemplo@gmail.com"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Contraseña: "
            placeholder="constraseña"
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        <CardSection>{this.renderButton()}</CardSection>
        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth
  return { email, password, error, loading }
}

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm)
