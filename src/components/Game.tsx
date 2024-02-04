import * as React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';



export default function Game():JSX.Element{
    const handleGesture = (event: any) => {
        const {translationX, translationY} = event.nativeEvent;

        console.log(translationX, translationY);
    }
    return (
    <PanGestureHandler onGestureEvent={handleGesture}>
    <SafeAreaView style={styles.container}></SafeAreaView>
    </PanGestureHandler> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    }
})