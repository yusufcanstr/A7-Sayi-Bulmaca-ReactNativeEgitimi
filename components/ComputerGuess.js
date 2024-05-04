import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ComputerGuess({ roundNumber, guess }) {
  return (
    <View>
      <Text>{roundNumber}</Text>
      <Text>{guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
