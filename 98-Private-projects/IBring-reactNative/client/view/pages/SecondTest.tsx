import { View, Text, Button } from 'react-native'
import React from 'react'

import { useNavigate } from 'react-router-native';

const SecondTest = () => {
    const nav = useNavigate();

    function onPressLearnMore() {
        console.log("SecondTest")
        nav('/test');
    }
    return (
        <View>
            <Text>SecondTest</Text>
            <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

export default SecondTest