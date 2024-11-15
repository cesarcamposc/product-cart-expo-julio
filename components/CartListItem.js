import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const CartListItem = ({carItem}) => {

    const decreaseQuantity = () => {

    };

    const increaseQuantity = () => {

    }

  return (
    <View style = {styles.container}>
      <Image source={{uri: carItem.product.image}} style = {styles.image}/>

      <View style = {styles.contentContainer}>
        <Text style = {styles.name}>{carItem.product.name}</Text>
        <Text style = {styles.size}>{carItem.size}</Text>

        <View style = {styles.footer}>
            <Feather
            onPress={decreaseQuantity}
            name='minus-circle'
            size = {25}
            color = 'purple'
             />

             <Text style = {styles.quantity}>{carItem.quantity}</Text>

             <Feather
            onPress={increaseQuantity}
            name='plus-circle'
            size = {25}
            color = 'purple'
             />

             <Text style = {styles.itemTotal}>$ {carItem.product.price * carItem.quantity}</Text>
        </View>
      </View>
    </View>
  )
}

export default CartListItem

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: 'row'
    },

    image: {
        width: '40%',
        aspectRatio: 1,
        borderRadius: 10,
    },

    contentContainer: {
        flex: 1,
        marginLeft: 10,
    },

    name: {
        fontSize: 20,
        fontWeight: '600'
    },

    size: {
        fontSize: 18,
        color: 'green',
    },

    footer: {
        flexDirection: 'row',
        marginTop: 'auto',
        alignItems: 'center',
    },

    quantity: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: 'red',
        fontSize: 18
    },
    
    itemTotal: {
        fontSize: 20,
        marginLeft: 'auto',
        fontWeight: '500'
    }
})