import React, { Component } from 'react'
import { Picker } from 'react-native'
import { connect } from 'react-redux'

import { employeeUpdate, employeeFormAdd } from '../actions/EmployeeActions'
import { Card, CardSection, Input, Button } from './common'

class employeeCreate extends Component {
  onNameChange(text) {
    this.props.employeeUpdate(text)
  }

  onButtonPress() {
    const { name, phone, shift } = this.props
    this.props.employeeFormAdd({ name, phone, shift })
  }

  render() {
    const { pickerTextStyle } = styles
    const days = [
      'Lunes',
      'Martes',
      'Miercoles',
      'Jueves',
      'Viernes',
      'Sabado',
      'Domingo',
    ]
    return (
      <Card>
        <CardSection>
          <Input
            label="Nombre"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'name', value })
            }
            placeholder="Juan"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Celular"
            value={this.props.phone}
            keyboardType="numeric"
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'phone', value })
            }
            placeholder="9 747 686 48"
            maxLength={12}
          />
        </CardSection>
        <CardSection>
          <Picker
            label="shift"
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: 'shift', value })
            }
            style={{ flex: 1 }}
          >
            {days.map(day => {
              return (
                <Picker.Item
                  key={day}
                  label={day}
                  value={day}
                  style={pickerTextStyle}
                />
              )
            })}
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Agregar Empleado
          </Button>
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

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeFormAdd }
)(employeeCreate)
