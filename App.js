import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessCounts, setGuessCounts] = useState(0);

  function sendedNumberHandler(sendedNumber) {
    setUserNumber(sendedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberofGuess) {
    // Kaç tahminde geldiği bize yollandı onGameOver da
    setGameIsOver(true);
    setGuessCounts(numberofGuess);
  }

  function startNewGameHandler() {
    setUserNumber(null); // userNumber null eşit olduğunda zaten oyun tekrar başlayacak
    setGuessCounts(0); // kaç taminde bildiğimizi 0 yapıyoruz
  }

  let screen = <GameStartScreen onSendNumber={sendedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) { // userNumber null ise oyunu başlat ve gameIsOver ==== true ise 
    screen = (
      <GameOverScreen
        roundsNumber={guessCounts}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={["rgba(0,0,0,0.8)", "transparent"]}
    >
      <ImageBackground
        style={styles.container}
        source={require("./assets/back.jpeg")}
        imageStyle={styles.backImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    opacity: 0.7,
  },
});
