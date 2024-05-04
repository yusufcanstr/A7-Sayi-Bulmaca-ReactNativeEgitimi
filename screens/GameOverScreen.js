import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.container}>
      <Title>Oyun Tamamlandı !</Title>
      <View style={styles.imageView}>
        <Image style={styles.image} source={require("../assets/success.jpg")} />
      </View>
      <Text style={styles.result}>
        <Text style={styles.countAndNumber}>{roundsNumber}</Text> Deneme ile
        buldun.
        <Text style={styles.countAndNumber}>{userNumber}</Text> Sayısını buldun
      </Text>
      <CustomButton onPress={onStartNewGame}>Yeni Oyuna Başla</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageView: {
    width: 250,
    height: 250,
    overflow: "hidden",
    borderRadius: 125,
    borderWidth: 3,
    borderColor: "orange",
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  result: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  countAndNumber: {
    color: "red",
  },
});
