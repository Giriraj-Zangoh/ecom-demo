import React from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

const Item = ({navigation, route}) => {
    // {id, category, title, price, description, image, rating}
    const styles = StyleSheet.create({
        head:{
            fontSize: 24,
            marginLeft: 10
        },
        tinyLogo: {
          margin: 30,
        //   flex: 1,
          width: 300,
          height: 300,
        },
        ctaBox:{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
        },
        buyCta:{
            // marginLeft: "auto",
            padding: 2,
            backgroundColor: "yellow",
            color: "black",
            width: 300,
            textAlign: "center"

        },
        cartCta:{
            marginTop: 5,
            marginBottom: 10,
            padding: 2,
            backgroundColor:"orange",
            color: "#FFFFFF",
            width: 300,
            textAlign: "center",
            borderWidth: 2,
            borderRadius: 4,
            borderColor: "orange"
        },
        desc:{
            fontSize: 20,
            fontWeight: "600",
            margin: 10
        },
        desc_body:{
            margin: 10,
            fontSize: 16

        }
      });


    const handleBuy = (ele)=>{
        navigation.navigate("Buy", ele)
    }
    const handleCart = (ele)=>{
        navigation.navigate("Cart", ele)
    }

  return (
    <ScrollView>
        <Image
            source={{
                uri: `${route.params.image}`
            }}
            style={styles.tinyLogo}
        />
        <Text style={styles.head}>
            {route.params.title}
        </Text>
        <Text style={{marginLeft:10}}>
            <Text style={{fontWeight: "600", fontSize:18 }}>Price : $ {route.params.price}</Text>
        </Text>
        <View style={{flexDirection: "row", margin:10}}>
            <Text>Rating : {route.params.rating.rate}</Text>
            <Text style={{marginLeft:10}}>Reveiws : {route.params.rating.count}</Text>
        </View>
        <View style={styles.ctaBox}>
            <Pressable title='Buy Now' onPress={()=>handleBuy(route.params)} >
                <Text style={styles.buyCta}>Buy Now</Text>
            </Pressable>
            <Pressable title='Add To Cart' onPress={()=>handleCart(route.params)} >
                <Text style={styles.cartCta}>Add To Cart</Text>
            </Pressable>
        </View>

        <Text style={styles.desc}>Description</Text>
        <Text style={styles.desc_body}>{route.params.description}</Text>

    </ScrollView>
  )
}

export default Item