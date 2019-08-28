import {createAppContainer, createStackNavigator} from 'react-navigation';

import ProductAdd from "../../screens/productAdd/container";
import ProductEdit from "../../screens/productEdit/container";
import ProductDetails from "../../screens/productDetails/container";
import ProductList from '../../screens/productList/container';

const AppNavigator = createStackNavigator({
  ProductList: {
    screen: ProductList
  },
  ProductAdd: {
    screen: ProductAdd
  },
  ProductEdit: {
    screen: ProductEdit
  },
  ProductDetails: {
    screen: ProductDetails
  },
}, {
    initialRouteName: 'ProductList',
});

export default createAppContainer(AppNavigator);