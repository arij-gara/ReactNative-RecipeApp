import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native'
import {categoryData} from "../constants"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function Categories ( {activeCategory , handleChangeCategory, categories}) {
  
    return (
      <View>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"        
        contentContainerStyle={{ paddinHorizantal :15}}>

            { categories.map ((categ,index) => {
                 let isActive = categ.strCategory==activeCategory;
                 let activeButtonClass = isActive? ' bg-amber-400': ' bg-black/10';
                return (
                <TouchableOpacity 
                key={index}
                onPress={
                    ()=> handleChangeCategory(categ.strCategory)
                }
                className="flex items-center space-y-1"
                
                >
                    <View className={"rounded-full p-[6px]"+activeButtonClass}>
                    <Image 
                     source={{ uri :categ.strCategoryThumb}}
                      style= {{ width: hp(6) , height: hp(6) }}
                      className="rounded-full"
                    />
                      
                    
                    </View>
                    <Text className="text-neutral-600" style= {{ fontSize : hp(1.6)}}>{categ.strCategory}</Text> 
                </TouchableOpacity>
                )
                })}
        </ScrollView>
       
      </View>

    )
  }


