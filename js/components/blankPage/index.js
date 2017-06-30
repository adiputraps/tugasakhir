
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import { Container,  Header, Title, Content, List, ListItem, Footer, FooterTab, Left, Right, Body, Icon } from 'native-base'
import {
  View,
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  Button,
  ScrollView,
  record
} from 'react-native';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

var URL="http://mhs.rey1024.com/1415051014/produk.php";


class BlankPage extends Component {

  static propTypes = {
      name: React.PropTypes.string,
      index: React.PropTypes.number,
      list: React.PropTypes.arrayOf(React.PropTypes.string),
      openDrawer: React.PropTypes.func,
  }
  constructor(props){    
      super(props);
      var ds = new 
      ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state={
         dataSource: ds,
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
  
  render() {
    const { props: { name, index, list } } = this;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>{(name) ? this.props.name : 'List Produk'}</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>
       </Container>
      );
  }

   renderRow(record)  {
    return(
    <Content padder>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image source={{ uri:'http://mhs.rey1024.com/1415051014/Image/steamwallet.jpg' }} style={styles.icon} />
        </View>
        <View style={styles.info}>
          <Text style={styles.items}>{record.nama_produk}</Text>
          <Text style={styles.address}>Detail Produk : {record.detail_produk}, Harga Produk : {record.harga_produk}</Text>
        </View>                  
      </View> 
      </Content>
      );
  }
  render() {
    this.AmbilData();
    return (
      <View style={styles.mainContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}/>
      </View>
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


export default connect(mapStateToProps, bindAction)(BlankPage);
