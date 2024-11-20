import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ShoppingCart from '../screens/ShoppingCart';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const navigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name='Products' 
        component={ProductsScreen}
        options={({navigation})=>({
            headerRight: () =>(
                <Pressable onPress={()=>navigation.navigate('Shopping Cart')} style = {{flexDirection: 'row'}}>
                    <Ionicons name='cart-outline' size={25} color='purple'/>
                    <Text style = {{marginLeft: 5, fontWeight: 'bold', fontSize: 18}}>2</Text>
                </Pressable>
            )
        })}
        />
        <Stack.Screen name='Product Details' component={ProductDetailsScreen}/>
        <Stack.Screen name='Shopping Cart' component={ShoppingCart}/>
    </Stack.Navigator>
  )
}

export default navigation

const styles = StyleSheet.create({})