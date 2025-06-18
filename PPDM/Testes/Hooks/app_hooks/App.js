import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";

import { styles } from "./src/styles/StylesSheet";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  const [quant, setQuant] = useState(1);
  const pricePerDrink = 12.0;
  const totalPrice = quant * pricePerDrink;

  const moreProduct = () => {
    setQuant((prevQuant) => prevQuant + 1);
    console.log(totalPrice);
  };

  const lessProduct = () => {
    if (quant > 1) {
      setQuant((prevQuant) => prevQuant - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./src/assets/images/caldoDeCana.jpg")}
        style={{ width: "100%", height: "80%", resizeMode: "cover" }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 40,
            left: 30,
            width: 48,
            height: 48,
            backgroundColor: "#302e3b",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      </ImageBackground>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50%",
          backgroundColor: "#302e3b",
          borderTopRightRadius: 50,
        }}
      >
        <View style={{ padding: 30 }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 30,
              letterSpacing: 2,
              fontStyle: "italic",
            }}
          >
            Caldi Cana
          </Text>
          <Text style={{ color: "#797993" }}>Bebida Doce Sem Álcool</Text>

          <View
            style={{
              position: "absolute",
              right: 20,
              top: -30,
              backgroundColor: "#48485b",
              width: 50,
              justifyContent: "center",
              justialignItems: "center",
              padding: 5,
              borderRadius: 10,
              gap: 5,
            }}
          >
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#302e3b",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={moreProduct}
            >
              <Text
                style={{
                  color: "#fff",
                }}
              >
                +
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#797993",
                borderRadius: 20,
                textAlign: "center",
                color: "#fff",
              }}
            >
              {quant}
            </Text>
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#302e3b",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={lessProduct}
            >
              <Text style={{ color: "#fff" }}>-</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              marginTop: 10,
              gap: 20,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: "#797993",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#797993" }}>55%</Text>
              <Text style={{ color: "#797993" }}>Cana</Text>
            </View>

            <View
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: "#797993",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#797993" }}>40%</Text>
              <Text style={{ color: "#797993" }}>Água</Text>
            </View>

            <View
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: "#797993",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#797993" }}>5%</Text>
              <Text style={{ color: "#797993" }}>Açucar</Text>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              gap: 20,
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: "40%",
                backgroundColor: "#13132a",
                padding: 15,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "#797993" }}>
                R$12,00{" "}
                <Text style={{ color: "#797993" }}>Valor Caldo de Cana</Text>{" "}
              </Text>
            </View>

            <View
              style={{
                width: "40%",
                backgroundColor: "#13132a",
                padding: 15,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "#797993" }}>
                R$16,00{" "}
                <Text style={{ color: "#797993" }}>Valor Com Frete</Text>{" "}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, backgroundColor: "#000", paddingLeft: 30 }}>
          <Text style={{ color: "#fff", fontSize: 18, marginTop: 20 }}>
            Total Order
          </Text>

          <View
            style={{
              width: "60%",
              paddingTop: 20,
              flexDirection: "row",
              gap: 20,
              justifyContent: "space-evenly",
            }}
          >
            <View
              style={{
                alignItems: "center",
                width: 90,
                height: 50,
                justifyContent: "flex-end",
              }}
            >
              <Entypo name="drink" size={24} color="#797993" />
              <Text style={{ color: "#797993", fontSize: 12 }}>
                Total Carrinho
              </Text>
            </View>

            <View
              style={{
                alignItems: "center",
                width: 90,
                height: 50,
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ color: "#ffffff", fontSize: 17 }}>
                R${totalPrice}
              </Text>
              <Text style={{ color: "#797993" }}>Preço Total</Text>
            </View>
          </View>

          <View
            style={{
              position: "absolute",
              right: 60,
              top: 20,
              backgroundColor: "#48485b",
              width: 60,
              height: 110,
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              borderRadius: 10,
              gap: 10,
            }}
          >
            <AntDesign name="creditcard" size={24} color="302e3b" />
            <Text style={{ color: "302e3b", fontSize: 6 }}>MasterCard</Text>
            <Text style={{ color: "#ffffff" }}>Pay</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
