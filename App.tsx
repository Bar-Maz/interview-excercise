import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PostListScreen from './src/screens/postList';
import SinglePostScreen from './src/screens/singlePost';
import {RootStackParamList} from './src/screens/RootStackParams';
import {SafeAreaView, StyleSheet, Platform, StatusBar} from "react-native";

const Stack = createStackNavigator<RootStackParamList>();

// main stack navigator wrapped in a SafeAreaView component
export default function App() {
    return (
        <>
            <SafeAreaView style={styles.root}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="PostList" component={PostListScreen}
                                      options={{
                                          headerShown: false
                                      }}
                        />
                        <Stack.Screen name="SinglePost" component={SinglePostScreen}
                                      options={({route}) => ({title: route.params.title})}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </>
    );
}

// added padding for android devices
const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
})