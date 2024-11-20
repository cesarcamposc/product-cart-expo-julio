import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'

const ShoppingCartTotals = () => (
    <View style = {styles.totalsContainer}>
        <View style = {styles.row}>
            <Text style = {styles.text}>SubTotal</Text>
            <Text style = {styles.text}>$ 787,00</Text>
        </View>

        <View style = {styles.row}>
            <Text style = {styles.text}>Delivery</Text>
            <Text style = {styles.text}>$ 20,00</Text>
        </View>

        <View style = {styles.row}>
            <Text style = {styles.textBold}>Total</Text>
            <Text style = {styles.textBold}>$ 817,00</Text>
        </View>
    </View>
)

const ShoppingCart = () => {
  return (
    
    <FlatList
    data={cart}
    renderItem={({item}) => <CartListItem carItem={item}/>}
    ListFooterComponent={ShoppingCartTotals}
    />
  )
}

export default ShoppingCart

const styles = StyleSheet.create({
    totalsContainer: {
        padding: 20,
        borderColor: 'purple',
        borderTopWidth: 1,
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },

    text: {
        fontSize: 18,
        color: 'green',
        fontWeight: '500'
    },

    textBold: {
        fontSize: 20,
        fontWeight: 'bold',      
    }
})