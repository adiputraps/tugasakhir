import React, { Component, Proptypes } from 'react';
import { TouchableOpacity, Alert,  
ScrollView,
StyleSheet,
TextInput,
View} from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Card, CardItem, Icon, Input, Item, Left, Body, Right } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './pembelian';
var url = 'http://mhs.rey1024.com/1415051014/pembelian.php'; 


class Pembelian extends Component {
constructor(props) {
    super(props);
    this.state = {
      username: "",
      id_dp: "",
      jumlahpembelian: "",
    };
  }

  onSave() {
    fetch(url + '?username=' + this.state.username + '&id_dp=' + this.state.id_dp + '&jumlahpembelian=' + this.state.jumlahpembelian)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
           Alert.alert("Silahkan masukkan semua data")
         }
         else 
       {
        Actions.home();
        }  
  })
  .done();    
}
  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }


  render() {
    const { props: { name, index, list } } = this;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="menu" />
            </Button>
            
          </Left>

          <Body>
            <Title>{(this.props.name) ? this.props.name : 'Pembelian'}</Title>
          </Body>

          <Right>
            <Button transparent onPress={() => Actions.login({ type: ActionConst.RESET })}>
              <Icon active name="power" />
            </Button>
          </Right>
        </Header>

      <Content padder style={{ marginTop: 0 }}>
                <Item style={styles.input}>
                  <Input placeholder=" masukkan username"
                   text = {this.state.username}
                    onChangeText={(e) => this.setState({ username: e })} />
                </Item>
                <Item style={styles.input}>
                  <Input
                    placeholder="masukkan id produk"
                    text = {this.state.id_dp}
                    onChangeText={(e) => this.setState({ id_dp: e })} />
                </Item>
                <Item style={styles.input}>
                  <Input
                    placeholder="masukkan jumlahpembelian"
                    text = {this.state.jumlahpembelian}
                    onChangeText={(e) => this.setState({ jumlahpembelian: e })} />
                </Item>              
                <Button style={styles.btn} onPress={() => this.onSave()}>
                  <Text>Save</Text>
                </Button>
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

export default connect(mapStateToProps, bindAction)(Pembelian);