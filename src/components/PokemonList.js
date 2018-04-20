import React, { Component } from 'react'
import { 
  FlatList 
} from 'react-native'
import styled from 'styled-components/native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Body = styled.View`
  flex: 1;
  background-color: #fff;
`

const Row = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  height: 78px;
  background-color: #fff;
  align-items: center;
  border: 1px solid rgba(76, 79, 115, .15);
  padding: 21px;
`

const CoverImage = styled.Image`
  width: 35px;
  height: 35px;
`

const ContentBox = styled.View`
  flex: 1;
  flex-direction: row;
`

const Name = styled.Text`
  background-color: transparent;
  color: #5f6484;
  padding-left: 27px;
  height: 22px;
  font-size: 16px;
`

const Classification = Name.extend`
  font-size: 12px;
`

const DescriptionBox = ContentBox.extend`
  flex-grow: 1;
  flex-direction: column;
`
const TypeBox = ContentBox.extend`
  flex-grow: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  /* background-color: green; */
`



const TypeLabel = styled.Text`
  background-color: transparent;
  color: #5f6484;
  font-size: 12px;
  /* border: 1px solid blue; */
  justify-content: center;
`

class Pokemon extends Component
{

  goToDetail(id) 
  {
    console.log(`polemon id ${id}`)
    this.props.navigation.navigate('Detail', { itemId: id })
  }

  render()
  {
    console.log(this.props.data)
    return (
      <Body>
        <FlatList
          data={this.props.data.pokemons}
          renderItem={({item}) => <Row key={item.id} onPress={() => this.goToDetail(item.id)}>
            <CoverImage source={{uri: item.image}} />
            <ContentBox>
              <DescriptionBox>
                <Name>{item.name}</Name>
                <Classification>{item.classification}</Classification>
              </DescriptionBox>
              <TypeBox>
              {
                item.types.map((type, index, arr) => 
                  {
                    if (arr.length > 1 && index === 0) 
                      return <TypeLabel key={index}>{type} / </TypeLabel>
                    else 
                      return <TypeLabel key={index}>{type}</TypeLabel>
                  }
                )
              }
              </TypeBox>
            </ContentBox>
          </Row>}
        />
      </Body>
    )
  }
}

const PokemonsQuery = gql`
  {
    pokemons(first: 10) {
      id
      name
      image
      classification
      types
    }
  }
`

export default graphql(PokemonsQuery)(Pokemon)

