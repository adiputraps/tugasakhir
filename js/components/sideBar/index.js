
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, List, Text, Footer, FooterTab, Button, Left, Right, Body, Icon, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {
  AppRegistry,
  StyleSheet,
  View,
  ListView
} from 'react-native';

import { closeDrawer } from '../../actions/drawer';
import { setIndex } from '../../actions/list';

import styles from './style';


class SideBar extends Component {

  static propTypes = {
    // setIndex: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content style={styles.sidebar} >
        <ListItem button onPress={() => { Actions.home(); this.props.closeDrawer(); }} >
          <Text>Home</Text>
        </ListItem>
        <ListItem button onPress={() => { Actions.steamwallet(); this.props.closeDrawer(); }} >
          <Text>SteamWallet</Text>
        </ListItem>
        <ListItem button onPress={() => { Actions.megaxus(); this.props.closeDrawer(); }} >
          <Text>Megaxus</Text>
        </ListItem>
        <ListItem button onPress={() => { Actions.garena(); this.props.closeDrawer(); }} >
          <Text>Garena</Text>
        </ListItem>
        <ListItem button onPress={() => { Actions.line(); this.props.closeDrawer(); }} >
          <Text>Line</Text>
        </ListItem>
        <ListItem button onPress={() => { Actions.pembelian(); this.props.closeDrawer(); }} >
          <Text>Pembelian</Text>
        </ListItem>
        <ListItem button onPress={() => { Actions.pembayaran(); this.props.closeDrawer(); }} >
          <Text>Pembayaran</Text>
        </ListItem>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    setIndex: index => dispatch(setIndex(index)),
  };
}

export default connect(null, bindAction)(SideBar);
