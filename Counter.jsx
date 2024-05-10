import { useState } from 'react'
import {
    SafeAreaView,
    Text,
    Button,
    View
}   from 'react-native'



const Counter = ()=>{

    const [count, setCount] = useState(0)

    const handleSubstract = ()=>setCount(count-1)
    const handleAdd = ()=>setCount(count+1)

    return(
        <SafeAreaView>

            <Text> <Text style={{fontWeight:"700"}}>Hello World </Text>{count}</Text>
            <View style={{flexDirection: "row"}}>
                <Button
                    onPress={handleAdd}
                    title="Click To +"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={handleSubstract}
                    title="Click To -"
                    color="#000000"
                    // style = {styles.cta}
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            
        </SafeAreaView>
    )

}

export default Counter