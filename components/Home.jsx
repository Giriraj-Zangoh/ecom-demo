import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'

const Home = ({navigation}) => {

    const styles = StyleSheet.create({
        // home: {
        //     flexDirection: "column",
            

        // },
        container: {
            // flex: 2,
          paddingTop: 50,
          overflow: 'scroll'
        },
        products: {
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 20,
            flexDirection: "row",
            // justifyContent: "center",
            width: "90%",
            borderBottomWidth: 2,
            borderRightWidth: 2,
            borderRadius: 10,
            borderColor: "grey",

        },
        tinyLogo: {
          margin: 10,
          width: 70,
          height: 70,
        },
        logo: {
          width: 66,
          height: 58,
        },
        details: {
            marginLeft: 20,
            width: "65%",
            flexDirection: "column",
            justifyContent: 'center'

        }
      });

    const [res, setRes] = useState([])

    useEffect (()=>{
        fetch('https://fakestoreapi.com/products/').then(res=>res.json()).then(res => setRes(res))
        ,[]})
    
    const handlePress = (ele)=>{
        navigation.navigate(`Item`,ele)
    }

  return (

    <ScrollView>
        <Text style={{margin: 10, width:"100%", textAlign:'center', fontSize: 24, fontWeight: "600"}}>
            Our Products
        </Text>
        
            {res.map((ele)=>{
                return(
                    <TouchableOpacity 
                        key={ele.id}
                        onPress={() => handlePress(ele)}
                        style={styles.products}
                    >
                        <Image
                            source={{
                                uri: `${ele.image}`
                            }}
                            style={styles.tinyLogo}
                        />
                        <View style={styles.details}>
                        <Text >
                            {ele.title}
                        </Text>
                        <Text style={{marginTop: 10}}>
                            <Text style={{fontWeight: "700"}}>Price : </Text> 
                            <Text style={{fontSize: 16}}>${ele.price}</Text>
                        </Text>
                        </View>

                    </TouchableOpacity>
                )
                
            })}
        </ScrollView>

  )

  
}

export default Home