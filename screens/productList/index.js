import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Styles from "./styles";

import ListOfProducts from '../../components/list/index'

export default class ProductList extends Component {
    constructor(props){
      super(props);
    }
    
    render() {
      return (
        <View >
        <ListOfProducts navigation={this.props.navigation} list={this.props.list}/>  

        <Button
        title="Добавить"
        onPress={() => this.props.navigation.navigate('ProductAdd')}
        />          
        </View>
      );
    }  
  }