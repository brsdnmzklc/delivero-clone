import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../../sanity";
import { PlusCircleIcon, MinusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../context/features/basketSlice";
const DishCard = ({
  id,
  name,
  description,
  price,
  imgUrl,
  restaurantId,
  restaurantName,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const handleIsPressed = () => {
    setIsPressed(!isPressed);
  };

  const addItemToBasket = () => {
    dispatch(
      addToBasket({
        id,
        name,
        description,
        price,
        imgUrl,
        restaurantId,
        restaurantName,
      })
    );
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={handleIsPressed}
        className={
          !isPressed
            ? "flex-row p-5  border-b border-gray-300 bg-white"
            : "flex-row p-5   bg-white"
        }
      >
        <View className="flex-1 pr-2">
          <Text className="font-semibold text-l">{name}</Text>
          <Text className="text-xs my-2 text-gray-500">{description}</Text>
          <Text>£ {price}</Text>
        </View>
        <Image
          className="w-16 h-16 rounded"
          source={{ uri: urlFor(imgUrl).url() }}
        />
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-2 border-b border-gray-300 ">
          <View className="flex-row  px-5 items-center  mb-2 ">
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                className="mr-1"
                size={30}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
            <Text className="mx-1 text-xl text-[#00CCBB]">{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={30} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishCard;
