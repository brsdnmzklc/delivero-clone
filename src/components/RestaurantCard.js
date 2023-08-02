import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../../sanity";
import { useNavigation } from "@react-navigation/native";
const RestaurantCard = ({
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
}) => {
  const navigation = useNavigation();
  const navigationHandler = () => {
    navigation.navigate("Restaurant", {
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
    });
  };

  return (
    <TouchableOpacity
      className="bg-white m-2 rounded shadow  "
      style={styles.shadow}
      onPress={navigationHandler}
    >
      <Image
        resizeMode="cover"
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-36 w-full rounded-t"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>

        <View className="flex-row space-x-1 items-center  ">
          <StarIcon size={22} color="#00CCBB" opacity={0.5} />
          <Text className="text-gray-500 text-xs">
            <Text className="text-green-500">{rating}</Text> - {genre}
          </Text>
        </View>

        <View className="flex-row space-x-1 items-center  ">
          <MapPinIcon size={22} color="gray" opacity={0.5} />
          <Text className="text-gray-500 text-xs w-64">Nearby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
export default RestaurantCard;
