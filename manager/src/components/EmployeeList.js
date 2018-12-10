import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input } from './common'

import { fetchEmployee } from '../actions/EmployeeActions'

class EmployeeList extends Component {
  componentWillMount() {
    const employeeList = ['salchichas', 'jamones']
    this.props.fetchEmployee(employeeList)
  }

  renderEmployeeList() {
    return (
      <Card>
        {this.props.employeeList.map(employee => {
          return (
            <CardSection key={employee}>
              <Text>{employee}</Text>
            </CardSection>
          )
        })}
      </Card>
    )
  }

  render() {
    return <Card>{this.renderEmployeeList()}</Card>
  }
}

const mapStateToProps = state => {
  const { employeeList } = state.employee
  return { employeeList }
}

export default connect(
  mapStateToProps,
  { fetchEmployee }
)(EmployeeList)
