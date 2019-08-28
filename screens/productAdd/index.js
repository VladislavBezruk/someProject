import React, {Component} from 'react';
import {View, Text, Button, Image, TextInput } from 'react-native';
import Styles from "./styles";

export default class ProductAdd extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", price: "", image: ""};

    this.onAddProduct = this.onAddProduct.bind(this)
  }

  onAddProduct(){
    this.props.addProduct(this.state.image, this.state.name, this.state.price)
    this.props.navigation.navigate('ProductList')
  }

  render() {
    return (
      <View style={Styles.center}>
      <TextInput
        style={Styles.input}
        onChangeText={(image) => this.setState({image})}
        value={this.state.image}
      />
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
        onPress={this.onAddProduct}
      />
      </View>
    );
  }  
}