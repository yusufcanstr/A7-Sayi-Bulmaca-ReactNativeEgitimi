import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";

export default function GameStartScreen() {
  return (
    <View style={styles.container}>
      <Text>Sayı Tahmin Uygulaması</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} keyboardType="number-pad" />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton>Temizle</CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton>Onayla</CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
    width: 50,
    height: 50,
    marginVertical: 10,
    fontSize: 35,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: 'row',

  },
  buttonContainer:{
    flex: 1,
    
  },
});
