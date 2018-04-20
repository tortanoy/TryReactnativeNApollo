import React, { Component } from 'react'
import { View } from 'react-native'
import { 
  TextField,
  Button
} from './common'
import styled from 'styled-components/native'

export const Body = styled.View`
  flex: 1;
  background-color: gray;
  padding: 10px;
  margin-top: 80px;
`

class Login extends Component
{

  render()
  {
    return (
      <Body>
        <TextField placeholder='Username or email' />
        <TextField placeholder='Password' />
        <Button title="Click" />
      </Body>
    )
  }
}

export default Login
