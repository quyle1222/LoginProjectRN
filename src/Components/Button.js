import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const ButtonLogin = ({ buttonContainer, buttonText, title, onPress }) => {
  return (
    <TouchableOpacity style={buttonContainer} onPress={onPress}>
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonLogin
