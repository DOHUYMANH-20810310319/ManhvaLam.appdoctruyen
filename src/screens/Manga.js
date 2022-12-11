import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Dimensions,
} from "react-native";

import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width } = Dimensions.get("window");

export default function Manga({ navigation, render}) {
    return (
        <SafeAreaView >
            <ScrollView>
                <View >
                <Image
                    style={{
                    height: 650,
                    width: 400,
               
                    }}
            source={require("../../assets/manga/anh1.png")}
                />
                </View>
                <View>
                <Image
                    style={{
                    height: 650,
                    width: 400,
               
                    }}
            source={require("../../assets/manga/anh2.png")}
                />
                </View> 
                <View>
                <Image
                    style={{
                    height: 650,
                    width: 400,
               
                    }}
            source={require("../../assets/manga/anh3.png")}
                />
                </View> 
                <View>
                <Image
                    style={{
                    height: 650,
                    width: 400,
               
                    }}
            source={require("../../assets/manga/anh4.png")}
                />
                </View> 
                <View>
                <Image
                    style={{
                    height: 650,
                    width: 400,
               
                    }}
            source={require("../../assets/manga/anh5.png")}
                />
                </View> 
                <View>
                <Image
                    style={{
                    height: 650,
                    width: 400,
               
                    }}
            source={require("../../assets/manga/anh6.png")}
                />
                </View> 
                <View>
                <Image
                    style={{
                    height: 650,
                    width: 400,
               
                    }}
            source={require("../../assets/manga/anh7.png")}
                />
                </View> 
                <View>
                <Image
                    style={{
                    height: 650,
                    width: 400,
               
                    }}
            source={require("../../assets/manga/anh8.png")}
                />
                </View> 
                <View>
                <Image
                    style={{
                    height: 650,
                    width: 400,
               
                    }}
            source={require("../../assets/manga/anh9.png")}
                />
                </View> 
                <View>
                <Image
                    style={{
                    height: 650,
                    width: 400,
               
                    }}
            source={require("../../assets/manga/anh10.jpg")}
                />
                </View> 
                <View>
                <Image
                    style={{
                    height: 650,
                    width: 400,
               
                    }}
            source={require("../../assets/manga/anh11.png")}
                />
                </View> 
            </ScrollView>
        </SafeAreaView>     
    );
    
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });