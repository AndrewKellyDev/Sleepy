import { Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import Background from '../../assets/landscape.jpg'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const AudioPlayer = (item = undefined) => {

    console.log('Clicked')

    const [sound, setSound] = useState();


    async function playSound(url) {
        console.log('Loading Sound');
        console.log(url)
        const { sound } = await Audio.Sound.createAsync(
            { uri: 'https://docs.google.com/uc?export=download&id=' + url },
            { shouldPlay: true }
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <>
            <View className='bg-yellow-400 h-20 w-[100%] bottom-20 top-0 left-0 right-0'>
                <View className='flex flex-row'>
                    <Text>{item.item ? item.item.name : 'None'}</Text>
                    <Feather name="play" size={20} color="black" style={{ opacity: 0.5 }} />
                </View>
            </View>
        </>
    )
}

export default AudioPlayer