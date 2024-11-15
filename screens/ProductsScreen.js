import {FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import products from '../data/products'

const ProductsScreen = () => {
  return (
    <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style = {styles.itemContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
        )}
        numColumns={2}
      />
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'azure',
        alignItems: 'center',
        justifyContent: 'center',
    },

    itemContainer: {
        width: '50%',
        padding: 1,
    },

    image: {
        width: '100%', 
        aspectRatio: 1
    },
})