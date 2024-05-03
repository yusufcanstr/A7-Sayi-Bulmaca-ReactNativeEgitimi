import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Title from "../components/Title";
import ComputerNumber from "../components/ComputerNumber";
import CustomButton from "../components/CustomButton";

export default function GameScreen({ userNumber }) {
  const initialGuess = generateNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  let minNumber = 1;
  let maxNumber = 99;

  function nextGuesssHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction == "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Hadi Oradan!", "Yanlış olduğunu bile bile basıyorsun !!!", [
        {text:'Tamam', style:'cancel'},
      ]);
      return;
    }

    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }
    const newRandomNumber = generateNumber(minNumber, maxNumber, currentGuess);
    setCurrentGuess(newRandomNumber);
  }

  function generateNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
      return generateNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  }
  return (
    <View style={styles.container}>
      <Title>Bilgisayar Tahmini</Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View>
        <Text>Altında mı üstünde mi ?</Text>
        <View>
          <CustomButton onPress={nextGuesssHandler.bind(this, "lower")}>
            -
          </CustomButton>
          <CustomButton onPress={nextGuesssHandler.bind(this, "greater")}>
            +
          </CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});
