import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../../sanity";
import { useDispatch } from "react-redux";
import { removeAllFromBasket } from "../context/features/basketSlice";
const BasketItemCard = ({ price, name, img, quantity, id }) => {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeAllFromBasket({ id }));
  };

  console.log(id);
  return (
    <View className="flex-row w-full justify-between items-center p-3 bg-white border-b-[1px] border-gray-400  ">
      <View className="flex-row items-center  ">
        <Text className="text-gray-500  mx-1">{quantity}</Text>
        <Text className="text-gray-500 text-xs">x</Text>
        <Image
          resizeMode="cover"
          source={{ uri: urlFor(img).url() }}
          className=" rounded-full h-12 w-12 mx-3"
        />
        <Text className="font-bold w-32">{name}</Text>
      </View>
      <Text>£{price}</Text>
      <TouchableOpacity onPress={removeItemFromBasket}>
        <Text className="text-xs text-gray-500">Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketItemCard;
