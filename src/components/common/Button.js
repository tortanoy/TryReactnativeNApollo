import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const ButtonBlock = styled.TouchableOpacity`
  margin-bottom: 20px;
  border-color: #e3e3e3;
  border-width: 1px;
  border-radius: 16px;
  height: 32px;
  padding-top: 6px;
  padding-right: 12px;
`;

const ButtonTitle = styled.Text`
  color: #4A4A4A;
  text-align: center;
  font-weight: normal;
  font-size: 13px; 
`

export const Button = (props) => {
  return (
    <ButtonBlock onPress={props.handleOnPress}>
      <ButtonTitle>{props.title}</ButtonTitle>
    </ButtonBlock>
  )
}

Button.propTypes = {
  handleOnPress: PropTypes.func,
  title: PropTypes.string
}