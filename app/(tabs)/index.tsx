import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={style.container}
    >
      <View style={style.box}>
        <Text>Welcome to the App!</Text>
      </View>
      <View style={style.instructionBox}>
        <Text>Get started by editing app/index.tsx</Text>
      </View>
      {/* <Link href="/about" style={style.link}>Go to About</Link> */}
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  instructionBox: {
    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  link: {
    marginTop: 30,
    color: "#1e90ff",
    fontSize: 16,
  },
});