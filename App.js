import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";

export default function App() {
  return (
    <View>
      <GameStartScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
