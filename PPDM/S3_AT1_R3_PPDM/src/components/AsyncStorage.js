import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
  try {
    console.log("setItem", key + value);
    await AsyncStorage.setItem(key, value);
    console.log(await AsyncStorage.getItem(key));
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (key, value) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const removeItem = async (key, value) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
