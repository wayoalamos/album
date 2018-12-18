import React, { Component } from 'react'
import { Text, ListView, View } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'

import { Card, CardSection, Input } from './common'
import ListItem from './ListItem'
import { fetchEmployees } from '../actions/EmployeeActions'

class EmployeeList extends Component {
  componentWillMount() {
    this.props.fetchEmployees()
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of nextProps

    this.createDataSource(nextProps)
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })
    this.dataSource = ds.cloneWithRows(employees)
  }

  renderRow(employee) {
    return <ListItem employee={employee} />
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employee, (val, uid) => {
    return { ...val, uid }
  })
  return { employees }
}

export default connect(
  mapStateToProps,
  { fetchEmployees }
)(EmployeeList)
