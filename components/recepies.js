import React, { Component } from 'react'
import { Pressable, Text, View ,Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MasonryList from '@react-native-seoul/masonry-list';
import {mealData} from "../constants"
import Loading from "./loading"
import { useNavigation } from '@react-navigation/native';
export default function Recipes({categories , meals}) {
   const navigation = useNavigation()
    return (
      <View className="mx-4  space-y-3">
        <Text style= {{ fontSize: hp(3)}} className="font-semibold text-neutral-600"> recipes </Text>
        <View>
        {
            categories.length==0 || meals.length==0 ?(
                <Loading size="large" className="mt-20" />
                ): (
        <MasonryList
            data={meals}
            keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({item,i}) => <RecipeCard item={item} index={i} navigation= {navigation} />}
            onEndReachedThreshold={0.1}
            // onEndReached={() => loadNext(ITEM_CNT)}
       />)}
        </View>
      </View>

    )

}

const RecipeCard =( {item, index , navigation} ) => {
    let isEven = index%2==0;
    return (
        <View>
            <Pressable
            style= {{ width: '100%' , paddingLeft: isEven? 0:8, paddingRight: isEven?8:0}}
            className="flex justify-center mb-4 space-y-1"
            onPress={ ()=> navigation.navigate('reciepedetail' , { ...item})}
            >
         <Image
         source= {{uri: item.strMealThumb}}
         style ={{ width: '100%' , height : hp(35) , borderRadius :35 }}
         className= "bg-black/5"
         />
          <Text style={{fontSize: hp(1.5)}} className="font-semibold ml-2 text-neutral-600">
                    {
                        item.strMeal.length>20? item.strMeal.slice(0,20)+'...': item.strMeal
                    }
                </Text>
            </Pressable>
        </View>
    )
}