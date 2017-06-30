import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Card, CardItem, Icon, Left, Body, Right } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './pembayaran';


class Pembayaran extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="menu" />
            </Button>
            
          </Left>

          <Body>
            <Title>{(this.props.name) ? this.props.name : 'Pembayaran'}</Title>
          </Body>

          <Right>
            <Button transparent onPress={() => Actions.login({ type: ActionConst.RESET })}>
              <Icon active name="power" />
            </Button>
          </Right>
        </Header>

      <Content padder style={{ marginTop: 0 }}>
        <Text>Lakukan Pembayaran disalah satu bank</Text>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                Lakukan Pembayaran Ke REKENING BRI A.N : ADIPUTRAPARLINDUNGANSIMAMORA
                NOREK: 081-XXXXXXXXXXXXXX
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                Lakukan Pembayaran Ke REKENING BNI A.N : ADIPUTRAPARLINDUNGANSIMAMORA
                NOREK: 081-XXXXXXXXXXXXXX
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  list: state.list.list,
});

export default connect(mapStateToProps, bindAction)(Pembayaran);