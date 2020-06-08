import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, Alert } from 'react-native'

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
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '50%', marginBottom: 10 }}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          placeholder={'Email'}
          accessible={true}
          accessibilityLabel={'fieldEmail'}
        />
        <TouchableOpacity
          accessibilityLabel='alertButton'
          style={{ width: 100, height: 50, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
          onPress={() => Alert.alert('Message', `Your email is ${this.state.email}`)}>
          <Text style={{ color: 'white' }}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}