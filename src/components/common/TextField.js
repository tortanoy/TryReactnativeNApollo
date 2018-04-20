import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

export const TextFieldInput = styled.TextInput`
  border-color: #e3e3e3;
  height: 32px;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const TextField = ({ ...props }) => {
  return (
    <TextFieldInput {...props} underlineColorAndroid="transparent" />
  )
}

TextField.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
}