import React from 'react';
import { Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import SwipeButton from './Components/SwipeButton';

function PostsScreen() {
    return (
      <View style={ styles.container }>
        <Image
            style={styles.backImageMini}
            source={require('../../../assets/images/backgroundHome3.png')}
        />
        <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} 
            colors={['rgba(100,100,200,.3)', 'rgba(200,100,200,.5)']} 
            style={styles.linearGradient}
        >
            <SwipeButton/>
        </LinearGradient>
      </View>
    );
}

export default PostsScreen;