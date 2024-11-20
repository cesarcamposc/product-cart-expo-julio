import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import products from '../data/products'
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ShoppingCart from '../screens/ShoppingCart';
import Navigation from '../navigation/navigation'
import { Provider } from 'react-redux';
import { store } from '../store/store';


export default function index() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'azure',
    },

})