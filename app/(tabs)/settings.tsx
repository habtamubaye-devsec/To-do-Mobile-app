import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@/hooks/useTheme";

const SettingsScreen = () => {
  const { toggleDarkMode } = useTheme();

  return (
    <View>
      <Text>SettingsScreen</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text style={style.link}>Tap here to toggle Dark Mode</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

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
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    elevation: 5,
  },
  instructionBox: {
    marginTop: 20,
    borderRadius: 10,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
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
