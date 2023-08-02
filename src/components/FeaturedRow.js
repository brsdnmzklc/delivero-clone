import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";
const FeaturedRow = ({ title, description, id, navigation }) => {
  const [restaurants, setRestaurants] = useState([]);
  const getRestaurants = async () => {
    try {
      const response = await axios.get(
        `
        https://533smx9g.api.sanity.io/v2021-10-21/data/query/production?query=*%5B+_id%3D%3D+%22${id}%22+%5D%7B%0A++%0A+...%2C%0A+restaurant%5B%5D+-%3E+%7B%0A+++...%2C%0A+++dishes%5B%5D+-%3E+%7B%0A+++++...%0A+++%7D%0A+%7D%0A+%0A%7D
     `
      );
      setRestaurants(response.data.result[0].restaurant);
    } catch (error) {}
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantCard
            key={item._id}
            id={item._id}
            title={item.name}
            imgUrl={item.image}
            rating={item.rating}
            genre={item.genre}
            address={item.address}
            short_description={item.short_description}
            dishes={item.dishes}
            long={item.long}
            lat={item.lat}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default FeaturedRow;
