import { Spotify } from "./src/features/SpotifyIntegration";
import { Steps } from "./src/features/StepDetection";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Spotify></Spotify>
      <Steps></Steps>
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
