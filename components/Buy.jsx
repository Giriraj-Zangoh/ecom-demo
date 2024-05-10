import React, { useState } from 'react'
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const Buy = ({navigation, route}) => {

    const styles = StyleSheet.create({
        head:{
            fontSize: 24,
            marginLeft: 10
        },
        tinyLogo: {
          marginVertical: 20,
        //   flex: 1,
          width: 300,
          height: 300,
          flexDirection: "column",
          alignSelf: 'center'
        },
        payhead:{
            marginTop: 10,
            fontSize: 18,
            marginLeft: 10
        },
        options :{
            marginTop: 10,
            width: "70%",
            borderWidth: 2,
            borderRadius: 4,
            textAlign: "center",
            flexDirection: "column",
            alignItems: "center",
        },
        payid:{
            marginVertical: 10,
            padding: 4,
            paddingLeft: 15,
            paddingRight: 15,
            borderWidth: 2,
            borderColor: "grey",
            borderRadius: 10,
            width: "70%",
            flexDirection: "row",
            alignSelf: "center",
        },
        cta:{
            // marginLeft: 50,
            width: "70%",
            backgroundColor: "yellow",
            paddingHorizontal: 20,
            paddingVertical: 5,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            textAlign: "center",
            borderWidth: 1,
            borderColor: "yellow",
            borderRadius: 10,
        }
    })
    const [UPI, setUPI] = useState(false)
    const [cards, setCards] = useState(false)
    const [pay, setPay] = useState('')

    let ele = route.params
    ele["payId"] = pay;

    const handlePay = ()=>{
        navigation.navigate("Payment",ele)
    }

  return (
    <ScrollView>
        <Image
            source={{
                uri: `${route.params.image}`
            }}
            style={styles.tinyLogo}
        />
        <Text style={styles.head}>{route.params.title}</Text>
        <Text style={{marginLeft:10}}>
            <Text style={{fontWeight: "600", fontSize:18 }}>Price : $ {route.params.price}</Text>
        </Text>
        <View>
            <Text style={styles.payhead}>
                Select Payment Method
            </Text>
            <View style={{flexDirection: "column", justifyContent:"center", alignItems: "center", textAlign:"center"}}>
                <Pressable 
                onPress={()=>{
                    setCards(false)
                    setPay("")
                    return setUPI(true);
                }}
                style={styles.options}
                >
                    <Text>
                        UPI
                    </Text>
                    
                </Pressable>
                <Pressable
                    onPress={()=>{
                        setUPI(false)
                        setPay("")
                        return setCards(true);
                    }}
                    style={styles.options}
                >
                    <Text>
                        Cards
                    </Text>
                </Pressable>
                { UPI || cards ? 
                        <TextInput 
                            value={pay}
                            onChangeText={(val)=>setPay(val)}
                            // onSubmit
                            autoFocus={true}
                            style={styles.payid}
                        />:null
                }

            </View>
            
                {pay.length !== 0 ?
                <Pressable onPress={handlePay} style={styles.cta}>
                     <Text>Pay Now</Text>
                </Pressable> : null}
                {/* <Button title='Pay Now'
                    disabled
                    onPress={handlePay}
                /> */}
            
            
        </View>


        
    </ScrollView>
  )
}

export default Buy