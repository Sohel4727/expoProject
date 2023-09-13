import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const WelcomeFood = ({navigation}) => {

    useEffect(() => {
        // Use setTimeout to navigate to the home screen after 5 seconds
        const timer = setTimeout(() => {
          navigation.navigate('welcomecoffee'); 
        }, 1000);
    
        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
      }, [navigation]);

  return (
    <View style={styles.container}>   
      <Image source={require('../assets/welcomeLogo.png')}/>
    </View>
  )
}

export default WelcomeFood

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    }
})