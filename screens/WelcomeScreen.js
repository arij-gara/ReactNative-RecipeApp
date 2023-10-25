
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {

    // const ring1padding = useSharedValue(0);
    // const ring2padding = useSharedValue(0);
    
    const navigation = useNavigation();

    useEffect(()=>{
        // ring1padding.value = 0;
        // ring2padding.value = 0;
        // setTimeout(()=> ring1padding.value = withSpring(ring1padding.value+hp(5)), 100);
        // setTimeout(()=> ring2padding.value = withSpring(ring2padding.value+hp(5.5)), 300);

        setTimeout(()=> navigation.navigate('Home'), 2500)
    },[])
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500 ">
      <StatusBar style="light" />
      
       {/* logo image with rings */}
       <View className="bg-white/20 rounded-full " style= {{ padding :hp(5.5)}}>
        <View className="bg-white/20 rounded-full "  style= {{ padding : hp(5)}}>
         <Image 
         source= {require("../assets/images/welcome.png")}
         style= {{ width: hp(20) , height: hp(20)}}
         />
        </View>
       </View>
       {/* title and punchline */}
       <View className="flex items-center space-y-2">
        <Text  style ={{fontSize: hp(7)}}className="font-bold text-white tracking-wildest ">
        foody
        </Text >
        <Text  style ={{fontSize: hp(2)}} className="font-bold text-white tracking-wildes ">
            food is always right
        </Text>
       </View>
    </View>
  );
}


