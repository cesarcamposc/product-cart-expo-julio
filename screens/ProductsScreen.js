import {FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import products from '../data/products'

const ProductsScreen = ({navigation}) => {
  return (
    <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable onPress={()=>navigation.navigate('Product Details')} style = {styles.itemContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </Pressable>
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