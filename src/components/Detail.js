import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { get, isUndefined } from 'lodash'

const screenWidth = Dimensions.get('window').width

const Body = styled.ScrollView`
  flex: 1;
  background-color: gainsboro;
`

const Content = styled.View`
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`

const Header = styled.View`
  height: 38px;
  flex-direction: row;
`

const CP = styled.Text`
  height: 21px;
  color: #fff;
  font-size: 18px;
  align-self: flex-end;
`

const CPLabel = styled.Text`
  height: 38px;
  color: #fff;
  font-size: 32px;
  line-height: 48;
`

const Name = styled.Text`
  height: 38px;
  font-size: 32px;
  color: #c8d0d1;
`

const Box = styled.View`
  flex: 2;
`

const Label = styled.Text`
  /* flex: 0 0 auto; */
  height: 22px;
  font-size: 16px;
  color: #c8d0d1;
  background-color: transparent;
`

const Cover = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 50px;
`

const Title = styled.Text`
  height: 38px;
  font-size: 32px;
  color: #c8d0d1;
  background-color: transparent;
  text-align: center;
`

const Backdrop = styled.View`
  width: 95%;
  top: -30;
  z-index: -2;
  /* position: absolute;  */
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  border: 1px solid lightgray;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SectionTwo = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`

const Separator = styled.View`
  width: 50%;
  border-width: 3px;
  border-radius: 1.5px;
  border-color: pink;
  margin-top: 5px;
  margin-bottom: 5px;
`

const TypesBox = styled.View`
  flex: 2;
  flex-direction: row;
  background-color: white;
`

const TextLabel = styled.Text`
  color: red;
  height: 38px;
  font-size: 18px;
  padding: 8px;
`

const Attacks = styled.View`
  flex-direction: column;
  background-color: blue;
`

const Column = styled.View`
  flex-direction: column;
  align-items: center;
`

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`

const HeaderColumn = Column.extend`
  z-index: -1;

`

const TransferSection = Column.extend`
  width: 100%;
  margin: 20px 0 20px 0;
`

const ButtonBox = styled.TouchableOpacity`
  width: 50%;
  height: 45px;
  align-items: center;  
  justify-content: center;
  background-color: #47D0A4;  
  border-radius: 22.5px;
`

const ButtonTitle = styled.Text`
  font-size: 18px;
  color: #fff;
`

const TypesLabel = styled.Text`
  width: 40%;
  height: 22px;
  color: #a3b2b5;
  font-size: 16px;
  text-align: center;
  background-color: gold;
`

const Label2 = styled.Text`
  height: 22px;
  color: #a3b2b5;
  font-size: 16px;
  text-align: center;
  background-color: gold;
`

const SectionTwoBox = styled.View`
  width: 33.33%;
  flex-direction: column;
  align-items: center;
`

const Unit = styled.Text`
  height: 22px;
  color: #a3b2b5;
  font-size: 16px;
  text-align: center;
`

const LabelUnit = styled.Text`
  height: 14px;
  color: #a3b2b5;
  font-size: 12px;
  text-align: center;
  
`

const HR = styled.View`
  width: 100%;
  border-width: 0.5px;
  border-color: #a3b2b5;
  margin: 10px 0px 10px 0px;
`

const Section = Row.extend`
  margin-top: 10px;
`

const SectionThreeBox = styled.View`
  width: 50%;
  flex-direction: column;
  align-items: center;
`

const PowerNEvolve = Box.extend`
  height: 45px;
  flex-direction: row;
  align-items: center;
  background-color: #e8f0e1;
  border-top-left-radius: 22.5px;
  border-bottom-left-radius: 22.5px;
`

const PowerNEvolveValue = Box.extend`
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: #e8f0e1;
`

const Icon = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`

const AttackBox = styled.View`
  flex: 2;
  flex-direction: column;
`

const AttackRow = Row.extend`
  margin-bottom: 5px;
`

const images = (type) => {
  const allType = {
    Grass: require('../images/Grass.png'),
    Poison: require('../images/Poison.png'),
    Bug: require('../images/Bug.png'),
    Dark: require('../images/Dark.png'),
    Dragon: require('../images/Dragon.png'),
    Fairy: require('../images/Fairy.png'),
    Electric: require('../images/Electric.png'),
    Fighting: require('../images/Fighting.png'),
    Fire: require('../images/Fire.png'),
    Flying: require('../images/Flying.png'),
    Ghost: require('../images/Ghost.png'),
    Ground: require('../images/Ground.png'),
    Ice: require('../images/Ice.png'),
    Normal: require('../images/Normal.png'),
    Psychic: require('../images/Psychic.png'),
    Steel: require('../images/Steel.png'),
    Rock: require('../images/Rock.png'),
    Water: require('../images/Water.png')
  }
  return get(allType, type)
}

class Detail extends Component
{
  
  render()
  {
    console.log(screenWidth)  
    let data = get(this.props.data, 'pokemon', {})
    let weight = get(data, 'weight.minimum', '0.00kg')
    let height = get(data, 'height.minimum', '0.00kg')
    let pokemonTypes = get(data, 'types', [])
    let attacks = get(data, 'attacks.special', [])
    console.log(data.image)
    return (
      <Body>
        <Content>
          <HeaderColumn>
            <Header>
              <CP>CP</CP><CPLabel>{data.maxCP}</CPLabel>
            </Header>
            <Cover source={{ uri: data.image }} resizeMode='stretch' />
          </HeaderColumn>
          <Backdrop>
            <Name>{data.name}</Name>  
            <Separator />
            <Label>HP{data.maxHP}/{data.maxHP}</Label>
            <TransferSection>
              <ButtonBox>
                <ButtonTitle>TRANSFER</ButtonTitle>
              </ButtonBox>
            </TransferSection>
            <SectionTwo>
              <SectionTwoBox>
                {
                  pokemonTypes.map(item => <Row><Unit>{item}</Unit></Row>)
                  
                }
                <LabelUnit>Type</LabelUnit>
              </SectionTwoBox>
              <SectionTwoBox>
                
                <Unit>{weight}</Unit>
                <LabelUnit>Weight</LabelUnit>
              </SectionTwoBox>
              <SectionTwoBox>
                <Unit>{height}</Unit>
                <LabelUnit>Height</LabelUnit>
              </SectionTwoBox>
              
              
            </SectionTwo>
            <HR/>
            <Row>
              <SectionThreeBox>
                <Unit>500</Unit>
                <Unit>STARDUST</Unit>
              </SectionThreeBox>
              <SectionThreeBox>
                <Unit>1</Unit>
                <Unit>BULBASAUR CANDY</Unit>
              </SectionThreeBox>
            </Row>
            <Section>
              <PowerNEvolve>
                <ButtonBox disabled={true}>
                  <ButtonTitle>POWER UP</ButtonTitle>
                </ButtonBox>
                <PowerNEvolveValue>
                  <Label>1</Label>
                </PowerNEvolveValue>
              </PowerNEvolve>
            </Section>
            <Section>
              <PowerNEvolve>
                <ButtonBox disabled={true}>
                  <ButtonTitle>EVOLVE</ButtonTitle>
                </ButtonBox>
                <PowerNEvolveValue>
                  <Label>50</Label>
                </PowerNEvolveValue>
              </PowerNEvolve>
            </Section>
            <HR/>
            <Section>
              <AttackBox> 
                {
                  attacks.map((item, index) => {
                    return (
                      <AttackRow key={index}>
                        <Icon source={images(item.type)} />
                        <Label key={0} style={{ width: '80%'}}>{item.name}</Label>
                        <Label key={1}>{item.damage}</Label>
                      </AttackRow>
                    )
                  })        
                }
              </AttackBox>
            </Section>
          </Backdrop>
        </Content>
      </Body>
    )
  }
}

const PokemonQuery = gql`
  query pokemon($id: String) {
    pokemon(id: $id) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      attacks {
        special {
          name
          type
          damage
        }
      }
      types 
      resistant
      maxCP
      classification
      maxHP
      image
    }
  }
`

const PokemonPageWithData = graphql(PokemonQuery, {
  options: (ownProps) => {
    console.log(ownProps.navigation.state.params.itemId)
    return {
      variables: {
        id: ownProps.navigation.state.params.itemId
      }
    }
  }
})(Detail)

export default PokemonPageWithData

