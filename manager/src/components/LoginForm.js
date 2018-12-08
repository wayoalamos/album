import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, CardSection, Input, Button } from './common'
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
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Ingresar</Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password } = auth
  return { email, password }
}

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm)
