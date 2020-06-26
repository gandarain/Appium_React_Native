import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Alert } from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          accessibilityLabel='buttonHome'
          style={{ width: 100, height: 50, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
          onPress={() => Alert.alert('Notification', 'Welcome home.')}>
          <Text style={{ color: 'white' }}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}