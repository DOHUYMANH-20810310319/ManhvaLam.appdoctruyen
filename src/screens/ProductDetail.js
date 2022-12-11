import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground, Dimensions, ToastAndroid } from 'react-native';
const SPACING = 10;
const { height } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function ProductDetail({ route, navigation }) {
    const { item } = route.params;
    const [amount, setAmount] = useState(1);

    const addToCart = async () => {
        let cartData = await AsyncStorage.getItem("cartData");
        if (cartData) {
            cartData = JSON.parse(cartData);
            cartData.push({
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
                cate: item.cate,
                amount: amount,
            });
            ToastAndroid.show(
                'Truyện đã được thêm vào lịch sử đọc',
                ToastAndroid.SHORT,
            );
        } else {
            cartData = [];
            cartData.push({
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
                cate: item.cate,
                amount: amount,
            });
            ToastAndroid.show(
                'Truyện đã được thêm vào lịch sử đọc',
                ToastAndroid.SHORT,
            );
        }
        AsyncStorage.setItem("cartData", JSON.stringify(cartData));
    };

    return (
        <>
            <ScrollView>
                <View>
                    <ImageBackground
                        style={{
                            padding: SPACING * 2,
                            height: height / 2.5,
                            padding: SPACING * 2,
                            paddingTop: SPACING * 4,
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                        resizeMode="contain"
                        source={item.image}
                    >
                        <TouchableOpacity
                            style={{
                                height: SPACING * 4.5,
                                width: SPACING * 4.5,
                                backgroundColor: '#fff',
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: SPACING * 2.5,
                            }}
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons
                                name="arrow-back"
                                size={SPACING * 2.5}
                                color='#666'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                height: SPACING * 4.5,
                                width: SPACING * 4.5,
                                backgroundColor: '#fff',
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: SPACING * 2.5,
                            }}
                        >
                            <Ionicons name="heart" size={SPACING * 2.5} color='#666' />
                        </TouchableOpacity>
                    </ImageBackground>
                    <View
                        style={{
                            padding: SPACING * 2,
                            paddingTop: SPACING * 3,
                            marginTop: -SPACING * 3,
                            borderTopLeftRadius: SPACING * 3,
                            borderTopRightRadius: SPACING * 3,
                            backgroundColor: '#fff',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                marginBottom: SPACING * 3,
                                alignItems: "center",
                            }}
                        >
                            <View style={{ width: "70%" }}>
                                <Text
                                    style={{
                                        fontSize: SPACING * 3,
                                        color: '#000',
                                        fontWeight: "700",
                                    }}
                                >
                                    {item.name}
                                </Text>
                            </View>
                            <View
                                style={{
                                    padding: SPACING,
                                    paddingHorizontal: SPACING * 3,
                                    backgroundColor: 'yellow',
                                    flexDirection: "row",
                                    borderRadius: SPACING,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: SPACING * 1.6,
                                        fontWeight: "600",
                                        marginLeft: SPACING / 6,
                                        color: '#000',
                                    }}
                                >
                                    Đã đọc {item.price}
                                </Text>
                            </View>
                        </View>
                        <Text>{item.cate}</Text>
                        <View>
                            <Text>
                                {item.description}
                            </Text>
                        </View>
                        {}
                    </View>
                </View>
            </ScrollView>
            <SafeAreaView>
                <View style={{ padding: SPACING * 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                    </View>
                    <TouchableOpacity
                        style={{
                            padding: SPACING * 2,
                            backgroundColor: '#000',
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: SPACING * 2,
                            flex: 1
                        }}
                        onPress={addToCart}
                        
                    >
                        
                        <Text
                            style={{
                                fontSize: SPACING * 2,
                                color: '#fff',
                                fontWeight: "700",
                            }}
                        >
                            Thêm lịch sử
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            padding: SPACING * 2,
                            backgroundColor: '#000',
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: SPACING * 2,
                            flex: 1
                        }}
                        onPress={() => navigation.navigate('Manga')}
                        
                    >
                        
                        <Text
                            style={{
                                fontSize: SPACING * 2,
                                color: '#fff',
                                fontWeight: "700",
                            }}
                        >
                            Bắt đầu đọc
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});