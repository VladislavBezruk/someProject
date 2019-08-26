import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Styles from "./styles";

import ListOfProducts from '../../components/list/index'

export default class ProductList extends Component {
    render() {
      return (
        <View >
          <ListOfProducts navigation={this.props.navigation}/>  
        </View>
      );
    }  
  }