import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function InfoScreen({navigation}) {
    return(
        <View style = {styles.container}>
            <Text>This is the Info Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

})