import * as React from 'react';
import { Colors } from '../styles/colors';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Coordinate, Direction, GestureEventType } from '../types/types';
import Snake from './Snake';


const SNAKE_INITIAL_POSITION =[{x:5, y:5}];
const FOOD_INITIAL_POSITION = {x:5, y:20};
const GAME_BOUNDS = {xMin: 0, xMax:35, yMin:0, yMax: 63};
const MOVE_INTERNAL = 50;
const SCORE_INCREMENT=10;

export default function Game():JSX.Element{
    const [direction, setDirection] = React.useState<Direction>(Direction.Right);
    const [snake, setSnake] = React.useState<Coordinate[]>(SNAKE_INITIAL_POSITION);
    const [food, setFood] = React.useState<Coordinate>(FOOD_INITIAL_POSITION);
    const [isGameOver, setGameOver] = React.useState<Boolean>(false);
    const [isPause, setGamePaused] = React.useState<boolean>(false);
    
    

    const handleGesture = (event: GestureEventType) => {
        const {translationX, translationY} = event.nativeEvent;

        if (Math.abs(translationX) > Math.abs(translationY)){
            if (translationX > 0){
                setDirection(Direction.Right);

            }else {
                setDirection(Direction.Left)
            }
        } else {
            if (translationY > 0 ){
                //down
                setDirection(Direction.Down)
            } else{
                //up
                setDirection(Direction.Up)
            }
        }
    };
    return (
    <PanGestureHandler onGestureEvent={handleGesture}>
    <SafeAreaView style={styles.container}>
    <View style={styles.boundaries}>
       <Snake snake={snake}></Snake>
    </View>
    </SafeAreaView>
    


    </PanGestureHandler> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    boundaries: {
        flex: 1,
        borderColor: Colors.primary,
        borderWidth: 12,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopWidth:40,
        backgroundColor: Colors.background,
    }

})