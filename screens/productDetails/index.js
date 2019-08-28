import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';
import Styles from "./styles";

export default class ProductDetails extends Component {
    render() {
      const item = this.props.navigation.getParam('item', 'empty');
      let name = item.name;
      let price = item.price;
      return (
        <View style={Styles.center}>
        <Image
          style={{width: 400, height: 400}}
          source={ { uri: item.image_url }}
        />
        <Text style={Styles.textName}>{name}</Text>   
        <Text style={Styles.textPrice}>Цена: {price}грн</Text>   
        <Button
          title="Редактировать"
          onPress={() => this.props.navigation.navigate('ProductEdit', {item: item})}
        />
        </View>
      );
    }  
  }