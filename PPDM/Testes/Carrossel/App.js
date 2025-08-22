import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from "react-native-reanimated";

import axios from "axios";

const { width } = Dimensions.get("screen");
const imageWidth = width * 0.7;
const imageHeight = imageWidth * 1.76;
const spacing = 12;

function Photo({ item, index, scrollX }) {
  const estilo = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [1.6, 1, 1.6]
          ),
        },
        {
          rotate: `${interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [15, 1, -15]
          )}deg`,
        },
      ],
    };
  });
  return (
    <View
      style={{
        width: imageWidth,
        height: imageHeight,
        overflow: "hidden",
        borderRadius: 20,
      }}
    >
      <Animated.Image
        source={{ uri: item.src.large }}
        style={[{ flex: 1 }, estilo]}
      />
    </View>
  );
}

function BackdropPhoto({ photo, index, scrollX }) {
  const estilo = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value,
        [index - 1, index, index + 1],
        [0, 1, 0]
      ),
    };
  });
  return (
    <Animated.Image
      source={{ uri: photo.src.large }}
      style={[StyleSheet.absoluteFillObject, estilo]}
    />
  );
}

export default function App() {
  const [data, setData] = useState({ photos: [] });

  useEffect(() => {
    fetchData();
  }, []);

  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((e) => {
    scrollX.value = e.contentOffset.x / (imageWidth + spacing);
  });

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(
          "mobile wallpaper"
        )}&orientation=portrait`,
        {
          headers: {
            Authorization:
              "7Cvi5Ka37WX7UBLreqtQ5lCgOQdn2ePJ7SIcdnowCEPsfx2JQgIehsL8",
          },
        }
      );
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("Erro ao buscar as imagens : ", error);
    }
  };

  if (data.photos.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFillObject}>
        {data.photos.map((photo, index) => (
          <BackdropPhoto
            key={photo.id}
            photo={photo}
            index={index}
            scrollX={scrollX}
          />
        ))}
      </View>

      <Animated.FlatList
        data={data.photos}
        keyExtractor={(item) => String(item.id)}
        horizontal
        snapToInterval={imageWidth + spacing}
        decelerationRate={"fast"}
        contentContainerStyle={{
          gap: spacing,
          paddingHorizontal: (width - imageWidth) / 2,
          alignItems: "center",
        }}
        renderItem={({ item, index }) => (
          <Photo item={item} index={index} scrollX={scrollX} />
        )}
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
