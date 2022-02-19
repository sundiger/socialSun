import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import PostsScreen from './src/screens/Posts/index.js';
// import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
          style={styles.backgroundImage}
          source={require('./assets/images/backgroundHome.png')}
      />
      {/* <Image
          style={styles.backImageMini}
          source={require('./assets/images/1.png')}
      /> */}
      <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['rgba(100,100,200,.3)', 'rgba(200,100,200,.2)']} style={styles.linearGradient}>
      <Text style={styles.text}>
        Приложение сделал Анисенко Алексей
      </Text>
    </LinearGradient>
    </View>
    
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        // screenOptions={({ route }) => ({
        //     tabBarIcon: ({ focused, color, size }) => {
        //       let iconName;

        //       if (route.name === 'Главная') {
        //         iconName = focused
        //           ? 'ios-information-circle'
        //           : 'ios-information-circle-outline';
        //       } else if (route.name === 'Посты') {
        //         iconName = focused ? 'ios-list-box' : 'ios-list';
        //       }

        //       // You can return any component that you like here!
        //       return <Ionicons name={iconName} size={size} color={color} />;
        //     },
        //     tabBarActiveTintColor: 'green',
        //     tabBarInactiveTintColor: 'gray',
        // })
        // }
      >
        <Tab.Screen name="Главная" component={HomeScreen}  />
        <Tab.Screen name="Посты" component={PostsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  backImageMini: {
    width: 200,
    height: 200,
    left: -70,
    bottom: -10,
    position: 'absolute'
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 60,
  }
})