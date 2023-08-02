import { TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import { urlFor } from "../../sanity";

const CategoryCard = ({ imgUrl, title, }) => {
  return (
    <TouchableOpacity className=" bg-red-300 m-2  items-center rounded ">
      <Image
        className="w-20 h-20 rounded"
        source={{
          uri: urlFor(imgUrl).url(),
        }}
      />
      <Text className="absolute bottom-1 left-1 mt-2 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
