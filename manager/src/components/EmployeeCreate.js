import React, { Component } from 'react'
import { Text, Picker } from 'react-native'
import { connect } from 'react-redux'

import { employeeUpdate } from '../actions/EmployeeActions'
import { Card, CardSection, Input, Button } from './common'

class employeeCreate extends Component {
  onNameChange(text) {
    this.props.employeeUpdate(text)
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Nombre"
            value={this.props.newEmployeeName}
            onChangeText={this.onNameChange.bind(this)}
            placeholder="Juan"
          />
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
}

const mapStateToProps = ({ employee }) => {
  const { newEmployeeName } = employee
  return { newEmployeeName }
}

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(employeeCreate)
