import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput } from 'react-native'
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
          accessibilityLabel='buttonLogin'
          style={{ width: 100, height: 50, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{ color: 'white' }}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}