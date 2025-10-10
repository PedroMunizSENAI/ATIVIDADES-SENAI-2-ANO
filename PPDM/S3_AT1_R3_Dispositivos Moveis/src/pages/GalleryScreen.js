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

import { getItem } from "../components/AsyncStorage";

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
        source={{ uri: item.Poster }}
        style={[{ flex: 1 }, estilo]}
      />
    </View>
  );
}

function BackdropPhoto({ page, index, scrollX }) {
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
      source={{ uri: page.Poster }}
      style={[StyleSheet.absoluteFillObject, estilo]}
    />
  );
}

export default function GalleryScreen() {
  const [data, setData] = useState([]);

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
        ` http://www.omdbapi.com/?s=movie&page=1&apikey=e1e08026`
      );
      console.log(res.data.Search.slice(0, 10));
      setData(res.data.Search.slice(0, 10));
    } catch (error) {
      console.log("Erro ao buscar as imagens : ", error);
    }
  };

  if (data.Poster === 0) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((photo, index) => (
          <BackdropPhoto
            key={index}
            page={photo}
            index={index}
            scrollX={scrollX}
          />
        ))}
      </View>

      <Animated.FlatList
        data={data}
        keyExtractor={(index) => String(index)}
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
