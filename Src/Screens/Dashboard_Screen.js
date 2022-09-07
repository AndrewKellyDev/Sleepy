import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react'
import Background from '../../assets/landscape.jpg'
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'
import categoriesData from '../Data/Categories_Data';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const DashBoard = ({navigation}) => {

    var hour = new Date().getHours();

    let [fontLoaded] = useFonts({
        'Kaushan': require('../../assets/fonts/KaushanScript-Regular.ttf'),
        'Montserrat': require('../../assets/fonts/Montserrat.ttf'),
        'MontserratReg': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'MontserratThin': require('../../assets/fonts/Montserrat-Thin.ttf'),
    })

    if (!fontLoaded){
        return <AppLoading/>
    }
    return (
        <>
            <Image source={Background} className='w-full h-[40%] no-repeat z-0 absolute'/>
            <View className='flex bg-black/30 z-10 h-[40%] w-max'>
                <SafeAreaView>
                <Text className='z-20 pt-[5%] text-white text-3xl self-center' style={{fontFamily: 'Kaushan'}}>{'Sleepy'}</Text>
                <Text className='z-20 pt-[15%] pl-5 text-white text-2xl tracking-tighter' style={{fontFamily: 'MontserratThin'}}>{'Good ' + (hour < 12 && "Morning" || hour < 18 && "Afternoon" || "Evening")}</Text>
                <Text className='z-20 pl-5 text-white text-3xl tracking-tighter' style={{fontFamily: 'MontserratReg'}}>{'Andrew 👋'}</Text>
                </SafeAreaView>
            </View>
            <SafeAreaView>
                <View className='bg-[#121212] flex-1 h-[100%] w-[100%] p-5'>
                    <Text className='font-["Montserrat"] text-white text-lg tracking-tighter mb-5'>Categories</Text>
                    <ScrollView horizontal={true}>
                    {categoriesData.map((item,index) => {
                        return(
                            <>
                            <TouchableOpacity onPress={() => navigation.navigate('FullDetails' , {
                                item: item
                            })}>
                            <View key={index} className='bg-white w-52 h-44 rounded-2xl mr-4 overflow-hidden'>
                                <ImageBackground source={item.image} className="w-full h-full z-0 absolute">
                                    <View className='bg-black/40 flex-1'></View>
                                </ImageBackground>
                                <View className='flex-1 z-10 mt-[55%] ml-2'>
                                <Text className='text-white mb-2 font-["Montserrat"] tracking-tighter text-lg'>{item.name}</Text>
                                <Text className='text-[#FFFFFF]/60 font-["Montserrat"] tracking-tighter'>{item.desc}</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            </>
                        )
                    })}
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    )
}

export default DashBoard