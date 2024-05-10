import { useState } from 'react'
import {
    SafeAreaView,
    Text,
    View,
    Button,
    StyleSheet,
    ScrollView
}   from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Counter from "./Counter"
import Home from './components/Home'
import Item from './components/Item';
import Buy from './components/Buy';
import Cart from './components/Cart';
import Payment from './components/Payment';

const App = ()=>{


    const styles = StyleSheet.create({
        scrollContainer:{
            // maxHeight: 450,
            // flexGrow: 1

        }
      });
      const Stack = createNativeStackNavigator();
    
    return(
        // <SafeAreaView>
        //     <ScrollView style={styles.scrollContainer}>
        //         {/* <Counter/> */}
        //         <Home/>
        //     </ScrollView>
        // </SafeAreaView>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" title="All Items" component={Home} />
                <Stack.Screen name="Item" component={Item}/>
                <Stack.Screen name="Buy" component={Buy}/>
                <Stack.Screen name="Cart" component={Cart}/>
                <Stack.Screen name="Payment" component={Payment}/>
                <Stack.Screen name="Counter" component={Counter} />

            </Stack.Navigator>
        </NavigationContainer>
        
    )
}

export default App