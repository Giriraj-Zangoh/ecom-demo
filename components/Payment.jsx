import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Payment = ({navigation, route}) => {

    const handlePress = ()=>{
        navigation.navigate("Home", route)
    }
    const styles = StyleSheet.create({
        body:{
            marginTop: 150,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignItems: "center"
        },
        success:{
            fontSize: 20,
            fontWeight: "600"
        },
        order:{
            marginVertical: 10,
            fontSize: 18,
            fontWeight: "500"
        },
        back:{
            marginTop: 100,
            color: "blue",
            fontWeight: '800',
            fontSize: 16
        }
    })

  return (
    <View style={styles.body}>
        <Text style={styles.success}>Payment Successful !!</Text>
        <Text style={styles.order}>Order Placed ! </Text>

        <Pressable style={styles.back} onPress={handlePress}>
            <Text>Back To Home</Text>
        </Pressable>

    </View>
  )
}

export default Payment