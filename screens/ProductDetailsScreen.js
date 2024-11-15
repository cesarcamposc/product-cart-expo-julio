import { StyleSheet, Text, View , Image, FlatList, useWindowDimensions, ScrollView, Pressable} from 'react-native'
import React from 'react'
import products from '../data/products'

const ProductDetailsScreen = () => {

    const product = products[0];

    const {width} = useWindowDimensions();

    const addToCart = () =>{
      console.warn('ADD TO CART')
    };

  return (
    <View>
      <ScrollView>
        {/* Image Carousel */}
      <FlatList
        data={product.images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />

      <View style = {{padding : 20}}>
        {/*  Title */}
        <Text style={styles.title}>{product.name}</Text>

        {/* Price */}
        <Text style={styles.price}>$ {product.price}</Text>

        {/* Description */}
        <Text style={styles.description}>{product.description}</Text>
      </View>

      </ScrollView>

      {/* Add to cart Button */}
      <Pressable onPress={addToCart} style = {styles.button}>
        <Text style = {styles.buttonText}>ADD TO CART</Text>
      </Pressable>
    </View>
  );
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  price: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 2
  },

  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },

  button: {
    position: 'absolute',
    backgroundColor: 'purple',
    bottom: 30,
    width: '80%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  } 
})