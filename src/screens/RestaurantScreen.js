import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { urlFor } from "../../sanity";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../context/features/restaurantSlice";
const RestaurantScreen = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
  } = route.params;
  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, []);
  return (
    <>
      <BasketIcon  />
      <ScrollView className="flex-1 relative bg-white ">
        <Image
          className="h-48 w-full mb-5"
          source={{ uri: urlFor(imgUrl).url() }}
        />

        <Text className="font-bold text-3xl ml-2 mb-2">{title}</Text>
        <View className="flex-row space-x-1 items-center mx-3  ">
          <StarIcon size={25} color="#00CCBB" opacity={0.5} />

          <Text className="text-gray-500 text-l">
            <Text className="text-[#00CCBB]">{rating}</Text> - {genre}
          </Text>
          <MapPinIcon size={22} color="#00CCBB" opacity={0.5} />
          <Text className="text-gray-500 text-xs w-64">Nearby - {address}</Text>
        </View>
        <Text className="mx-3 leading-4 text-s text-gray-500 py-4">
          {short_description}
        </Text>

        <Text className="font-bold text-2xl mx-3 mt-2">Menu</Text>
        {/* Menu */}
        <Menu dishes={dishes} restaurantId={id} restaurantName={title} />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-6 left-3 bg-gray-300 rounded-full p-1"
        >
          <ArrowLeftIcon size={25} color="#00CCBB" />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
