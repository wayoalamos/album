import React, { Component } from 'react'
import { Text } from 'react-native'

import { Card, CardSection, Input } from './common'

class EmployeeList extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input>EmployeeLists</Input>
        </CardSection>
      </Card>
    )
  }
}

export default EmployeeList
