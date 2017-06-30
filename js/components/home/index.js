
import React, { Component } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Card, CardItem, Icon, Left, Body, Right } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const mega=({uri :'http://mhs.rey1024.com/1415051014/Image/megaxus.jpg'});
const gar=({uri :'http://mhs.rey1024.com/1415051014/Image/garena.jpg'});
const wallet=({uri :'http://mhs.rey1024.com/1415051014/Image/steamwallet.jpg'});
const cony=({uri :'http://mhs.rey1024.com/1415051014/Image/line.png'});

class Home extends Component {

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
            <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>
          </Body>

          <Right>
            <Button transparent onPress={() => Actions.login({ type: ActionConst.RESET })}>
              <Icon active name="power" />
            </Button>
          </Right>
        </Header>

      <Content padder style={{ marginTop: 0 }}>
      <Card style={{ flex: 0 }}>
      <CardItem>
        <Text  style={styles.awal}> SELAMAT DATANG DI APLIKASI JUAL VOUCHER GAME TERBESAR DISINGARAJA</Text>
      </CardItem>
    </Card>

    <Card style={{ flex: 0 }}>
      <CardItem>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
          <Image source={mega} style={styles.iconContainer} />
        </View>
        <View style={styles.info}>
          <Text style={styles.nama_produk}>VOUCHER MEGAXUS</Text>
        </View>
        </View>
      </CardItem>
    </Card>
    <Card style={{ flex: 0 }}>
      <CardItem>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
          <Image source={gar} style={styles.iconContainer} />
        </View>
        <View style={styles.info}>
          <Text style={styles.nama_produk}>VOUCHER GARENA</Text>
        </View>
        </View>
      </CardItem>
    </Card>
    <Card style={{ flex: 0 }}>
      <CardItem>
        <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image source={wallet} style={styles.iconContainer} />
        </View>
        <View style={styles.info}>
          <Text style={styles.nama_produk}>STEAM WALLET</Text>
        </View>
        </View>
      </CardItem>
    </Card>
    <Card style={{ flex: 0 }}>
      <CardItem>
        <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image source={cony} style={styles.iconContainer} />
        </View>
        <View style={styles.info}>
          <Text style={styles.nama_produk}>COIN LINES</Text>
        </View>
        </View>
      </CardItem>
    </Card>
    <Card style={{ flex: 0 }}>
      <CardItem>
        <Text  style={styles.awal}> UNTUK PRODUK LIST LENGKAP SILAHKAN CEK SIDE BAR KITA KAK</Text>
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

export default connect(mapStateToProps, bindAction)(Home);
