
import React, { Component, PropTypes } from 'react';
import { Alert, TouchableOpacity, View, ListView, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body, Right,Item, Label, Input, Form, List, ListItem, Card, CardItem} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { setIndex } from '../../actions/list';
import { openDrawer } from '../../actions/drawer';
import styles from './styles06';

const cony=({uri :'http://mhs.rey1024.com/1415051014/Image/line.png'});
var URL="http://mhs.rey1024.com/1415051014/produk6.php";

class Line extends Component {

  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func,
  }

constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
       dataSource: ds,
       results: []
    };
  }

  AmbilData() {
    fetch(URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows
        (responseData),
      });
    }) .done();
  }

  renderRow(record) {
    return (
      <Card style={{ flex: 0 }}>
      <CardItem>
      <View style={styles.row}>
      <View style={styles.iconContainer}>
          <Image source={cony} style={styles.iconContainer} />
        </View>
        <View style={styles.info}>
          <Text style={styles.nama_produk}>{record.nama_produk}</Text>
          <Text style={styles.detail_produk}>{record.detail_produk}</Text>
        </View>
        <View style={styles.total}>
          <Text style={styles.harga_produk}>Harga Produk : {record.harga_produk}</Text>
        </View>
      </View>
      </CardItem>
      </Card>
    );
  }

  render() {
    this.AmbilData();
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="menu" />
            </Button>
          </Left>

          <Body>
            <Title>{(this.props.name) ? this.props.name : 'SteamWallet'}</Title>
          </Body>    
          <Right>
            <Button transparent onPress={() => Actions.login({ type: ActionConst.RESET })}>
              <Icon active name="power" />
            </Button>
          </Right>      
        </Header>



        <Content>
          <Grid style={styles.mt}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => this.newPage(i)}
                >
                  <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    animate/>
                </TouchableOpacity>
          </Grid>
        </Content>
      </Container>
    );
  }
}


function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  index: state.list.selectedIndex,
  list: state.list.list,
});


export default connect(mapStateToProps, bindAction)(Line);
