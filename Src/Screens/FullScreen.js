import { Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import axios from 'react-native-axios'
import  AudioPlayer  from './AudioPlayer';

const FullScreenTab = ({ route, navigation }) => {

    const [sounds, setSounds] = useState()

    var hour = new Date().getHours();

    const { item } = route.params;

    const image = item.image

    
    useEffect(() => {
        axios.post('https://audio-streaming-backend-api.herokuapp.com/v1/audio/get-audios', {
            folderId: item.folderID,
          })
          .then(function (response) {
            console.log(response.data);
            setSounds(response.data)
          })
    }, [])


    return (
        <>
            <Image source={item.image} className='w-full h-[40%] no-repeat z-0 absolute' />
            <View className='flex bg-black/30 z-10 h-[40%] w-max'>
                <SafeAreaView>
                    <View className='flex-1 pt-[5%]' style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View className='flex-1' style={{ position: 'relative', justifyContent: 'flex-start' }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <View className='flex-1 w-10 h-10 bg-white/50 rounded-xl ml-5 justify-center items-center'>
                                    <Ionicons name="ios-chevron-back-outline" size={24} color="black" style={{ opacity: '0.5' }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View className='flex-1'>
                            <Text className='z-20 mr-16 text-white text-3xl' style={{ fontFamily: 'Kaushan' }}>{'Sleepy'}</Text>
                        </View>
                    </View>

                    <Text className='z-20 pt-[15%] pl-5 text-white text-3xl tracking-tighter' style={{ fontFamily: 'MontserratReg' }}>{item.name}</Text>
                    <Text className='z-20 pt-[5%] pl-5 pr-5 text-white/80 text-sm tracking-tighter'>{item.FullDesc}</Text>
                </SafeAreaView>
            </View >

            <SafeAreaView>
                <View className='flex-1 bg-[#121212] h-[100%] w-[100%] p-5'>
                    <Text className='text-white text-xl mb-4 font-["Montserrat"] tracking-tighter'>Sounds</Text>
                    <ScrollView>
                    {sounds ? sounds.audios.map((item, index) => {
                        return (
                            <>
                             <TouchableOpacity onPress={() => AudioPlayer(item)}>
                                <View className='flex bg-[#2d2d32] w-[100%] h-20 rounded-lg p-5 mb-4'>
                                    <View className='flex-1 flex-row justify-between items-center'>
                                        <Text className='text-white/70 font-["Montserrat"] tracking-tighter'>{index}</Text>
                                        <Image source={image} className='w-12 h-12 rounded-lg'></Image>
                                        <Text className='text-white font-bold font-["Montserrat"] tracking-tighter'>{item.name.replace('.mp3','')}</Text>
                                        <Text className='text-white/70 font-["Montserrat"] tracking-tighter'>10:30</Text>
                                        <View className='w-12 h-12 bg-black/30 rounded-lg justify-center items-center'>
                                            <Feather name="play" size={20} color="white" style={{ opacity: 0.5 }} />
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity> 
                            </>
                        )
                    }): <Text>Loading</Text>}
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    )
}

export default FullScreenTab