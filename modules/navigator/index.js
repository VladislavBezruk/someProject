import {createAppContainer, createStackNavigator} from 'react-navigation';
import Styles from "./styles";

import ProductList from "../../screens/productList";
import ProductEdit from "../../screens/productEdit";
import ProductDetails from "../../screens/productDetails";
import containers from '../../screens/productList/containers';

const AppNavigator = createStackNavigator({
  Home: {
    screen: containers
  },
  ProductEdit: {
    screen: ProductEdit
  },
  ProductDetails: {
    screen: ProductDetails
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);