import React, {Component} from 'react';
import {View, Text, Button, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Styles from "./styles";

export default class ProductEdit extends Component {
  constructor(props) {
    super(props);
    const item = this.props.navigation.getParam('item', 'empty');
    this.state = { name: item.name, price: item.price };
  }
    render() {
      return (
        <View style={Styles.center}>
        <TextInput
        style={Styles.input}
        onChangeText={(name) => this.setState({name})}
        value={this.state.name}
        />
        <TextInput
        style={Styles.input}
        onChangeText={(price) => this.setState({price})}
        value={this.state.price}
        />
        <Button
            title="Сохранить"
          />
        </View>
      );
    }  
  }