import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'

const signin = () => {
  const handleLogin=()=>{};
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain'/>
        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome to ReState</Text>
          <Text className='text-2xl font-rubik-bold text-black-300 text-center mt-2'>Let's Get You Closer to {'\n'} 
            <Text className='text-primary-300'>Your ideal home</Text>
          </Text>
          <Text className='text-lg font-rubik text-black-200 text-center mt-6'>Login to Restate using Google</Text>
          <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-200 rounded-full w-full py-4 mt-2'>
            <View className='flex flex-row justify-center items-center gap-2'>
              <Image source={icons.google} className='w-5 h-5' resizeMode='contain'/>
              <Text className='text-lg font-rubik-medium text-black-300'>Continue with google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signin